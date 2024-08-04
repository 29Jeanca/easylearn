import {getResources } from '../extras/getPageResources';
import '../styles/Home.css'
import '../styles/global-styles.css'
import ListModules from "./ListModules";
import { useState,useEffect } from "react";
const Modules = () => {
    const [modules, setModules] = useState([]);

    useEffect(()=>{
        const getCourses = async()=>{
            const courses = await getResources({resource:'courses'})
            setModules(courses)
        }
        getCourses()
    },[])

    return (
        <section id="modulos" className="d-flex flex-column justify-content-center align-items-center section-modules">
        <article className="text-center">
            <h2>Modulos</h2>
            <p>Elige entre los modulos disponibles para prácticar</p>
        </article>
            <ListModules modules={modules}/>
        </section>
    )
}
export default Modules;