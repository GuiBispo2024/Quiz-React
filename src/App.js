import {useState } from 'react';
import './App.css';
import questions from './data/questions';
import Question from './components/Question';
import Score from './components/Score';

function App() {
  const [currentQuestion,setCurrentQuestion] = useState(0)
  const [score,setScore] = useState(0)
  const [isFinished,setIsFinished] = useState(false)

  const handleAnswer = (option) => {
    if(option === questions[currentQuestion].answer){
      setScore(score+1)
    }

    const next = currentQuestion + 1
    if(next < questions.length){
      setCurrentQuestion(next)
    }else{
      setIsFinished(true)
    }
  }

  return (
    <div className="App">
      <h1>Quiz Rock internacional anos 80 e 90</h1>
      {!isFinished ? (       
        <Question data={questions[currentQuestion]} onAnswer={handleAnswer}/>
      ) : (
        <Score score={score} total={questions.length}/>
      )} 
    </div>
  );
}

export default App;
