import NavBar from "../Components/Navbar";
import "../styles/Home.css";
import "../styles/global-styles.css";
import Modules from "../Components/Modules";
import Resources from "../Components/Resources";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <main>
        <section className="cont-title">
          <div className="d-flex flex-column justify-content-center mx-auto">
                <h1 className="text-center">¡Bienvenido a Learn English!</h1>
                <p className="text-center">
                  Página para practicar y aprender inglés de forma sencilla y
                  rápida.
                </p>
          </div>
        </section>
        <Modules />
        <Resources />
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};
export default Home;
