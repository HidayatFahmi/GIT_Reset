import "./Film.css"
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { useContext } from "react"
import { starwarsContext } from "../../App"
import StarshipModal from "../modal/StarshipModal";
import VehicleModal from "../modal/VehicleModal";
import CharacterModal from "../modal/CharacterModal";
import PlanetModal from "../modal/PlanetModal";
import SpeciesModal from "../modal/SpeciesModal";
import StoryLines from "./StoryLines";

export default function Film(){

    const{starshipsList, vehiclesList, charactersList, planetsList, speciesList, idFilm, title, director, producer, releaseDate} = useContext(starwarsContext);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [dataReady, setDataReady] =  useState(false);
    
    console.log('id film', idFilm)
    console.log("current image index", currentImageIndex);
    console.log("characterList length", charactersList.length);
    console.log("Vehicle List : ", vehiclesList);
    console.log("Character List : ", charactersList);
    console.log("======================");
    const starshipsImage = {
        1 : [
        "/2Starship.jpg",
        "/3Starship.jpg",
        "/5Starship.jpg",
        "/9Starship.jpg",
        "/10Starship.jpg",
        "/11Starship.jpg",
        "/12Starship.jpg",
        "/13Starship.jpg",
        ],
        2 : [
        "/3Starship.jpg",
        "/10Starship.jpg",
        "/11Starship.jpg",
        "/12Starship.jpg",
        "/15Starship.jpg",
        "/17Starship.jpg",
        "/21Starship.jpg",
        "/22Starship.jpg",
        "/23Starship.jpg",
        ],
        3 : [
        "/2Starship.jpg",
        "/3Starship.jpg",
        "/10Starship.jpg",
        "/11Starship.jpg",
        "/12Starship.jpg",
        "/15Starship.jpg",
        "/17Starship.jpg",
        "/22Starship.jpg",
        "/23Starship.jpg",
        "/27Starship.jpg",
        "/28Starship.jpg",
        "/29Starship.jpg",
        ],
        4 : [
        "/31Starship.jpg",
        "/32Starship.jpg",
        "/39Starship.jpg",
        "/40Starship.jpg",
        "/41Starship.jpg",
        ],
        5 : [
        "/21Starship.jpg",
        "/32Starship.jpg",
        "/39Starship.jpg",
        "/43Starship.jpg",
        "/47Starship.jpg",
        "/48Starship.jpg",
        "/49Starship.jpg",
        "/52Starship.jpg",
        "/58Starship.jpg",
        ],
        6 : [
        "/2Starship.jpg",
        "/32Starship.jpg",
        "/48Starship.jpg",
        "/59Starship.jpg",
        "/61Starship.jpg",
        "/63Starship.jpg",
        "/64Starship.jpg",
        "/65Starship.jpg",
        "/66Starship.jpg",
        "/68Starship.jpg",
        "/74Starship.jpg",
        "/75Starship.jpg",
        ]};

    const vehiclesImage = {
        1 : [
        "/4Vehicle.jpg",
        "/6Vehicle.jpg",
        "/8Vehicle.jpg",
        "/9Vehicle.jpg",
        ],
        2 : [
        "/8Vehicle.jpg",
        "/14Vehicle.jpg",
        "/16Vehicle.jpg",
        "/18Vehicle.jpg",
        "/19Vehicle.jpg",
        "/20Vehicle.jpg",
        ],
        3 : [
        "/8Vehicle.jpg",
        "/16Vehicle.jpg",
        "/18Vehicle.jpg",
        "/19Vehicle.jpg",
        "/24Vehicle.jpg",
        "/25Vehicle.jpg",
        "/26Vehicle.jpg",
        "/30Vehicle.jpg",
        ],
        4 : [
        "/33Vehicle.jpg",
        "/34Vehicle.jpg",
        "/35Vehicle.jpg",
        "/36Vehicle.jpg",
        "/37Vehicle.jpg",
        "/38Vehicle.jpg",
        "/42Vehicle.jpg",
        ],
        5 : [
        "/4Vehicle.jpg",
        "/44Vehicle.jpg",
        "/45Vehicle.jpg",
        "/46Vehicle.jpg",
        "/50Vehicle.jpg",
        "/51Vehicle.jpg",
        "/53Vehicle.jpg",
        "/54Vehicle.jpg",
        "/55Vehicle.jpg",
        "/56Vehicle.jpg",
        "/57Vehicle.jpg",
        ],
        6 : [
        "/33Vehicle.jpg",
        "/50Vehicle.jpg",
        "/53Vehicle.jpg",
        "/56Vehicle.jpg",
        "/60Vehicle.jpg",
        "/62Vehicle.jpg",
        "/67Vehicle.jpg",
        "/69Vehicle.jpg",
        "/70Vehicle.jpg",
        "/71Vehicle.jpg",
        "/72Vehicle.jpg",
        "/73Vehicle.jpg",
        "/76Vehicle.jpg",
        ]};

    const charactersImage = {
        1 : [
        "/1Character.jpg",
        "/2Character.jpg",
        "/3Character.jpg",
        "/4Character.jpg",
        "/5Character.jpg",
        "/6Character.jpg",
        "/7Character.jpg",
        "/8Character.jpg",
        "/9Character.jpg",
        "/10Character.jpg",
        "/12Character.jpg",
        "/13Character.jpg",
        "/14Character.jpg",
        "/15Character.jpg",
        "/16Character.jpg",
        "/18Character.jpg",
        "/19Character.jpg",
        "/81Character.jpg",    
        ],
        2 : 
        [
        "/1Character.jpg",
        "/2Character.jpg",
        "/3Character.jpg",
        "/4Character.jpg",
        "/5Character.jpg",
        "/10Character.jpg",
        "/13Character.jpg",
        "/14Character.jpg",
        "/18Character.jpg",
        "/20Character.jpg",
        "/21Character.jpg",
        "/22Character.jpg",
        "/23Character.jpg",
        "/24Character.jpg",
        "/25Character.jpg",
        "/26Character.jpg",
        ],
        3 : 
        [
        "/1Character.jpg",
        "/2Character.jpg",
        "/3Character.jpg",
        "/4Character.jpg",
        "/5Character.jpg",
        "/10Character.jpg",
        "/13Character.jpg",
        "/14Character.jpg",
        "/16Character.jpg",
        "/18Character.jpg",
        "/20Character.jpg",
        "/21Character.jpg",
        "/22Character.jpg",
        "/25Character.jpg",
        "/27Character.jpg",
        "/28Character.jpg",
        "/29Character.jpg",
        "/30Character.jpg",
        "/31Character.jpg",
        "/45Character.jpg",
        ],
        4 : 
        [
        "/2Character.jpg",
        "/3Character.jpg",
        "/10Character.jpg",
        "/11Character.jpg",
        "/16Character.jpg",
        "/20Character.jpg",
        "/21Character.jpg",
        "/32Character.jpg",
        "/33Character.jpg",
        "/34Character.jpg",
        "/35Character.jpg",
        "/36Character.jpg",
        "/37Character.jpg",
        "/38Character.jpg",
        "/39Character.jpg",
        "/40Character.jpg",
        "/41Character.jpg",
        "/42Character.jpg",
        "/43Character.jpg",
        "/44Character.jpg",
        "/46Character.jpg",
        "/47Character.jpg",
        "/48Character.jpg",
        "/49Character.jpg",
        "/50Character.jpg",
        "/51Character.jpg",
        "/52Character.jpg",
        "/53Character.jpg",
        "/54Character.jpg",
        "/55Character.jpg",
        "/56Character.jpg",
        "/57Character.jpg",
        "/58Character.jpg",
        "/59Character.jpg",
        ],
        5 : 
        [
        "/2Character.jpg", 
        "/3Character.jpg", 
        "/6Character.jpg", 
        "/7Character.jpg", 
        "/10Character.jpg", 
        "/11Character.jpg", 
        "/20Character.jpg", 
        "/21Character.jpg", 
        "/22Character.jpg", 
        "/33Character.jpg", 
        "/35Character.jpg", 
        "/36Character.jpg", 
        "/40Character.jpg", 
        "/43Character.jpg", 
        "/46Character.jpg", 
        "/51Character.jpg", 
        "/52Character.jpg", 
        "/53Character.jpg", 
        "/58Character.jpg", 
        "/59Character.jpg", 
        "/60Character.jpg", 
        "/61Character.jpg", 
        "/62Character.jpg", 
        "/63Character.jpg", 
        "/64Character.jpg", 
        "/65Character.jpg", 
        "/66Character.jpg", 
        "/67Character.jpg", 
        "/68Character.jpg", 
        "/69Character.jpg", 
        "/70Character.jpg", 
        "/71Character.jpg", 
        "/72Character.jpg", 
        "/73Character.jpg", 
        "/74Character.jpg", 
        "/75Character.jpg", 
        "/76Character.jpg", 
        "/77Character.jpg", 
        "/78Character.jpg", 
        "/82Character.jpg"
        ],
        6 : 
        [
        "/1Character.jpg", 
        "/2Character.jpg", 
        "/3Character.jpg", 
        "/4Character.jpg", 
        "/5Character.jpg", 
        "/6Character.jpg", 
        "/7Character.jpg", 
        "/10Character.jpg", 
        "/11Character.jpg", 
        "/12Character.jpg", 
        "/13Character.jpg", 
        "/20Character.jpg", 
        "/21Character.jpg", 
        "/33Character.jpg", 
        "/35Character.jpg", 
        "/46Character.jpg", 
        "/51Character.jpg", 
        "/52Character.jpg", 
        "/53Character.jpg", 
        "/54Character.jpg", 
        "/55Character.jpg", 
        "/56Character.jpg", 
        "/58Character.jpg", 
        "/63Character.jpg", 
        "/64Character.jpg", 
        "/67Character.jpg", 
        "/68Character.jpg", 
        "/75Character.jpg", 
        "/78Character.jpg", 
        "/79Character.jpg", 
        "/80Character.jpg", 
        "/81Character.jpg", 
        "/82Character.jpg", 
        "/83Character.jpg"
        ],
        }

    const planetsImage = {
    1 : [
        "/1Planet.jpg", 
        "/2Planet.jpg", 
        "/3Planet.jpg"
    ],
    2 : [
        "/4Planet.jpg", 
        "/5Planet.jpg", 
        "/6Planet.jpg",
        "/27Planet.jpg",
    ],
    3 : [
        "/1Planet.jpg", 
        "/5Planet.jpg", 
        "/7Planet.jpg",
        "/8Planet.jpg",
        "/9Planet.jpg",
    ],
    4 : [
        "/1Planet.jpg", 
        "/8Planet.jpg",
        "/9Planet.jpg",
    ],
    5 : [
        "/1Planet.jpg", 
        "/8Planet.jpg",
        "/9Planet.jpg",
        "/10Planet.jpg", 
        "/11Planet.jpg",
    ],
    6 : [
        "/1Planet.jpg", 
        "/2Planet.jpg", 
        "/5Planet.jpg", 
        "/8Planet.jpg", 
        "/9Planet.jpg", 
        "/12Planet.jpg", 
        "/13Planet.jpg", 
        "/14Planet.jpg", 
        "/15Planet.jpg", 
        "/16Planet.jpg", 
        "/17Planet.jpg", 
        "/18Planet.jpg", 
        "/19Planet.jpg"
    ],
    }

    const speciesImages = {
    1 : [
        "/1Species.jpg",
        "/2Species.jpg",
        "/3Species.jpg",
        "/4Species.jpg",
        "/5Species.jpg",
    ],
    2 : [
        "/1Species.jpg",
        "/2Species.jpg",
        "/3Species.jpg",
        "/6Species.jpg",
        "/7Species.jpg",
    ],
    3 : [
        "/1Species.jpg", 
        "/2Species.jpg", 
        "/3Species.jpg", 
        "/5Species.jpg", 
        "/6Species.jpg", 
        "/8Species.jpg", 
        "/9Species.jpg", 
        "/10Species.jpg", 
        "/15Species.jpg"
    ],
    4 : [
        "/1Species.jpg", 
        "/2Species.jpg", 
        "/6Species.jpg", 
        "/11Species.jpg", 
        "/12Species.jpg", 
        "/13Species.jpg", 
        "/14Species.jpg", 
        "/15Species.jpg", 
        "/16Species.jpg", 
        "/17Species.jpg", 
        "/18Species.jpg", 
        "/19Species.jpg", 
        "/20Species.jpg", 
        "/21Species.jpg", 
        "/22Species.jpg", 
        "/23Species.jpg", 
        "/24Species.jpg", 
        "/25Species.jpg", 
        "/26Species.jpg", 
        "/27Species.jpg"
    ],
    5 : [
        "/1Species.jpg", 
        "/2Species.jpg", 
        "/6Species.jpg", 
        "/12Species.jpg", 
        "/13Species.jpg", 
        "/15Species.jpg", 
        "/28Species.jpg", 
        "/29Species.jpg", 
        "/30Species.jpg", 
        "/31Species.jpg", 
        "/32Species.jpg", 
        "/33Species.jpg", 
        "/34Species.jpg", 
        "/35Species.jpg"
    ],
    6 : [
        "/1Species.jpg", 
        "/2Species.jpg", 
        "/3Species.jpg", 
        "/6Species.jpg", 
        "/15Species.jpg", 
        "/19Species.jpg", 
        "/20Species.jpg", 
        "/23Species.jpg", 
        "/24Species.jpg", 
        "/25Species.jpg", 
        "/26Species.jpg", 
        "/27Species.jpg", 
        "/28Species.jpg", 
        "/29Species.jpg", 
        "/30Species.jpg", 
        "/33Species.jpg", 
        "/34Species.jpg", 
        "/35Species.jpg", 
        "/36Species.jpg", 
        "/37Species.jpg"
    ]
    };
    
    useEffect(() => {

        if((charactersList.length && vehiclesList.length && speciesList.length && starshipsList.length && planetsList.length)> 0){
            setDataReady(true);
            console.log("DATA READY .......................");
            // setCurrentImageIndex(0);
        }
        
        if((!charactersList.length || !vehiclesList.length || !speciesList.length || !starshipsList.length || !planetsList.length)> 0){
            setDataReady(false);
        }

        const intervalId = setInterval(() => {
            if (currentImageIndex === charactersList.length - 1) {
            setCurrentImageIndex(0);
            } else {
            setCurrentImageIndex((prevIndex) => prevIndex + 1);
            }
        }, 1500);
        
        console.log("dataReady", dataReady);
        return () => clearInterval(intervalId);
      }, [currentImageIndex, charactersList, dataReady]);

      const cekValue =(index,starships)=>{
        console.log("index :",index);
        console.log(starships)
      }

    return(
        <>
            <div className="section">
                {dataReady?
                <div className="content-area">
                    <div className="top-content">
                    <h1 className="film-title my-3">{title}</h1>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4 text-center">                         
                            <div className="running-characters ms-5">
                                <div key={currentImageIndex}>
                                    <img src={charactersImage[idFilm][currentImageIndex]} alt="" />
                                    <div className="characters-name mt-3">
                                        <h5>{charactersList[currentImageIndex]?.name}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="col-6">
                                <div className="container banner-film">
                                    <img src={`/${idFilm}FilmBanner.jpg`} alt="" />
                                </div>
                            </div>
                    </div>
                    {/* Enf of Banner */}
                    <div className="row ms-5">
                        <div className="col-6">
                            <div className="container director my-5 text-white">
                                <p className="d-flex"><h5>Director : &nbsp; </h5>{director}</p>
                                <hr />
                                <p className="d-flex"><h5>Producer : &nbsp; </h5>{producer}</p>
                                <hr />
                                <p className="mb-5 d-flex"><h5>Release Date : &nbsp; </h5>{releaseDate}</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
                {/* end of top content */}
                <div className="container story-line">
                    <h2 className="border-start border-bottom border-warning border-3 ps-3 pb-2 mt-4">Story line</h2>
                    <p>{<StoryLines/>}</p>
                </div>
                <div className="container starships mt-4">
                    <div className="title"><h2 className="border-start border-bottom border-warning border-3 ps-3 pb-2">Starships</h2></div>
                    <hr />
                    <div className="row justify-content-center starwars-content">
                    {starshipsList.map((starship, index) => (
                        <div className="col-md-3 mb-3" key={starship.name} onClick={()=>cekValue(index, starship)}>
                            <div className="card" data-bs-toggle="modal" data-bs-target={`#starship${index}`}>
                                <div className="card-header"><h5>{starship.name}</h5></div>
                                <div className="card-body">
                                    <img  className="w-100" src={starshipsImage[idFilm][index]} alt="mana??"/>
                                </div>
                                <button className="btn btn-primary">Detail</button>
                                <StarshipModal starship={starship} index={index}/>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                {/* End of starships */}
                <div className="container vehicles mt-5">
                    <div className="title"><h2 className="border-start border-bottom border-warning border-3 ps-2 pb-2">Vehicles</h2></div>
                    <hr />
                    <div className="row justify-content-center starwars-content">
                    {vehiclesList.map((vehicle,index) => (
                        <div className="col-md-3 mb-3" key={vehicle.name} data-bs-toggle="modal" data-bs-target={`vehicle${index}`}>
                            <div className="card" data-bs-toggle="modal" data-bs-target={`#vehicle${index}`}>
                                <div className="card-header"><h5>{vehicle.name}</h5></div>
                                <div className="card-body">
                                    <img className="w-100" src={vehiclesImage[idFilm][index]} alt="mana??" />
                                </div>
                                <button className="btn btn-primary">Detail</button>
                                <VehicleModal vehicle={vehicle} index={index}/>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                {/* End of Vehicle */}
                <div className="container characters mt-4">
                    <div className="title"><h2 className="border-start border-bottom border-3 border-warning ps-2 pb-2 ">Characters</h2></div>
                    <hr />
                    <div className="row justify-content-center starwars-content">
                    {charactersList.map((character, index) => (
                        <div className="col-md-3 mb-3" key={character.name}>
                            <div className="card" data-bs-toggle="modal" data-bs-target={`#character${index}`}>
                                <div className="card-header"><h5>{character.name}</h5></div>
                                <div className="card-body">
                                    <img className="w-100" src={charactersImage[idFilm][index]} alt="mana??" />
                                </div>
                                    <button className="btn btn-primary">Details</button> 
                                    <CharacterModal character={character} index={index}/>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                {/* End of characters */}
                <div className="container planets mt-4">
                    <h2 className="border-start border-bottom border-warning border-4 ps-2 pb-2">Planets</h2>
                    <hr />
                    <div className="row justify-content-center starwars-content">
                        {planetsList.map((planet, index) => (
                            <div className="col-md-3 mb-3" key={planet.index}>
                                <div className="card" data-bs-toggle="modal" data-bs-target={`#planet${index}`}>
                                    <div className="card-header"><h5>{planet.name}</h5></div>
                                    <div className="card-body">
                                        <img className="w-100" src={planetsImage[idFilm][index]} alt="mana??" />
                                    </div>
                                    <button className="btn btn-primary">Details</button>
                                    <PlanetModal planet={planet} index={index}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* end of planet */}
                <div className="container species mt-4">
                    <div className="title"><h2 className="border-start border-bottom border-warning border-3 ps-2 pb-2">Species</h2></div>
                    <hr />
                    <div className="row jsutify-content-center starwars-content">
                        {speciesList.map((species, index) => (
                            <div className="col-md-3 mb-3" key={species.name}>
                                <div className="card" data-bs-toggle="modal" data-bs-target={`#species${index}`}>
                                    <div className="card-header"><h5>{species.name}</h5></div>
                                    <div className="card-body">
                                        <img className="w-100" src={speciesImages[idFilm][index]} alt="mana??" />
                                    </div>
                                    <button className="btn btn-primary">Details</button>
                                    <SpeciesModal species={species} index={index}/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* End of species */}

                <div className="container-fluid film-footer bg-dark text-white text-center mt-4 border-top border-2 border-white ">
                    <h4 className="pt-3">Discover the wonders of the universe with us!!!</h4>
                        <div className="stayInTouch d-flex justify-content-center">
                            <h5 className="mb-3 me-3">Stay in touch</h5>
                            <i className="bi bi-arrow-down-circle-fill fs-5"></i> 
                        </div>
                    <div className="icon d-flex justify-content-center mt-2">
                        <div className="instagram ">
                            <i className="bi bi-instagram d-flex me-3"><a className="text-decoration-none" href="https://www.instagram.com/fahmi_hd22/" target="blank"><p>&nbsp; fahmi_hd22</p></a></i>
                        </div>
                        <div className="linkedin">
                            <i className="bi bi-linkedin d-flex me-3"><a className="text-decoration-none" href="https://www.linkedin.com/in/hidayatfahmi/" target="blank"><p>&nbsp; hidayatfahmi</p></a></i>
                        </div> 
                        <div className="github">
                            <i className="bi bi-github d-flex me-3"><a className="text-decoration-none" href="https://github.com/HidayatFahmi" target="blank"><p>&nbsp; HidayatFahmi</p></a></i>
                        </div> 
                    </div>
                </div>
                </div> :
                <div className="loading-film">
                    <Loading/>
                </div>
                }
            </div>
        </>
    )
}


