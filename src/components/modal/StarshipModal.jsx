import PropTypes from 'prop-types';
import "./Modal.css"

export default function StarshipModal({starship, index}){

    return(
        <div>
            <div className="modal fade" id={`starship${index}`} tabIndex="-1" aria-labelledby="starshipModal" aria-hidden="true">
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
                                        <li><b>Hyperdrive rating</b> </li>
                                        <li><b>MGLT</b> </li>
                                        <li><b>Starships class</b> </li>
                                    </ul>
                                </div>
                                <div className="col-8">
                                    <ul style={{listStyleType : "none"}}>
                                        <li>: {starship.name}</li>
                                        <li>: {starship.model}</li>
                                        <li>: {starship.manufacturer}</li>
                                        <li>: {starship.cost_in_credits}</li>
                                        <li>: {starship.length}</li>
                                        <li>: {starship.max_atmosphering_speed}</li>
                                        <li>: {starship.crew}</li>
                                        <li>: {starship.passengers}</li>
                                        <li>: {starship.cargo_capacity}</li>
                                        <li>: {starship.consumables}</li>
                                        <li>: {starship.hyperdrive_rating}</li>
                                        <li>: {starship.MGLT}</li>
                                        <li>: {starship.starship_class}</li>
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


StarshipModal.propTypes = {
    starship: PropTypes.shape({
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
      hyperdrive_rating: PropTypes.string.isRequired,
      MGLT: PropTypes.string.isRequired,
      starship_class: PropTypes.string.isRequired,
      pilots: PropTypes.arrayOf(PropTypes.string).isRequired, // Misalnya, ini adalah array of strings
    }).isRequired,
    index: PropTypes.number.isRequired,
  };
  