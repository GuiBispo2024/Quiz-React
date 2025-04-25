function Score({ score, total }) {
    return (
      <div className="score-box">
        <h2>Resultado final </h2>
        <p>Você acertou {score} de {total} perguntas!</p>
        <button onClick={() => window.location.reload()}>Recomeçar</button>
      </div>
    );
  }
  
  export default Score;
  