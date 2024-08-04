import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import "../styles/global-styles.css";
import "../styles/Grammar.css";
import ListPractice from "../Components/ListPractice";
import { getGrammarTopics } from "../extras/getPageResources";

const Grammar = () => {
    const [topics,setTopics] = useState([])

    useEffect(()=>{
        const getAllGrammarTopics = async () => {
            const topic = await getGrammarTopics()
            setTopics(topic)
        }
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
            </main>
            <Footer/>
        </>
    )
}
export default Grammar;