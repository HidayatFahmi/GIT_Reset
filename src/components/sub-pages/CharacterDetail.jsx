import PropTypes from 'prop-types';

export default function CharacterDetail({characterList, indexs}){
    return(
        <div className="section character-detail">
            <div className="container border border-4 border-ddark">
               <div className="row">
                    <div className="col-4 text-start">
                        <ul style={{listStyleType:"none"}}>
                            <li><b>Name</b></li>
                            <li><b>Height</b></li>
                            <li><b>Mass</b></li>
                            <li><b>Hair color</b></li>
                            <li><b>Skin Color</b></li>
                            <li><b>Eye Color</b></li>
                            <li><b>Birth year</b></li>
                            <li><b>Gender</b></li>
                            <li><b>Home world</b></li>
                        </ul>
                    </div>
                    <div className="col-7 text-start">
                    <ul style={{listStyleType:"none"}}>
                            <li>: {characterList[indexs].name}</li>
                            <li>: {characterList[indexs].height}</li>
                            <li>: {characterList[indexs].mass}</li>
                            <li>: {characterList[indexs].hair_color}</li>
                            <li>: {characterList[indexs].skin_color}</li>
                            <li>: {characterList[indexs].eye_color}</li>
                            <li>: {characterList[indexs].birth_year}</li>
                            <li>: {characterList[indexs].gender}</li>
                            <li>: <a href={characterList[indexs].homeworld} target="blank">{characterList[indexs].homeworld}</a></li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}


CharacterDetail.propTypes = {
    characterList: PropTypes.array.isRequired,
    indexs: PropTypes.number.isRequired,
  };