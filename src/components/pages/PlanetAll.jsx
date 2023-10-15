import { useContext, useEffect, useState } from "react";
import { starwarsContext } from "../../App";
import Loading from "./Loading";
import "./PlanetAll.css";
import PlanetDetail from "../sub-pages/PlanetDetail";


export default function PlanetAll() {
  const {dataHome} = useContext(starwarsContext);

  const [planetDataReady, setPlanetDataReady] = useState(false);
  const [allPlanetListId, setAllPlanetListId] = useState([]);
  const [planetBannerId, setPlanetBannerId] = useState(4);
  const [uniquePlanetList, setUniquePlanetList] = useState([]);
  const [planetList, setPlanetList] = useState([]);

  const [imageActive, setImageActive] = useState(true);
  const [indexs, setIndexs] =  useState(0);

  useEffect(() => {
    const filterPlanet = async () => {
      try {
        if (dataHome) {
            const planetCollect = dataHome.map((planet) => planet.planets);
            const joinVehicleCollect = [].concat(...planetCollect);
            const uniqueList = joinVehicleCollect.filter((value, index, self) => self.indexOf(value) === index);
            setUniquePlanetList(uniqueList);
            setAllPlanetListId(uniqueList.map((planet) => planet.replace(/\D/g, "")));
          }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchingAllPlanet = async () => {
        try{
            const uniqueListPromises = uniquePlanetList.map(async(uniquePlanetList) => {
            const resp = await fetch(uniquePlanetList)
            return resp.json();
            })

            const planetDataPromises = await Promise.all(uniqueListPromises);
            setPlanetList(planetDataPromises);
            if(planetList.length>0)setPlanetDataReady(true);
        }
        catch(error){
            console.error(error);
        }
    }

    filterPlanet();
    fetchingAllPlanet();
    console.log("planetReady", planetList.length);
  }, [dataHome]);

  const handleBannerId = (id, idx) => {
    setPlanetBannerId(id);
    setIndexs(idx);
  };

  return (
    <div>
      {planetDataReady ? (
        <div className="container-fluid planetAll">
          <h1 className="title mt-3 text-center border-bottom border-4 border-warning pb-2 text-white">
            All Star Wars Planet
          </h1>
          <div className="row d-flex justify-content-center">
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
                            <img src={`/${planetBannerId}Planet.jpg`} alt="mana??" />
                        </div>:
                        <div>
                           <PlanetDetail planetList={planetList} indexs={indexs}/>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="col-9 col-lg-4 col-xl-3 border border-2 planetAll-sidebar mt-4 text-center bg-dark">
              {allPlanetListId.map((planetId, index) => (
                <div key={index}className="my-3 border border-2"onClick={() => handleBannerId(planetId, index)}>
                    <h4 className="title text-center border-bottom border-4 border-warning py-1 text-white">
                        {planetList[index]?.name}
                    </h4>
                  <img src={`/${planetId}Planet.jpg`} alt="" />
                </div>
              ))}
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
