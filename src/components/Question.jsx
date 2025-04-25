function Question({ data, onAnswer }) {
    return (
      <div className="question-box">
        <h2>{data.question}</h2>
        <ul>
          {data.options.map((option) => (
            <li key={option}>
              <button onClick={() => onAnswer(option)}>{option}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Question;
  