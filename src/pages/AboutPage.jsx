import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Typography, Divider, List, Avatar } from 'antd';
import { QuestionCircleOutlined, BulbOutlined, RocketOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

/**
 * AboutPage Component
 *
 * Página informativa sobre o projeto "Oráculo Vidente".
 * Apresenta o conteúdo de forma estruturada e profissional usando Ant Design e Framer Motion.
 */
const AboutPage = () => {
  const pageVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.98, transition: { duration: 0.3, ease: "easeIn" } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const missionData = [
    {
      icon: <BulbOutlined />,
      title: 'Clareza e Introspecção',
      description: 'Oferecer uma ferramenta para autoconhecimento e reflexão, ajudando a iluminar questões e caminhos pessoais.',
    },
    {
      icon: <RocketOutlined />,
      title: 'Design Moderno e Imersivo',
      description: 'Criar uma experiência de usuário esteticamente agradável e intuitiva, que respeita a tradição do tarot com uma abordagem moderna.',
    },
    {
      icon: <QuestionCircleOutlined />,
      title: 'Ferramenta de Perspectiva',
      description: 'Lembrar que o oráculo oferece perspectivas e conselhos, mas o poder da decisão e da ação está sempre em suas mãos.',
    },
  ];

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={sectionVariants} custom={0} className="text-center mb-12">
        <Title level={2} className="!font-heading !text-accent-gold">Sobre o Oráculo Vidente</Title>
        <Paragraph className="!text-text-muted !font-body text-lg max-w-2xl mx-auto">
          Uma fusão de sabedoria ancestral e tecnologia moderna, criada para ser seu guia em jornadas de autodescoberta.
        </Paragraph>
      </motion.div>

      <motion.div variants={sectionVariants} custom={1}>
        <Divider className="!border-accent-gold/30"><Text className="!text-accent-gold-light !font-heading text-xl">Nossa Missão</Text></Divider>
        <List
          grid={{ gutter: 24, xs: 1, sm: 1, md: 3 }}
          dataSource={missionData}
          renderItem={item => (
            <List.Item>
              <div className="text-center p-6">
                <Avatar size={64} icon={item.icon} className="!bg-primary-medium/50 !text-accent-gold-light" />
                <Title level={4} className="!font-heading !text-text-light mt-4">{item.title}</Title>
                <Paragraph className="!text-text-muted !font-body">{item.description}</Paragraph>
              </div>
            </List.Item>
          )}
          className="mt-8"
        />
      </motion.div>

      <motion.div variants={sectionVariants} custom={2}>
        <Divider className="!border-accent-gold/30 mt-12"><Text className="!text-accent-gold-light !font-heading text-xl">O Que é o Tarot?</Text></Divider>
        <div className="p-6 bg-primary-dark/40 rounded-xl mt-8 text-left space-y-4">
          <Paragraph className="!text-text-light !font-body">
            O Tarot é um baralho de 78 cartas, usado desde o século XV, que serve como uma ferramenta simbólica para a jornada da vida. Cada carta representa um arquétipo, uma lição ou uma energia universal, divididas em Arcanos Maiores (as grandes lições da vida) e Arcanos Menores (as situações do dia a dia).
          </Paragraph>
          <Paragraph className="!text-text-light !font-body">
            Não se trata de "prever o futuro" de forma determinista, mas sim de oferecer um espelho para o seu subconsciente, ajudando a identificar padrões, desafios e oportunidades que talvez não estivessem claros. É uma linguagem simbólica que dialoga com a sua intuição.
          </Paragraph>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
