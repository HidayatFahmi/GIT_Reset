import { useContext, useEffect, useState } from "react";
import { starwarsContext } from "../../App";
import Loading from "./Loading";
import "./VehicleAll.css";
import VehicleDetail from "../sub-pages/VehicleDetail";


export default function VehicleAll() {
  const {dataHome} = useContext(starwarsContext);

  const [vehicleDataReady, setVehicleDataReady] = useState(false);
  const [allVehicleListId, setAllVehicleListId] = useState([]);
  const [vehicleBannerId, setVehicleBannerId] = useState(4);
  const [uniqueVehicleList, setUniqueVehicleList] = useState([]);
  const [vehicleList, setVehicleList] = useState([]);

  const [imageActive, setImageActive] = useState(true);
  const [indexs, setIndexs] =  useState(0);

  useEffect(() => {
    const filterVehicle = async () => {
      try {
        if (dataHome) {
            const vehicleCollect = dataHome.map((vehicle) => vehicle.vehicles);
            const joinVehicleCollect = [].concat(...vehicleCollect);
            const uniqueList = joinVehicleCollect.filter((value, index, self) => self.indexOf(value) === index);
            setUniqueVehicleList(uniqueList);
            setAllVehicleListId(uniqueList.map((vehicle) => vehicle.replace(/\D/g, "")));
          }
      } catch (error) {
        console.error(error);
      }
    };

    const fetchingAllVehicle = async () => {
        try{
            const uniqueListPromises = uniqueVehicleList.map(async(uniqueVehicleList) => {
            const resp = await fetch(uniqueVehicleList)
            return resp.json();
            })

            const vehicleDataPromises = await Promise.all(uniqueListPromises);
            setVehicleList(vehicleDataPromises);
            if(vehicleList.length>0)setVehicleDataReady(true);
        }
        catch(error){
            console.error(error);
        }
    }

    filterVehicle();
    fetchingAllVehicle();
    console.log("vehicleReady", vehicleList.length);
  }, [dataHome]);

  const handleBannerId = (id, idx) => {
    setVehicleBannerId(id);
    setIndexs(idx);
  };

  return (
    <div>
      {vehicleDataReady ? (
        <div className="container-fluid vehicleAll">
          <h1 className="title mt-3 text-center border-bottom border-4 border-warning pb-2 text-white">
            All Star Wars Vehicles
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
                            <img src={`/${vehicleBannerId}Vehicle.jpg`} alt="mana??" />
                        </div>:
                        <div>
                           <VehicleDetail vehicleList={vehicleList} indexs={indexs}/>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="col-9 col-lg-4 col-xl-3 border border-2 planetAll-sidebar mt-4 text-center bg-dark">
              {allVehicleListId.map((vehicleId, index) => (
                <div key={index}className="my-3 border border-2"onClick={() => handleBannerId(vehicleId, index)}>
                    <h4 className="title text-center border-bottom border-4 border-warning py-1 text-white">
                        {vehicleList[index]?.name}
                    </h4>
                  <img src={`/${vehicleId}Vehicle.jpg`} alt="" />
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
