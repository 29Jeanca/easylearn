import CardResource from "./CardResource";

const Resources = () => {
    const linkBooks=[
        {
            title:"Inglés para Dummies",
            url:"https://www.amazon.es/Ingl%C3%A9s-para-Dummies-Gail-Brenner/dp/8432903286"
        },
        {
            title:"Inglés para Dummies",
            url:"https://www.amazon.es/Ingl%C3%A9s-para-Dummies-Gail-Brenner/dp/8432903286"
        },
    ]
    const linkWebs=[
        {
            title:"Inglés para Dummies",
            url:"https://www.amazon.es/Ingl%C3%A9s-para-Dummies-Gail-Brenner/dp/8432903286"
        },
        {
            title:"Inglés para Dummies",
            url:"https://www.amazon.es/Ingl%C3%A9s-para-Dummies-Gail-Brenner/dp/8432903286"
        },
    ]
    const linkVideos=[
        {
            title:"Inglés para Dummies",
            url:"https://www.amazon.es/Ingl%C3%A9s-para-Dummies-Gail-Brenner/dp/8432903286"
        },
        {
            title:"Inglés para Dummies",
            url:"https://www.amazon.es/Ingl%C3%A9s-para-Dummies-Gail-Brenner/dp/8432903286"
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