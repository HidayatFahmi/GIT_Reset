import Home from './components/pages/Home'
import Film from './components/pages/Film'
import StarshipAll from './components/pages/StarshipAll'
import VehicleAll from './components/pages/VehiclesAll'
import PlanetAll from './components/pages/PlanetAll'
import CharacterAll from './components/pages/CharacterAll'
import SpeciesAll from './components/pages/SpeciesAll'
import {Link, useNavigate} from "react-router-dom"
import {Routes, Route} from "react-router"
import { useState, useEffect, createContext, useContext } from 'react'
import "./App.css"
import Loading from "./components/pages/Loading"


export const starwarsContext = createContext();

export const useStarwarsContext = () => {
  return useContext(starwarsContext);
}

function App() {

    const [starshipsList, setStarshipsList] = useState([]);
    const [vehiclesList, setVehiclesList] = useState([]);
    const [charactersList, setCharactersList] = useState([]);
    const [planetsList, setPlanetsList] = useState([]);
    const [speciesList, setSpeciesList] = useState([]);
    const [clickFilm, setClickFilm] = useState(false)
    const [idFilm, setIdFilm] = useState(0);
    const [title, setTitle] =  useState(null);
    const [producer, setProducer] = useState(null);
    const [director, setDirector] = useState(null);
    const [releaseDate, setReleaseDate] = useState(null);
    const [dataHome, setDataHome] = useState([]);
    const [dataHomeReady, setDataHomeReady] = useState(false)
    const [backDataZero, setBackDataZero] = useState(false);

    const navigate = useNavigate();

      useEffect(()=> {

        const fetchingDataHome = async()=>{
          try{
            console.log("fetching data home process........................")
           const resp = await fetch("https://swapi.dev/api/films/");
           const respJson = await resp.json();
           setDataHome(respJson.results)
           setDataHomeReady(true);
          }catch(error){
           console.error(error)
          }
       }

        const fetchingDataFilm = async() => {
          
       try{            
            const resp = await fetch(`https://swapi.dev/api/films/${idFilm}`);
            const respJson = await resp.json();
            const starships = respJson.starships;
            const vehicles = respJson.vehicles;
            const characters = respJson.characters;
            const planets = respJson.planets;
            const species = respJson.species;
            const titleJson = respJson.title;
            const producerJson = respJson.producer;
            const directorJson = respJson.director;
            const releaseDateJson = respJson.release_date;

            const starshipPromises = starships.map(async(starship) => {
                const resp = await fetch(`${starship}`);
                return resp.json();
            });
    
            const vehiclePromises = vehicles.map(async(vehicle)=> {
                const resp = await fetch(`${vehicle}`);
                return resp.json();
            });

            const characterPromises = characters.map(async(character)=>{
                const resp = await fetch(`${character}`);
                return resp.json();
            })
            const planetPromises = planets.map(async(planet)=>{
                const resp = await fetch(`${planet}`);
                return resp.json();
            })

            const speciesPromises = species.map(async(species)=>{
                const resp = await fetch(`${species}`);
                return resp.json();
            })
    
            const [starshipData, vehicleData, characterData, planetData,speciesData]= await Promise.all([
                Promise.all(starshipPromises),
                Promise.all(vehiclePromises),
                Promise.all(characterPromises),
                Promise.all(planetPromises),
                Promise.all(speciesPromises)
            ])
    
            setStarshipsList(starshipData);
            setVehiclesList(vehicleData);
            setCharactersList(characterData);
            setPlanetsList(planetData);
            setSpeciesList(speciesData)
            setTitle(titleJson);
            setProducer(producerJson);
            setDirector(directorJson);
            setReleaseDate(releaseDateJson);

            console.log("idFilm",idFilm);
        }
   
       catch(error){
        console.error(error);
       }
    }
        console.log("producers",producer);
        console.log("Data Home = ", dataHome)
        console.log("vehicleList : ", vehiclesList);
        console.log("characterList : ", charactersList);
        console.log("planetList : ", planetsList);
        console.log("speciesList : ", speciesList);
        console.log("starshipList : ", starshipsList);


        const storedIdFilm = localStorage.getItem("idFilm")

        if(!charactersList.length && !vehiclesList.length){
          console.log("Empty List")
          fetchingDataHome();
        }
        
       if(clickFilm || storedIdFilm>0){
         fetchingDataFilm();
         setIdFilm(parseInt(storedIdFilm))
         navigate(`./film/${idFilm}`)
         setBackDataZero(false);
       }

       if(backDataZero){
        setVehiclesList([]);
        setCharactersList([]);
        setSpeciesList([]);
        setPlanetsList([]);
        setStarshipsList([]);
       }

    },[clickFilm, idFilm, navigate, producer, dataHome, charactersList.length])

    const backData = () => {
      console.log("==================="); 
      setClickFilm(false);
      setBackDataZero(true)
      setDataHomeReady(false);

      console.log("vehicleList : ", vehiclesList);
      console.log("backData");
      console.log("clickFilm", clickFilm);
      localStorage.removeItem("idFilm");
    }


  return (
    <>
    <starwarsContext.Provider value={{starshipsList, vehiclesList, charactersList, speciesList, planetsList, idFilm, title, director, producer, releaseDate, dataHome}}>
      <div className="section">
      <div className="row navbar-app">
          <div className="col-12 border-bottom border-2 border-light">
          <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
              <div className="container-fluid">
                  <a className="navbar-brand" href="#">Starwars</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-3 mb-2 mb-lg-0">
                            <li className="nav-item">
                              <Link className="nav-link" aria-current="page" to="/" onClick={backData}>Home</Link>
                            </li>
                            <li className="nav-item">
                              <div className="dropdown show d-flex align-items-center">
                                <button className="btn btn-secondary dropdown-toggle" href="#" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role='button'>
                                  Categories
                                </button>

                                <div className="dropdown-menu" aria-labelledby='dropdownMenuLink'>
                                  <a href="#" className='dropdown-item'>
                                    <Link className="nav-link" aria-current="page" to="/starship/all">All Starship</Link>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className='dropdown-item'>
                                    <Link className="nav-link" aria-current="page" to="/vehicle/all">All Vehicles</Link>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className='dropdown-item'>
                                    <Link className="nav-link" aria-current="page" to="/character/all">All Characters</Link>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className='dropdown-item'>
                                    <Link className="nav-link" aria-current="page" to="/planet/all">All Planets</Link>
                                  </a>
                                  <div className="dropdown-divider"></div>
                                  <a href="#" className='dropdown-item'>
                                    <Link className="nav-link" aria-current="page" to="/species/all">All Species</Link>
                                  </a>
                                </div>
                              </div>
                            </li>
                        </ul>
                        <form className="d-flex w-50 ms-5" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                      </div>
              </div>
          </nav>
          </div>
      </div>

      {/* Navbar end */}
        <div className="pages-content">
        {dataHomeReady?
          <div className="home-page">
          <Routes>
              <Route path="/" element={<Home  setIdFilm={setIdFilm} setClickFilm={setClickFilm} data={dataHome}/>}/>
              <Route path="/film/:idParams" element={<Film />}/>
              <Route path="/starship/all" element={<StarshipAll/>}/>
              <Route path="/vehicle/all" element={<VehicleAll/>}/>
              <Route path="/character/all" element={<CharacterAll/>}/>
              <Route path="/planet/all" element={<PlanetAll/>}/>
              <Route path="/species/all" element={<SpeciesAll/>}/>
          </Routes>
          </div> :
          <Loading/>
        }
        </div>
        {/* End of pages content */}
      </div>                  
    </starwarsContext.Provider>         
    </>
  )
}

export default App



                            