/* eslint-disable react/prop-types */
import CardModules from './CardModules';
const ListModules = ({ modules }) => {
    return(
        <section className="cont-modules">
            {modules.map((module) => (
                <CardModules title={module.title} description={module.description} key={module.id} link={module.link}/>
            ))}
        </section>
    )
}
export default ListModules;