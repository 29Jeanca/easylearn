/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/global-styles.css';
import '../styles/Question.css';
import { getGrammarAnswers,getCorrectGrammarAnswer } from '../extras/getPageResources';

const Question = ({ number, question, id }) => {
  const [inputValue, setInputValue] = useState(question)
  const [list, setList] = useState([])
  const [selectedIndex, setSelectedIndex] = useState(null) 
  const [correctAnswer, setCorrectAnswer] = useState(null) 
  const [listAnswers, setListAnswers] = useState([])

  useEffect(() => {
    const getAnswers = async () => {
      const answers = await getGrammarAnswers(id);
      setList(answers);
    };
    const getCorrectAnswer = async () => {
      const correctAnswer = await getCorrectGrammarAnswer(id)
      setCorrectAnswer(correctAnswer)
    }
    getAnswers()
    getCorrectAnswer()
  }, [id]);

  const handleAnswer = (index) => {
    setSelectedIndex(index); 
    console.log("Selected question:", question);
    console.log("Correct answer:", correctAnswer);
    console.log("Selected answer:", list[index]);
    listAnswers.push(list[index])
    console.log("List answers:", listAnswers)
  }
  const validateAnswer = () => {
      if (correctAnswer === list[selectedIndex]) {
        alert("Correcto")
      } else {
        alert("Incorrecto")
      }
  }

  return (
    <div className="cont-question">
      <h2>Ejercicio {number}</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input-question"
      />
      <div className="cont-answer">
        {list.map((answer, index) => (
          <button
            onClick={() => handleAnswer(index)}
            className={`btn button-answer ${selectedIndex === index ? 'btn-selected-answer' : 'btn-info'}`}
            key={index}
          >
            {answer}
          </button>
        ))}
      </div>
        <button onClick={validateAnswer} className="btn btn-success mt-3">Validar</button>
    </div>
  );
}

export default Question;
