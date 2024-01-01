import phaIcDefault from "../../Assets/Icons/PharmacyImg.svg";
import FormatAmPm from '../../helpers/FormatAmPm.js';
import { useNavigate } from 'react-router-dom';

export default function PharmacyCard( {pharmacy, distance} ) {

  const navigate = useNavigate();
  const toPharmacyPage = (pharmcyId) => {

    navigate(`/pharmacy/${pharmcyId}`);
  }

  return (
    <div id="card"  onClick={()=>toPharmacyPage(pharmacy.id)} className=" w-full hover:shadow-lg cursor-pointer ">
      <div className=" w-full flex flex-col bg-white">

        { distance && !isNaN(distance.value) && <div className="p-3 pr-5">
           <p className="font-black text-gray-500 text-end">{distance.value +" "+distance.unity}</p>
        </div>
        }
        <div
          className="flex flex-col md:flex-row overflow-hidden  rounded-lg ">
          <div className=" md:w-1/2 m-4 ">
            <img
              className="inset-0 h-full w-full object-cover object-center"
              src={pharmacy.image === null ? phaIcDefault : phaIcDefault}
              alt="pharmacy img"
            />
          </div>

          <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-around  mt-2">
            <div className="flex flex-col space-y-4 ">
              <p className="font-bold text-lg leading-tight truncate">
                {pharmacy.name}
              </p>
              <p className="font-semibold text-sm text-slate-500 leading-tight truncate">
                <span className="text-inherit">Address : </span>{pharmacy.address}
              </p>
              <p className="font-semibold text-sm text-slate-500 leading-tight truncate">
                <span className="text-inherit">Operating Hours : </span>{FormatAmPm(pharmacy.opening_time)} - {FormatAmPm(pharmacy.closing_time)}
              </p>
              <p className="font-bold text-sm leading-tight truncate">
                <span className="text-inherit">Rating : </span>{pharmacy.ratings ? `${pharmacy.ratings} / 5` : "no ratings yet" }
              </p>
              { pharmacy.price &&
                <p className="font-bold text-sm leading-tight truncate">
                  <span className="text-inherit">Price : {pharmacy.price} MAD</span>
                </p>
              }
              { pharmacy.quantity &&
                <p className="font-bold text-sm leading-tight truncate">
                  <span className="text-inherit">Quantity : {pharmacy.quantity} </span>
                </p>
              }
            </div>

            <p className="text-sm lg:mb-20 my-6">
              {pharmacy.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
