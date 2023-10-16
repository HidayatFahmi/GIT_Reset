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
            <div className="d-none d-lg-block col-xl-7 col-md-6 planetAll-banner mt-4 border border-2 bg-dark">
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
            <div className="col-9 col-lg-4 col-xl-3 border border-2 planetAll-sidebar mt-4 text-center bg-dark">
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
        </div>
      ) : (
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
      )}
    </div>
  );
}
