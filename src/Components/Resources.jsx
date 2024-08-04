import CardResource from "./CardResource";

const Resources = () => {
    const linkBooks=[
        {
            title:"Manuales para aprender inglés",
            url:"https://aprendergratis.es/tutoriales-y-manuales/manuales-de-ingles-para-descargar-a1-c1/"
        },
        {
            title:"Libros en PDF para aprender inglés",
            url:"https://ensedeciencia.com/2022/09/15/los-mejores-libros-para-aprender-ingles-en-formato-pdf/"
        },
    ]
    const linkWebs=[
        {
            title:"Mide tu nivel de inglés",
            url:"https://www.cambridgeenglish.org/es/test-your-english/"
        },
        {
            title:"Cursos adicionales",
            url:"https://www.bbc.co.uk/learningenglish"
        },
    ]
    const linkVideos=[
        {
            title:"Canal de Youtube para aprender inglés",
            url:"https://www.youtube.com/@KaleAnders"
        },
        {
            title:"Historias en inglés",
            url:"https://www.youtube.com/watch?v=VNgnAABR5Nc"
        },
    ]
    return(
        <>
          <section
          id="recursos"
          className="d-flex flex-column justify-content-center align-items-center section-modules"
        >
          <article className="text-center">
            <h2>Recursos adicionales</h2>
            <p>Puedes ver los siguientes vídeos o visitar las páginas para aumentar tu nivel</p>
          </article>
          <section className="cont-modules">    
          <CardResource title={"Libros recomendados"} links={linkBooks}/>
          <CardResource title={"Sitios web recomendados"} links={linkWebs}/>
          <CardResource title={"Vídeos recomendados"} links={linkVideos}/>
          </section>
        </section>
        </>
    )
}
export default Resources;