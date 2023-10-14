import { useContext, useEffect, useState } from "react";
import { starwarsContext } from "../../App";
import Loading from "./Loading";
import "./CharacterAll.css";
import CharacterDetail from "../sub-pages/CharacterDetail";


export default function CharacterAll() {
  const {dataHome} = useContext(starwarsContext);

  const [characterDataReady, setCharacterDataReady] = useState(false);
  const [allCharacterListId, setAllCharacterListId] = useState([]);
  const [characterBannerId, setCharacterBannerId] = useState(1);
  const [uniqueCharacterList, setUniqueCharacterList] = useState([]);
  const [characterList, setCharactersList] = useState([]);

  const [imageActive, setImageActive] = useState(true);
  const [indexs, setIndexs] =  useState(0);

  useEffect(() => {
    const filterCharacter = async () => {
      try {
        if (dataHome) {
            const characterCollect = dataHome.map((character) => character.characters);
            const joinStarshipCollect = [].concat(...characterCollect);
            const uniqueList = joinStarshipCollect.filter((value, index, self) => self.indexOf(value) === index);
            setUniqueCharacterList(uniqueList);
            setAllCharacterListId(uniqueList.map((character) => character.replace(/\D/g, "")));
          }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchingAllCharacter = async () => {
        try{
            const uniqueListPromises = uniqueCharacterList.map(async(uniqueCharacterList) => {
            const resp = await fetch(uniqueCharacterList)
            return resp.json();
            })

            const characterDataPromises = await Promise.all(uniqueListPromises);
            setCharactersList(characterDataPromises);
            if(characterList.length>0)setCharacterDataReady(true);
        }
        catch(error){
            console.error(error);
        }
    }

    filterCharacter();
    fetchingAllCharacter();
    console.log("characterReady", characterList.length);
  }, [dataHome]);

  const handleBannerId = (id, idx) => {
    setCharacterBannerId(id);
    setIndexs(idx);
  };

  return (
    <div>
      {characterDataReady ? (
        <div className="container-fluid characterAll">
          <h1 className="title mt-3 text-center border-bottom border-4 border-warning pb-2 text-white">
            All Star Wars Characters
          </h1>
          <div className="row">
            <div className="col-7 characterAll-banner mt-4 border border-2 bg-dark">
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
                            <img src={`/${characterBannerId}Character.jpg`} alt="mana??" />
                        </div>:
                        <div>
                           <CharacterDetail characterList={characterList} indexs={indexs}/>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="col-4 border border-2 characterAll-sidebar mt-4 text-center bg-dark">
              {allCharacterListId.map((characterId, index) => (
                <div key={index}className="my-3 border border-2"onClick={() => handleBannerId(characterId, index)}>
                    <h4 className="title text-center border-bottom border-4 border-warning py-1 text-white">
                        {characterList[index]?.name}
                    </h4>
                  <img src={`/${characterId}Character.jpg`} alt="" />
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
