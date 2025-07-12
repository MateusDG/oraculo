import React, { useState } from 'react';
import { Form, Input, Button, message as antMessage } from 'antd'; // Importa componentes AntD e message para feedback
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { UserOutlined } from '@ant-design/icons';
import { FaPaperPlane, FaUserAstronaut } from 'react-icons/fa';
import { db } from '../../utils/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

/**
 * CosmicMessageForm Component
 *
 * Formulário para usuários enviarem uma "Mensagem Cósmica" que será salva no Firestore.
 * Utiliza componentes Ant Design para o formulário e feedback ao usuário.
 * Inclui animações sutis com Framer Motion.
 */
const CosmicMessageForm = () => {
  const [form] = Form.useForm(); // Hook do AntD para controle do formulário
  const [isSubmitting, setIsSubmitting] = useState(false); // Estado para controlar o carregamento do botão

  // Função para lidar com o envio do formulário
  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      // Adiciona um novo documento à coleção 'mensagens_cosmicas'
      await addDoc(collection(db, 'mensagens_cosmicas'), {
        text: values.message,
        author: values.author || 'Anônimo Cósmico', // Define 'Anônimo Cósmico' se o autor não for fornecido
        timestamp: serverTimestamp(), // Usa o timestamp do servidor do Firebase
      });
      antMessage.success('Sua Mensagem Cósmica foi enviada ao universo! ✨');
      form.resetFields(); // Limpa o formulário após o envio bem-sucedido
    } catch (error) {
      console.error("Erro ao enviar mensagem cósmica:", error);
      antMessage.error('Houve um eco cósmico... Falha ao enviar sua mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="w-full max-w-lg p-6 md:p-8 bg-black/20 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple-400/30"
      variants={formVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-2xl md:text-3xl font-heading text-accent-gold mb-6 text-center">
        Deixe sua Mensagem Cósmica
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        name="cosmic_message_form"
        // Estilização dos labels do formulário via ConfigProvider ou classes se necessário
      >
        <motion.div whileFocus={{ scale: 1.02 }}>
          <Form.Item
            name="message"
            label={<span className="text-text-muted font-body">Sua Mensagem</span>}
            rules={[{ required: true, message: 'Por favor, escreva sua mensagem cósmica!' }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Escreva aqui seus pensamentos, intenções ou observações..."
              className="font-body"
            />
          </Form.Item>
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }}>
          <Form.Item
            name="author"
            label={<span className="text-text-muted font-body">Seu Nome (Opcional)</span>}
          >
            <Input
              placeholder="Como você gostaria de ser chamado nas estrelas?"
              prefix={<FaUserAstronaut className="site-form-item-icon text-text-muted/70 mr-2" />}
              className="font-body"
            />
          </Form.Item>
        </motion.div>

        <Form.Item className="mt-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              type="primary"
              htmlType="submit"
              loading={isSubmitting}
              icon={<FaPaperPlane />}
              size="large"
              className="w-full font-heading tracking-wider bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border-none"
            >
              {isSubmitting ? 'Enviando ao Cosmos...' : 'Enviar Mensagem'}
            </Button>
          </motion.div>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export default CosmicMessageForm;
