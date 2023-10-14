import PropTypes from 'prop-types';

export default function VehicleDetail({vehicleList, indexs}){
    return(
        <div className="section vehicle-detail">
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
                            <li><b>Vehicle class</b></li>
                        </ul>
                    </div>
                    <div className="col-8 text-start">
                    <ul style={{listStyleType:"none"}}>
                            <li>: {vehicleList[indexs].name}</li>
                            <li>: {vehicleList[indexs].model}</li>
                            <li>: {vehicleList[indexs].manufacturer}</li>
                            <li>: {vehicleList[indexs].cost_in_credits}</li>
                            <li>: {vehicleList[indexs].length}</li>
                            <li>: {vehicleList[indexs].max_atmosphering_speed}</li>
                            <li>: {vehicleList[indexs].crew}</li>
                            <li>: {vehicleList[indexs].passengers}</li>
                            <li>: {vehicleList[indexs].cargo_capacity}</li>
                            <li>: {vehicleList[indexs].consumables}</li>
                            <li>: {vehicleList[indexs].vehicle_class}</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}


VehicleDetail.propTypes = {
    vehicleList: PropTypes.array.isRequired,
    indexs: PropTypes.number.isRequired,
  };