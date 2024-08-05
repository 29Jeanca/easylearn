/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/global-styles.css';
import '../styles/Question.css';
import { getGrammarAnswers } from '../extras/getPageResources';

const Question = ({ number, question, id }) => {
  const [inputValue, setInputValue] = useState(question);
  const [list, setList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null); 

  useEffect(() => {
    const getAnswers = async () => {
      const answers = await getGrammarAnswers(id);
      setList(answers);
    };
    getAnswers();
  }, [id]);

  const handleAnswer = (index) => {
    setSelectedIndex(index); 
    console.log("Selected answer:", list[index]);
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
            className={`btn button-answer ${selectedIndex === index ? 'btn-success' : 'btn-info'}`}
            key={index}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
