import PropTypes from 'prop-types';
import './Modal.css'


export default function PlanetModal({planet, index}){

    return(
        <div>
            <div className="modal fade" id={`planet${index}`} aria-labelledby="planetModal" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Detail</h3>
                            <div className="row">
                                <div className="col-3">
                                <ul style={{listStyleType:"none"}}>
                                    <li><b>Name</b></li>
                                    <li><b>Rotation period</b></li>
                                    <li><b>Orbital period</b></li>
                                    <li><b>Diamater</b></li>
                                    <li><b>Climate</b></li>
                                    <li><b>Gravity</b></li>
                                    <li><b>Terrain</b></li>
                                    <li><b>Surface water</b></li>
                                    <li><b>Pupulation</b></li>
                                </ul>
                                </div>
                                <div className="col-6">
                                <ul style={{listStyleType : "none"}}>
                                    <li>: {planet.name}</li>
                                    <li>: {planet.rotation_period}</li>
                                    <li>: {planet.orbital_period}</li>
                                    <li>: {planet.diameter}</li>
                                    <li>: {planet.climate}</li>
                                    <li>: {planet.gravity}</li>
                                    <li>: {planet.terrain}</li>
                                    <li>: {planet.surface_water}</li>
                                    <li>: {planet.population}</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PlanetModal.propTypes = {
    planet: PropTypes.shape({
        name: PropTypes.string,
        rotation_period: PropTypes.string,
        orbital_period: PropTypes.string,
        diameter: PropTypes.string,
        climate: PropTypes.string,
        gravity: PropTypes.string,
        terrain: PropTypes.string,
        surface_water: PropTypes.string,
        population: PropTypes.string,
    }),
    index: PropTypes.number.isRequired,
};