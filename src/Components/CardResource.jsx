/* eslint-disable react/prop-types */
const CardResource = ({title,links})=>{
    return(
        <>
          <div className="card-modules">
          <h2>{title}</h2>
          <ul>
            {links.map((link,index)=>{
                return(
                    <li key={index}>
                    <a href={link.url} target="_blank">{link.title}</a>
                    </li>
                )
            })}
          </ul>
        </div>
        </>
    )
}
export default CardResource;