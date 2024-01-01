import FooterBottom from '../Components/ui/FooterBottom';
import Navbar from "../Components/ui/Navbar";
import phaIcDefault from "../Assets/Icons/PharmacyImg.svg";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../Api/api';
import FormatAmPm from '../helpers/FormatAmPm.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import locationIcon from '../Assets/Icons/location.png'
import {FaStar} from 'react-icons/fa'

export default function PharmacyPage() {

    const { id } = useParams();
    const [pharmacy, setPharmacy] = useState({});

    useEffect(() => {
        getPharmacyData(id);
    }, [])

    const getPharmacyData = async (id) => {
        const endPoint = `pharmacies/${id}`;
        const response = await api.get(endPoint);       
        setPharmacy(response.data.data);
    }
    
    const myIcon = new L.Icon({
        iconUrl: locationIcon,
        iconSize: [32, 32],      // size of the icon
        iconAnchor: [16, 32],    // point of the icon which will correspond to marker's location
        popupAnchor: [0, -32],   // point from which the popup should open relative to the iconAnchor
    });      
    return(
        <>
            <Navbar /> 
                <div className='m-6 bg-white  p-6  flex flex-col '>
                    <div className="flex mb-2">
                        {
                            pharmacy.ratings ? 
                            Array.from({ length: 5 }, (_, index) => (
                                Math.round(pharmacy.ratings) >= index + 1 
                                ?
                                <FaStar key={index} size={25} fill='#0074cc' />
                                :
                                <FaStar key={index} size={25} fill='#e4e5e9' />
                            ))
                            : <span style={{color: "#0074cc"}} className="font-bold">No Ratings Yet</span>
                        }
                    </div>
                    
                    <div className='mt-1'>
                        <h1 className='font-black lg:text-2xl text-xl '>{pharmacy.name}</h1>
                        <p className='font-black text-sm text-gray-500 mt-4 '>Operating Hours: {FormatAmPm(pharmacy.opening_time)}-{FormatAmPm(pharmacy.closing_time)}</p>
                    </div>
                    <div className=" md:w-1/2 my-10 mx-auto  ">
                     <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src={pharmacy.image === null ? phaIcDefault : phaIcDefault}
                         alt="pharmacy image"
                         />
                    </div>
                    <div className='my-3'>
                        <h1 className='font-black lg:text-2xl text-xl '>PHARMACY OVERVIEW</h1>
                        <p className='mt-6 '>{pharmacy.description}</p>
                    </div>
                    <div className="rounded-md overflow-auto border border-gray-400 mt-10">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-300">
                                        <th className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                                </svg>
                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">Phone Number</p>
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">{pharmacy.phone}</p>
                                            </div>
                                            </div>
                                            
                                        </th>
                                        <th className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                                                <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clipRule="evenodd" />
                                            </svg>

                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm  text-center font-medium md:text-left">Permanance Capability</p>
                                                <p className="text-gray-600 text-sm  text-center font-medium md:text-left">{pharmacy.permanence ? "active" : "not active"}</p>
                                            </div>
                                            </div>
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-gray-300">
                                        <td className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                                
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M19.006 3.705a.75.75 0 1 0-.512-1.41L6 6.838V3a.75.75 0 0 0-.75-.75h-1.5A.75.75 0 0 0 3 3v4.93l-1.006.365a.75.75 0 0 0 .512 1.41l16.5-6Z" />
                                                <path fillRule="evenodd" d="M3.019 11.114 18 5.667v3.421l4.006 1.457a.75.75 0 1 1-.512 1.41l-.494-.18v8.475h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3v-9.129l.019-.007ZM18 20.25v-9.566l1.5.546v9.02H18Zm-9-6a.75.75 0 0 0-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75H9Z" clipRule="evenodd" />
                                            </svg>

                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm font-medium text-center md:text-left">Address</p>
                                                <p className="text-gray-600 text-sm font-medium text-center md:text-left" >{pharmacy.address}</p>
                                            </div>
                                            </div>
                                            
                                        </td>
                                        <td className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path filrule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                                                </svg>
                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">City</p>
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">{pharmacy.city}</p>
                                            </div>
                                            </div>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody>
                                <tr className="border-b border-gray-300">
                                        <td className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                                </svg>
                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm font-medium text-center md:text-left">Google Map Location </p>
                                                <p className="text-gray-600 text-sm font-medium text-center md:text-left" ><a className='text-red-700 underline font-bold hover:text-green-700' href={pharmacy.location ? `https://www.google.com/maps?q=${pharmacy.location.latitude},${pharmacy.location.longitude}` : "#"} target='_blank'>Location link</a></p>
                                            </div>
                                            </div>
                                        </td>
                                        <td className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                            </svg>
                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">Contact E-mail</p>
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">{pharmacy.email}</p>
                                            </div>
                                            </div>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                    </div> 
                    <div className='mt-12'>
                        <h1 className='font-black lg:text-2xl text-xl my-3'>PHARMACY LOCATION</h1>
                        <div>
                            {
                            pharmacy.location &&
                            <MapContainer center={[pharmacy.location.latitude, pharmacy.location.longitude]} zoom={13} style={{ height: '500px', width: '100%' }}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <Marker position={[pharmacy.location.latitude, pharmacy.location.longitude]} icon={myIcon}>
                                    <Popup>
                                        A pretty CSS3 popup. <br /> Easily customizable.
                                    </Popup>
                                </Marker>
                            </MapContainer>
                            }

                        </div>
                    </div>
                </div>
            <FooterBottom/>
        </>
        
    );
}