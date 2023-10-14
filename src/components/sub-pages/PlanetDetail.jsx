import PropTypes from 'prop-types';

export default function PlanetDetail({planetList, indexs}){
    return(
        <div className="section starship-detail">
            <div className="container border border-4 border-ddark">
               <div className="row">
                    <div className="col-4 text-start">
                        <ul style={{listStyleType:"none"}}>
                            <li><b>Name</b></li>
                            <li><b>Rotation Period</b></li>
                            <li><b>Orbital Period</b></li>
                            <li><b>Diameter</b></li>
                            <li><b>Climate</b></li>
                            <li><b>Gravity</b></li>
                            <li><b>Terrain</b></li>
                            <li><b>Surface water</b></li>
                            <li><b>Population</b></li>
                        </ul>
                    </div>
                    <div className="col-7 text-start">
                    <ul style={{listStyleType:"none"}}>
                            <li>: {planetList[indexs].name}</li>
                            <li>: {planetList[indexs].rotation_period}</li>
                            <li>: {planetList[indexs].orbital_period}</li>
                            <li>: {planetList[indexs].diameter}</li>
                            <li>: {planetList[indexs].climate}</li>
                            <li>: {planetList[indexs].gravity}</li>
                            <li>: {planetList[indexs].terrain}</li>
                            <li>: {planetList[indexs].surface_water}</li>
                            <li>: {planetList[indexs].population}</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}


PlanetDetail.propTypes = {
    planetList: PropTypes.array.isRequired,
    indexs: PropTypes.number.isRequired,
  };