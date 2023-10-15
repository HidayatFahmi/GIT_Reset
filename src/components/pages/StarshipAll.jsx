import { useContext, useEffect, useState } from "react";
import { starwarsContext } from "../../App";
import Loading from "./Loading";
import "./StarshipAll.css";
import StarshipDetail from "../sub-pages/StarshipDetail";


export default function StarshipAll() {
  const {dataHome} = useContext(starwarsContext);

  const [starshipDataReady, setStarshipDataReady] = useState(false);
  const [allStarshipListId, setAllStarshipsListId] = useState([]);
  const [starshipBannerId, setStarshipBannerId] = useState(2);
  const [uniqueStarshipList, setUniqueStarshipList] = useState([]);
  const [starshipList, setStarshipsList] = useState([]);

  const [imageActive, setImageActive] = useState(true);
  const [indexs, setIndexs] =  useState(0);

  useEffect(() => {
    const filterStarship = async () => {
      try {
        if (dataHome) {
            const starshipCollect = dataHome.map((starship) => starship.starships);
            const joinStarshipCollect = [].concat(...starshipCollect);
            const uniqueList = joinStarshipCollect.filter((value, index, self) => self.indexOf(value) === index);
            setUniqueStarshipList(uniqueList);
            setAllStarshipsListId(uniqueList.map((starship) => starship.replace(/\D/g, "")));
          }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchingAllStarship = async () => {
        try{
            const uniqueListPromises = uniqueStarshipList.map(async(uniqueStarshipList) => {
            const resp = await fetch(uniqueStarshipList)
            return resp.json();
            })

            const starshipDataPromises = await Promise.all(uniqueListPromises);
            setStarshipsList(starshipDataPromises);
            if(starshipList.length>0)setStarshipDataReady(true);
        }
        catch(error){
            console.error(error);
        }
    }

    filterStarship();
    fetchingAllStarship();
    console.log("starshipReady", starshipList.length);
  }, [dataHome]);

  const handleBannerId = (id, idx) => {
    setStarshipBannerId(id);
    setIndexs(idx);
  };

  return (
    <div>
      {starshipDataReady ? (
        <div className="container-fluid starshipAll">
          <h1 className="title mt-3 text-center border-bottom border-4 border-warning pb-2 text-white">
            All Star Wars Starships
          </h1>
          <div className="row">
            <div className="d-none d-lg-block col-xl-7 col-md-6 planetAll-banner mt-4 border border-2 bg-dark">
                <div className="row menu my-2 border-bottom border-dark border-2 pb-2 ">
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
                            <img src={`/${starshipBannerId}Starship.jpg`} alt="mana??" />
                        </div>:
                        <div>
                           <StarshipDetail starshipList={starshipList} indexs={indexs}/>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="col-9 col-lg-4 col-xl-3 border border-2 planetAll-sidebar mt-4 text-center bg-dark">
              {allStarshipListId.map((starshipId, index) => (
                <div key={index}className="my-3 border border-2"onClick={() => handleBannerId(starshipId, index)}>
                    <h4 className="title text-center border-bottom border-4 border-warning py-1 bg-white">
                        {starshipList[index]?.name}
                    </h4>
                  <img src={`/${starshipId}Starship.jpg`} alt="" />
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
