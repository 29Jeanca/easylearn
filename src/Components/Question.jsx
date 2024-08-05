/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../styles/global-styles.css';
import '../styles/Question.css';
import { getGrammarAnswers } from '../extras/getPageResources';

const Question = ({ number, question, id }) => {
  const [inputValue, setInputValue] = useState(question);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getAnswers = async () => {
      const answers = await getGrammarAnswers(id);
      setList(answers);
    };
    getAnswers();
  }, [id]);

  const handleAnswer = (answer) => {
    console.log("Selected answer:", answer);
  };

  return (
    <div className="cont-question">
      <h2>Ejercicio {number}</h2>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="cont-answer">
        {list.map((answer, index) => (
          <button
            onClick={() => handleAnswer(answer)}
            className="btn btn-info button-answer"
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
