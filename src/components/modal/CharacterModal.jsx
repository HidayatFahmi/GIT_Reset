import PropTypes from 'prop-types';
import './Modal.css'

export default function CharacterModal({character, index}){

    return(
        <div>
            <div className="modal fade" id={`character${index}`} aria-hidden="true" aria-labelledby="characterModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h3>Detail</h3>
                            <hr />
                            <div className="row">
                                <div className="col-4">
                                    <ul style={{listStyleType:"none"}}>
                                        <li><b>Name</b></li>
                                        <li><b>height</b></li>
                                        <li><b>Mass</b></li>
                                        <li><b>Hair color</b></li>
                                        <li><b>Skin color</b></li>
                                        <li><b>Eye color</b></li>
                                        <li><b>Birth year</b></li>
                                        <li><b>Gender</b></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <ul style={{listStyleType:"none"}}>
                                        <li>: {character.name}</li>
                                        <li>: {character.height}</li>
                                        <li>: {character.mass}</li>
                                        <li>: {character.hair_color}</li>
                                        <li>: {character.skin_color}</li>
                                        <li>: {character.eye_color}</li>
                                        <li>: {character.birth_year}</li>
                                        <li>: {character.gender}</li>
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

CharacterModal.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string,
        height: PropTypes.string,
        mass: PropTypes.string,
        hair_color: PropTypes.string,
        skin_color: PropTypes.string,
        eye_color: PropTypes.string,
        birth_year: PropTypes.string,
        gender: PropTypes.string,
    }),
    index: PropTypes.number.isRequired,
};