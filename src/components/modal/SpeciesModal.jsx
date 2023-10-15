import PropTypes from 'prop-types';
import './Modal.css'

export default function SpeciesModal({species, index}){

    return(
        <div>
            <div className="modal fade" aria-labelledby="SpeciesModal" aria-hidden="true" id={`species${index}`}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Detail</h3>
                            <div className="row">
                                <div className="col-4">
                                <ul style={{listStyleType:"none"}}>
                                    <li><b>Name</b></li>
                                    <li><b>Classification</b></li>
                                    <li><b>Designation</b></li>
                                    <li><b>Average height</b></li>
                                    <li><b>Skin color</b></li>
                                    <li><b>Hair color</b></li>
                                    <li><b>Eye Color</b></li>
                                    <li><b>Average lifespan</b></li>
                                    <li><b>Language</b></li>
                                </ul>
                                </div>
                                <div className="col-7">
                                <ul style={{listStyleType:"none"}}>
                                    <li>{species.name}</li>
                                    <li>{species.classification}</li>
                                    <li>{species.designation}</li>
                                    <li>{species.average_height}</li>
                                    <li>{species.skin_colors}</li>
                                    <li>{species.hair_colors}</li>
                                    <li>{species.eye_colors}</li>
                                    <li>{species.average_lifespan}</li>
                                    <li>{species.language}</li>
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

SpeciesModal.propTypes = {
    species: PropTypes.shape({
        name: PropTypes.string,
        classification: PropTypes.string,
        designation: PropTypes.string,
        average_height: PropTypes.string,
        skin_colors: PropTypes.string,
        hair_colors: PropTypes.string,
        eye_colors: PropTypes.string,
        average_lifespan: PropTypes.string,
        language: PropTypes.string,
    }).isRequired,
    index: PropTypes.number.isRequired,
};






