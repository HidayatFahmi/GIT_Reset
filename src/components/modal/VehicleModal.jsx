import PropTypes from 'prop-types';
export default function VehicleModal({vehicle, index}){

    return(
        <div>
            <div className="modal fade" id={`vehicle${index}`} tabIndex="-1" aria-labelledby="vehicleModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3 className='text-center'>Detail</h3>
                            <hr className='border border-2 border-dark'/>
                            <div className="row">
                                <div className="col-4">
                                    <ul style={{listStyleType : "none"}}>
                                        <li><b>Name</b></li>
                                        <li><b>Model</b></li>
                                        <li><b>Manufacturer</b> </li>
                                        <li><b>Cost in credits</b> </li>
                                        <li><b>Length</b> </li>
                                        <li><b>Max atmosphering speed</b> </li>
                                        <li><b>Crew</b> </li>
                                        <li><b>Passenger</b> </li>
                                        <li><b>Cargo capacity</b> </li>
                                        <li><b>Consumables</b> </li>
                                        <li><b>Vehicle class</b> </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul style={{listStyleType : "none"}}>
                                        <li>: {vehicle.name}</li>
                                        <li>: {vehicle.model}</li>
                                        <li>: {vehicle.manufacturer}</li>
                                        <li>: {vehicle.cost_in_credits}</li>
                                        <li>: {vehicle.length}</li>
                                        <li>: {vehicle.max_atmosphering_speed}</li>
                                        <li>: {vehicle.crew}</li>
                                        <li>: {vehicle.passengers}</li>
                                        <li>: {vehicle.cargo_capacity}</li>
                                        <li>: {vehicle.consumables}</li>
                                        <li>: {vehicle.vehicle_class}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type='button' className='btn btn-secondary' data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

VehicleModal.propTypes = {
    vehicle: PropTypes.shape({
      name: PropTypes.string.isRequired,
      edited : PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      cost_in_credits: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      max_atmosphering_speed: PropTypes.string.isRequired,
      crew: PropTypes.string.isRequired,
      passengers: PropTypes.string.isRequired,
      cargo_capacity: PropTypes.string.isRequired,
      consumables: PropTypes.string.isRequired,
      vehicle_class: PropTypes.string.isRequired,
      pilots: PropTypes.arrayOf(PropTypes.string).isRequired, // Misalnya, ini adalah array of strings
    }).isRequired,
    index: PropTypes.number.isRequired,
  };
  