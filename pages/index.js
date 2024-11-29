import React, { useState, useRef } from 'react';

function Home() {
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar a exibição da mensagem de amor
  const audioRef = useRef(null);

  // Função para tocar a música e exibir a mensagem de amor
  const handleClick = () => {
    if (audioRef.current) {
      audioRef.current.muted = false; // Desmutar o áudio
      audioRef.current.play(); // Iniciar a reprodução do áudio
    }
    setShowMessage(true); // Exibir a mensagem de amor após o clique
  };

  return (
    <div style={styles.container}>
      {!showMessage ? (
        <div>
          <h1 style={styles.heading}>botão misterioso</h1>
          <button style={styles.button} onClick={handleClick}></button>
        </div>
      ) : (
        <div>
          <h1 style={styles.heading}>Maria, minha linda 😍</h1>
          <p style={styles.message}>Sou muito feliz por ter você ao meu lado.</p>
          <p style={styles.message}>Aceitarias essa flor? 👉👈</p>

          {/* Adicionando a imagem abaixo da mensagem */}
          <img 
            src="https://rvideos1.memedroid.com/videos/UPLOADED118/633db081d79e7.webp" 
            alt="Mensagem de Amor" 
            style={styles.image} 
          />
        </div>
      )}

      {/* Componente de Música de Fundo com autoplay, mas mudo inicialmente */}
      <audio ref={audioRef} autoPlay loop muted>
        <source 
          src="https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/9LXkfSDPi42qwFTvsi9y7vtPolJgsm6y09svCjUe.mp3?download=1&name=Dee%20Yan-Key%20-%20Christmas.mp3" 
          type="audio/mp3" 
        />
        Seu navegador não suporta a tag de áudio.
      </audio>
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
  button: {
    width: '100px', // Largura do botão (100px)
    height: '100px', // Altura do botão (100px)
    borderRadius: '50%', // Deixa o botão totalmente circular
    background: 'linear-gradient(45deg, #e74c3c, #f39c12)', // Gradiente em tons de vermelho
    border: 'none', // Sem borda
    cursor: 'pointer', // Mostra o cursor de "mãozinha" ao passar sobre o botão
    transition: 'all 0.3s ease', // Transição suave para o hover
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', // Sombra suave
    marginTop: '20px', // Distância do botão em relação à mensagem
  },
  buttonHover: {
    transform: 'scale(1.1)', // Aumenta o tamanho do botão no hover
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)', // Aumenta a sombra
  },
  image: {
    width: '100%', // Ajusta a largura da imagem
    maxWidth: '500px', // Limita a largura máxima
    marginTop: '20px', // Espaço entre o texto e a imagem
    borderRadius: '8px', // Adiciona bordas arredondadas
  },
};

export default Home;
