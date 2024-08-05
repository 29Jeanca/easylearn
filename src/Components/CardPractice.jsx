/* eslint-disable react/prop-types */
import '../styles/global-styles.css'
const CardPractice = ({ title, description }) => {
    return (
        <div className="col-12 col-md-6">
            <div className="card">
                <div className="card-body card-topics">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <a href="#presentSimple" className="btn btn-success">Ver más</a>
                </div>
            </div>
        </div>
    );
	}
export default CardPractice;