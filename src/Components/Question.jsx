/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/global-styles.css'
import '../styles/Question.css'
const Question = ({number,question,list})=>{
    const [inputValue, setInputValue] = useState(question)

    

    return(
        <div className="cont-question">
            <h2>Ejercicio {number}</h2>
            <input
                value={inputValue} 
                onChange={(e)=>setInputValue(e.target.value)}
            />
                <div className='cont-answer'>
                    {list.map((answer,index)=>{
                        return(
                            <button className='btn btn-info' key={index}>{answer.answer}</button>
                        )
                    })}
                </div>
        </div>

    )
}
export default Question