import React, { useState, useEffect } from 'react';
import { List, Card, Typography, Spin, Empty, Tag, message as antMessage } from 'antd'; // Componentes AntD para exibição, adicionado message
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../../utils/firebase'; // Instância do Firestore
import { collection, query, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { MessageOutlined, UserOutlined, FieldTimeOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

/**
 * Formata um objeto Timestamp do Firebase para uma string de data/hora legível.
 * @param {Timestamp} firebaseTimestamp - O objeto Timestamp do Firebase.
 * @returns {string} - Data e hora formatadas.
 */
const formatTimestamp = (firebaseTimestamp) => {
  if (!firebaseTimestamp) return 'Data desconhecida';
  // Converte para objeto Date do JavaScript
  const date = firebaseTimestamp.toDate();
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

/**
 * CosmicMessagesList Component
 *
 * Exibe uma lista de "Mensagens Cósmicas" buscadas do Firestore em tempo real.
 * Utiliza componentes Ant Design (List, Card) para a apresentação.
 * Inclui estados de carregamento e lista vazia, e animações com Framer Motion.
 */
const CosmicMessagesList = () => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Cria uma query para buscar mensagens, ordenadas pela data de forma descendente (mais recentes primeiro)
    const q = query(collection(db, 'mensagens_cosmicas'), orderBy('timestamp', 'desc'));

    // Configura um listener em tempo real com onSnapshot
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedMessages = [];
      querySnapshot.forEach((doc) => {
        fetchedMessages.push({ id: doc.id, ...doc.data() });
      });
      setMessages(fetchedMessages);
      setIsLoading(false);
    }, (error) => {
      console.error("Erro ao buscar mensagens cósmicas em tempo real:", error);
      antMessage.error("Não foi possível carregar as mensagens do cosmos.");
      setIsLoading(false);
    });

    // Função de limpeza para remover o listener quando o componente for desmontado
    return () => unsubscribe();
  }, []); // Array de dependências vazio para rodar apenas na montagem e desmontagem

  const listItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ // Adiciona um delay customizado para cada item
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Efeito cascata
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-10">
        <Spin size="large" tip={<span className="text-text-muted font-body">Buscando ecos do universo...</span>} />
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
        <Empty
          image={<MessageOutlined style={{ fontSize: '48px', color: 'var(--ant-color-text-quaternary, #A094B7)' }} />}
          description={
            <span className="text-text-muted font-body">
              O cosmos está silencioso por enquanto... Seja o primeiro a deixar uma mensagem!
            </span>
          }
        />
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <List
        grid={{ gutter: 24, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }} // Grid responsivo
        dataSource={messages}
        renderItem={(item, index) => (
          <List.Item className="!p-0"> {/* Remove padding padrão do List.Item para o Card controlar */}
            <motion.div
              custom={index} // Passa o índice para a variante 'visible' para o delay em cascata
              variants={listItemVariants}
              initial="hidden"
              animate="visible"
              exit="exit" // Para AnimatePresence se a lista puder ter itens removidos dinamicamente
              layout // Anima mudanças de layout se a ordem/número de itens mudar
            >
              <Card
                hoverable // Efeito de hover sutil do AntD
                className="border border-accent-gold/20 shadow-lg bg-primary-dark/60 backdrop-blur-sm h-full flex flex-col"
                // style={{ borderColor: 'var(--ant-color-border-secondary, #4A00E0)', backgroundColor: 'var(--ant-color-bg-container, #2C005E)'}}
              >
                <Card.Meta
                  avatar={<UserOutlined style={{ color: 'var(--ant-color-text-secondary, #A094B7)', fontSize: '1.5rem' }} />}
                  title={<Text className="!text-accent-gold-light font-heading text-lg">{item.author || 'Anônimo Cósmico'}</Text>}
                  description={
                    <Text className="!text-text-muted/80 font-body text-xs">
                      <FieldTimeOutlined style={{ marginRight: '6px' }} />
                      {formatTimestamp(item.timestamp)}
                    </Text>
                  }
                  className="mb-4"
                />
                <Paragraph className="!text-text-light font-body flex-grow" ellipsis={{ rows: 4, expandable: true, symbol: <Text className="!text-accent-gold hover:!text-accent-gold-light">mais</Text> }}>
                  {item.text}
                </Paragraph>
              </Card>
            </motion.div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default CosmicMessagesList;
