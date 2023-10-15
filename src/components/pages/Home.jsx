import "./Home.css"
// import { useContext } from "react";
// import { starwarsContext } from "../../App";
import PropTypes from "prop-types";


export default function Home({setIdFilm,setClickFilm, data}){

    // const{starshipsList, vehiclesList, charactersList, planetsList, speciesList} = useContext(starwarsContext);
    const cardFilm = ["/1Card","/2Card","/3Card","/4Card","/5Card","/6Card"]

    const handleFilm = (id) => {
        if(id == 4)localStorage.setItem("idFilm",1);
        else if(id == 5)localStorage.setItem("idFilm",2);
        else if(id == 6)localStorage.setItem("idFilm",3);
        else if(id == 1)localStorage.setItem("idFilm",4);
        else if(id == 2)localStorage.setItem("idFilm",5);
        else localStorage.setItem("idFilm",6);


        setClickFilm(true);
        setIdFilm(parseInt(localStorage.getItem("idFilm")));
    }

    return(
        <div className="section home-container">
            <div className="container banner text-white ">
            <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-8">
                <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="slides-with-controls">
                    <div className="carousel-indicators">
                        <button className="active" data-bs-target="#slides-with-controls" data-bs-slide-to="0" aria-current="true" aria-label="Slides 1"></button>
                        <button className="active" data-bs-target="#slides-with-controls" data-bs-slide-to="1" aria-current="true" aria-label="Slides 2"></button>
                        <button className="active" data-bs-target="#slides-with-controls" data-bs-slide-to="2" aria-current="true" aria-label="Slides 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="6FilmBanner.jpg" alt="mana" className="d-block w-100" />
                        </div>
                        <div className="carousel-item">
                            <img src="5FilmBanner.jpg" alt="mana" className="d-block w-100"/>
                        </div>
                        <div className="carousel-item">
                            <img src="3FilmBanner.jpg" alt="mana" className="d-block w-100"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" data-bs-target="#slides-with-controls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" data-bs-target="#slides-with-controls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                </div>
            </div>
            </div>
            </div>
            {/* End of banner */}
            <div className="container-fluid card-container films-list mt-5">
                <div className="row justify-content-center">
                    {data?.map((film, i) => (
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-9 mb-4" key={film.episode_id} onClick={()=>handleFilm(film.episode_id)}>
                    <div className="card text-bg-dark">
                        <h6 className="card-header">{film.title}</h6>
                        <img src={`${cardFilm[i]}.jpg`} alt="" />
                        <div className="card-body card-img-overlay">
                    
                        </div>
                        <div className="card-footer">Director : {film.director}</div>
                        <a href="#" className="btn btn-warning btn-sm">Detail</a>
                    </div>
                    </div>
                    ))}
                </div>
            </div>
            {/* end of card */}

            <div className="container-fluid film-footer bg-dark text-white text-center mt-4 border-top border-2 border-white">
                    <h4 className="pt-3">Discover the wonders of the universe with us!!!</h4>
                        <div className="stayInTouch d-flex justify-content-center">
                            <h5 className="mb-3 me-3">Stay in touch</h5>
                            <i className="bi bi-arrow-down-circle-fill fs-5"></i> 
                        </div>
                    <div className="icon d-flex justify-content-center mt-2">
                        <div className="instagram ">
                            <i className="bi bi-instagram d-flex me-3"><a className="text-decoration-none" target="blank" href="https://www.instagram.com/fahmi_hd22/"><p>&nbsp; fahmi_hd22</p></a></i>
                        </div>
                        <div className="linkedin">
                            <i className="bi bi-linkedin d-flex me-3"><a className="text-decoration-none" target="blank" href="https://www.linkedin.com/in/hidayatfahmi/"><p>&nbsp; hidayatfahmi</p></a></i>
                        </div> 
                        <div className="github">
                            <i className="bi bi-github d-flex me-3"><a className="text-decoration-none" target="blank" href="https://github.com/HidayatFahmi"><p>&nbsp; HidayatFahmi</p></a></i>
                        </div> 
                    </div>
                </div>
        </div>
    )
}

Home.propTypes = {
    setIdFilm: PropTypes.func.isRequired, 
    setClickFilm: PropTypes.func.isRequired, 
    data: PropTypes.func.isRequired,
  };