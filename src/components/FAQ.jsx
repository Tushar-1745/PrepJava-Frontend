import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is PrepJava?',
      answer: 'PrepJava is a self-made educational platform for software engineering students to learn Java, SQL, DSA, Spring Boot, and interview preparation.',
    },
    {
      question: 'Is PrepJava free to use?',
      answer: 'Yes, PrepJava is completely free for students to access all content including Java tutorials, mock tests, and code execution features.',
    },
    {
      question: 'Can I practice SQL queries and Java code?',
      answer: 'Absolutely! PrepJava allows you to write and execute Java and SQL code using JDoodle integration in real time.',
    },
    {
      question: 'How can I contact the PrepJava team?',
      answer: 'You can use the Contact Us page on the website to send a message. Admins will respond promptly to your queries.',
    },
    {
      question: 'Does PrepJava provide interview preparation?',
      answer: 'Yes, PrepJava includes curated questions and AI-powered feedback on your answers to help you prepare for technical interviews.',
    },
  ];

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem',
      backgroundColor: '#ecf0f1',
      fontFamily: 'Poppins, sans-serif',
      color: '#2c3e50',
      minHeight: '100vh',
    },
    header: {
      fontSize: '2rem',
      marginBottom: '2rem',
      color: '#1abc9c',
    },
    faqItem: {
      marginBottom: '1rem',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      padding: '1rem 1.2rem',
      cursor: 'pointer',
    },
    questionWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    questionText: {
      fontWeight: '600',
      fontSize: '1.05rem',
    },
    icon: {
      fontSize: '1.3rem',
      color: '#1abc9c',
      fontWeight: 'bold',
    },
    answer: {
      marginTop: '0.6rem',
      lineHeight: '1.6',
      color: '#34495e',
    },
  };

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} style={styles.faqItem} onClick={() => toggleAnswer(index)}>
          <div style={styles.questionWrapper}>
            <span style={styles.questionText}>{faq.question}</span>
            <span style={styles.icon}>{openIndex === index ? '–' : '+'}</span>
          </div>
          {openIndex === index && <div style={styles.answer}>{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
