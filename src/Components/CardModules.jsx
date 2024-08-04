/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import '../styles/CardModules.css'
import "../styles/global-styles.css";
const CardModules = ({title="PRUEBA",description="loedasdadadadadadaddasdadadadadadadadadad",link})=>{
  const navigate = useNavigate()
    return(
        <div className="card-modules">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link onClick={()=>navigate(link)}>Ir</Link>
        </div>
    );
}
export default CardModules;