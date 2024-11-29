import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Amor,</h1>
      <p style={styles.message}>Essa mensagem é apenas para dizer o quanto eu sou feliz por ter você ao meu lado.</p>
      <p style={styles.message}>Eu te amo hoje e sempre!</p>
      <p style={styles.signature}>Marcelo</p>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '36px',
    color: '#e74c3c',
    marginBottom: '20px',
  },
  message: {
    fontSize: '24px',
    marginBottom: '10px',
    lineHeight: '1.6',
  },
  signature: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginTop: '20px',
  }
};

export default Home;
