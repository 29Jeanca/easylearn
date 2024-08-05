import Question from "./Question"

/* eslint-disable react/prop-types */
const Practice=({title,description,list})=>{
    return(
        <>
         <section>
            <h1>{title}</h1>
            <p>{description}</p>
         </section>
         <section className="cont-exercises">
            {list.map((exercise)=>{
                return(
                    <>
                    <Question key={exercise.id} number={exercise.id} question={exercise.question} list={list}/>
                        
                    </>
                )
            })}
         </section>
        </>
    )
}
export default Practice