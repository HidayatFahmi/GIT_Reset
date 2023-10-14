import { useContext, useEffect, useState } from "react";
import { starwarsContext } from "../../App";
import Loading from "./Loading";
import "./SpeciesAll.css";
import SpeciesDetail from "../sub-pages/SpeciesDetail";


export default function SpeciesAll() {
  const {dataHome} = useContext(starwarsContext);

  const [speciesDataReady, setSpeciesDataReady] = useState(false);
  const [allSpeciesListId, setAllSpeciesListId] = useState([]);
  const [speciesBannerId, setSpeciesBannerId] = useState(4);
  const [uniqueSpeciesList, setUniqueSpeciesList] = useState([]);
  const [speciesList, setSpeciesList] = useState([]);

  const [imageActive, setImageActive] = useState(true);
  const [indexs, setIndexs] =  useState(0);

  useEffect(() => {
    const filterSpecies = async () => {
      try {
        if (dataHome) {
            const speciesCollect = dataHome.map((species) => species.species);
            const joinSpeciesCollect = [].concat(...speciesCollect);
            const uniqueList = joinSpeciesCollect.filter((value, index, self) => self.indexOf(value) === index);
            setUniqueSpeciesList(uniqueList);
            setAllSpeciesListId(uniqueList.map((species) => species.replace(/\D/g, "")));
          }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchingAllSpecies = async () => {
        try{
            const uniqueListPromises = uniqueSpeciesList.map(async(uniqueSpeciesList) => {
            const resp = await fetch(uniqueSpeciesList)
            return resp.json();
            })

            const speciesDataPromises = await Promise.all(uniqueListPromises);
            setSpeciesList(speciesDataPromises);
            if(speciesList.length>0)setSpeciesDataReady(true);
        }
        catch(error){
            console.error(error);
        }
    }

    filterSpecies();
    fetchingAllSpecies();
    console.log("speciesReady", speciesList.length);
  }, [dataHome]);

  const handleBannerId = (id, idx) => {
    setSpeciesBannerId(id);
    setIndexs(idx);
  };

  return (
    <div>
      {speciesDataReady ? (
        <div className="container-fluid speciesAll">
          <h1 className="title mt-3 text-center border-bottom border-4 border-warning pb-2 text-white">
            All Star Wars Species
          </h1>
          <div className="row">
            <div className="col-7 speciesAll-banner mt-4 border border-2">
                <div className="row menu my-2 border-bottom border-dark border-2 pb-2">
                    <div className="col-6">
                        <button className="btn btn-warning w-50" onClick={()=>setImageActive(true)}>Image</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-warning w-50" onClick={()=> setImageActive(false)}>Detail</button>
                    </div>
                </div>
                <div className="row image-banner">
                    <div className="col-12">
                        {imageActive? 
                        <div>
                            <img src={`/${speciesBannerId}Species.jpg`} alt="mana??" />
                        </div>:
                        <div>
                           <SpeciesDetail speciesList={speciesList} indexs={indexs}/>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="col-4 border border-2 speciesAll-sidebar mt-4 bg-dark text-center">
              {allSpeciesListId.map((speciesId, index) => (
                <div key={index}className="my-3 border border-2"onClick={() => handleBannerId(speciesId, index)}>
                    <h4 className="title text-center border-bottom border-4 border-warning py-1 text-white">
                        {speciesList[index]?.name}
                    </h4>
                  <img src={`/${speciesId}Species.jpg`} alt="" />
                </div>
              ))}
            </div>
          </div>
          {/* end of row */}

          <div className="container-fluid film-footer bg-dark text-white text-center mt-4 border-top border-2 border-white ">
                    <h4 className="pt-3">Discover the wonders of the universe with us!!!</h4>
                        <div className="stayInTouch d-flex justify-content-center">
                            <h5 className="mb-3 me-3">Stay in touch</h5>
                            <i className="bi bi-arrow-down-circle-fill fs-5"></i> 
                        </div>
                    <div className="icon d-flex justify-content-center mt-2">
                        <div className="instagram ">
                            <i className="bi bi-instagram d-flex me-3"><a className="text-decoration-none" href="https://www.instagram.com/fahmi_hd22/"><p>&nbsp; fahmi_hd22</p></a></i>
                        </div>
                        <div className="linkedin">
                            <i className="bi bi-linkedin d-flex me-3"><a className="text-decoration-none" href="https://www.linkedin.com/in/hidayatfahmi/"><p>&nbsp; hidayatfahmi</p></a></i>
                        </div> 
                        <div className="github">
                            <i className="bi bi-github d-flex me-3"><a className="text-decoration-none" href="https://github.com/HidayatFahmi"><p>&nbsp; HidayatFahmi</p></a></i>
                        </div> 
                    </div>
                </div>
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
