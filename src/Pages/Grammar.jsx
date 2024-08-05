import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import "../styles/global-styles.css";
import "../styles/Grammar.css";
import ListPractice from "../Components/ListPractice";
import { getGrammarExercises, getGrammarTopics } from "../extras/getPageResources";
import Practice from "../Components/Practice";
const Grammar = () => {
    const [topics,setTopics] = useState([])
    const [exercises,setExercises] = useState([])
    useEffect(()=>{
        const getAllGrammarTopics = async () => {
            const topic = await getGrammarTopics()
            setTopics(topic)
        }
        const getExercises = async () => { 
            const exercies = await getGrammarExercises()
            setExercises(exercies)
        }
        getExercises()
        getAllGrammarTopics()
    },[])

    return (
        <>
            <NavBar/>
            <main>
                <section className="cont-title">
                    <h2>¡Estudia la gramática!</h2>
                    <article className="cont-subtitle">
                    <p>¡En esta sección encontrarás recursos para estudiar la gramática del inglés.
                        No te pierdas los ejercicios y las explicaciones Aprende de forma sencilla y rápida!
                    </p>
                    </article>
                </section>

                <section className="cont-grammar">
                    <h3 className="text-center">Temas de gramática</h3>
                    <div className="container">
                       <ListPractice list={topics}/>
                    </div>
                </section>
                <section>
                    <h3 className="text-center">Práctica</h3>
                    <div className="const-main-questions">
                        <Practice title={"Present Simple Practice"} description={"En esta práctica te centraras en usar el presente simple para describir acciones y hábitos diarios"}  list={exercises} key={exercises.id}/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
export default Grammar;