import PropTypes from 'prop-types';

export default function SpeciesDetail({speciesList, indexs}){
    return(
        <div className="section species-detail">
            <div className="container border border-4 border-ddark">
               <div className="row">
                    <div className="col-4 text-start">
                        <ul style={{listStyleType:"none"}}>
                            <li><b>Name</b></li>
                            <li><b>Classification</b></li>
                            <li><b>Designation</b></li>
                            <li><b>Average height</b></li>
                            <li><b>Skin color</b></li>
                            <li><b>Hair color</b></li>
                            <li><b>Eye color</b></li>
                            <li><b>Average lifespan</b></li>
                            <li><b>Home world</b></li>
                            <li><b>Language</b></li>
                        </ul>
                    </div>
                    <div className="col-6 text-start">
                        <ul style={{listStyleType:"none"}}>
                            <li>: {speciesList[indexs].name}</li>
                            <li>: {speciesList[indexs].classification}</li>
                            <li>: {speciesList[indexs].designation}</li>
                            <li>: {speciesList[indexs].average_height}</li>
                            <li>: {speciesList[indexs].skin_colors}</li>
                            <li>: {speciesList[indexs].hair_colors}</li>
                            <li>: {speciesList[indexs].eye_colors}</li>
                            <li>: {speciesList[indexs].average_lifespan}</li>
                            <li>: <a href={speciesList[indexs].homeworld} target='blank'>{speciesList[indexs].homeworld}</a></li>
                            <li>: {speciesList[indexs].language}</li>
                        </ul>
                    </div>
               </div>
            </div>
        </div>
    )
}


SpeciesDetail.propTypes = {
    speciesList: PropTypes.array.isRequired,
    indexs: PropTypes.number.isRequired,
  };