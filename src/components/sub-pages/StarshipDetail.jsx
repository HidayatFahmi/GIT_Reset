import PropTypes from 'prop-types';

export default function StarshipDetail({starshipList, indexs}){
    return(
        <div className="section starship-detail">
            <div className="container border border-4 border-ddark">
               <div className="row">
                    <div className="col-4 text-start">
                        <ul style={{listStyleType:"none"}}>
                            <li><b>Name</b></li>
                            <li><b>Model</b></li>
                            <li><b>Manufacturer</b></li>
                            <li><b>Cost in credits</b></li>
                            <li><b>Length</b></li>
                            <li><b>Max atmosphering speed</b></li>
                            <li><b>Crew</b></li>
                            <li><b>Passengers</b></li>
                            <li><b>Cargo capacity</b></li>
                            <li><b>Consumables</b></li>
                            <li><b>Hyper drive rating</b></li>
                            <li><b>MGLT</b></li>
                            <li><b>Starship class</b></li>
                        </ul>
                    </div>
                    <div className="col-7 text-start">
                    <ul style={{listStyleType:"none"}}>
                            <li>: {starshipList[indexs].name}</li>
                            <li>: {starshipList[indexs].model}</li>
                            <li>: {starshipList[indexs].manufacturer}</li>
                            <li>: {starshipList[indexs].cost_in_credits}</li>
                            <li>: {starshipList[indexs].length}</li>
                            <li>: {starshipList[indexs].max_atmosphering_speed}</li>
                            <li>: {starshipList[indexs].crew}</li>
                            <li>: {starshipList[indexs].passengers}</li>
                            <li>: {starshipList[indexs].cargo_capacity}</li>
                            <li>: {starshipList[indexs].consumables}</li>
                            <li>: {starshipList[indexs].hyperdrive_rating}</li>
                            <li>: {starshipList[indexs].MGLT}</li>
                            <li>: {starshipList[indexs].starship_class}</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}


StarshipDetail.propTypes = {
    starshipList: PropTypes.array.isRequired,
    indexs: PropTypes.number.isRequired,
  };