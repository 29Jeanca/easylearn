import Footer from "../Components/Footer";
import NavBar from "../Components/Navbar";
import "../styles/global-styles.css";
import "../styles/Grammar.css";
const Grammar = () => {
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
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Present Simple</h3>
                                        <p>El presente simple es uno de los tiempos verbales más utilizados en inglés. Aprende cómo se forma y cómo se usa.</p>
                                        <a href="" className="btn btn-primary">Ver más</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Present Continuous</h3>
                                        <p>El presente continuo es un tiempo verbal que se utiliza para hablar de acciones que están ocurriendo en el momento de hablar.</p>
                                        <a href="" className="btn btn-primary">Ver más</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Present Perfect</h3>
                                        <p>El presente perfecto es un tiempo verbal que se utiliza para hablar de acciones que ocurrieron en un tiempo no determinado del pasado.</p>
                                        <a href="" className="btn btn-primary">Ver más</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h3>Present Perfect Continuous</h3>
                                        <p>El presente perfecto continuo es un tiempo verbal que se utiliza para hablar de acciones que comenzaron en el pasado y continúan en el presente.</p>
                                        <a href="" className="btn btn-primary">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
export default Grammar;