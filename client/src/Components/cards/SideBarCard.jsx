import { cities, customer_rating } from "../../data/data";
import Button from "../inputs/Button";
import React,{ useState } from "react";

export default function SideBarCard(){

    //array for tiquettes filter
    const [cityArr,setCityArr] = useState([]);
    const [customerArr,setCustmerArr] = useState([]);
    
    //function add ticket
    const addTicket = (event,setArr,arr )=> {
        let arrTickets = new Set(arr);
        arrTickets.add(event.target.value);
        setArr([...arrTickets]);
    } 
    //function delete city ticket
    const deleteTicket = (event,setArr,arr) =>{
        const updatedCityArr = arr.filter(item => item !== event.target.id);
        setArr(updatedCityArr);
    }
    // clear all the filter tickets
    function clearAllTickets(event){
            event.preventDefault();
            setCityArr([]);
            setCustmerArr([]);
    }
    // clear city the filter tickets
    const clearTickets = (setArr)=>{
        setArr([]);
    }
    

    return(
        <div className="w-full">
            <div className="bg-secondary flex justify-between items-center px-8 py-12">
                    <h1 className="text-white ">Advanced Search</h1>
                    <h3 className="text-slate-400 text-sm cursor-pointer"><button onClick={(event)=>clearAllTickets(event)}>CLEAR ALL</button></h3>
            </div>
            <div className="bg-white  p-4">
                <div className="w-full mt-4">
                    <h1 className="text-secondary text-lg font-black ">Search</h1>
                    <input type="search" name="searchField" placeholder="Type pill Pharmacy and more..."  className="bg-gray-200 w-full placeholder-slate-800 rounded-lg text-xs p-2"/>
                </div>
                <div className="w-full mt-2">
                    <div className="flex justify-between w-full lg:w-10/12 mt-6">
                        <h1 className="text-secondary text-md font-black ">CITY</h1>
                        <h2><button  onClick={()=>clearTickets(setCityArr)} className="text-xs font-bold text-slate-500">CLEAR</button></h2>
                    </div>

                    <select name="filterLocation"  multiple={false} onChange={(event)=>addTicket(event,setCityArr,cityArr)}  className="bg-gray-200 w-full lg:w-10/12 rounded-lg text-xs p-1">
                        <option value="" defaultValue>e.g “NEAR BY” , “ALL”</option>
                        {cities.map((city,index)=> (
                            <option value={city} key={index}>{city}</option>
                        ))}
                    </select>

                    <div className="flex  gap-2  flex-wrap my-2">
                    {cityArr.map((city)=> (
                        <div key={city} className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                        <h3 className="text-white text-xs font-semibold line-clamp-1">{city}</h3>
                        <button id={city} onClick={(event)=>deleteTicket(event,setCityArr,cityArr)} className="text-xs text-white font-thin">x</button>
                        </div>
                        ))}
                        
                    </div>
                    <div className="flex justify-between w-full lg:w-10/12 mt-6">
                        <h1 className="text-secondary text-md font-black ">CUSTOMER RATING</h1>
                        <h2><button onClick={()=>clearTickets(setCustmerArr)} className="text-xs font-bold text-slate-500">CLEAR</button></h2>
                    </div>

                    <select name="filterCustomer" onChange={(event) => addTicket(event,setCustmerArr,customerArr)} className="bg-gray-200 w-full lg:w-10/12 rounded-lg text-xs p-1">
                        <option value="" defaultValue>e.g “ALL”</option>
                        {customer_rating.map((rating,index)=> (
                            <option value={rating} key={index}>{rating}</option>
                        ))}
                    </select>

                    <div className="flex  gap-2  flex-wrap my-2">
                    {customerArr.map((customer)=> (
                        <div key={customer} className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                        <h3 className="text-white text-xs font-semibold line-clamp-1">{customer}</h3>
                        <button id={customer} onClick={(event)=>deleteTicket(event,setCustmerArr,customerArr)} className="text-xs text-white font-thin">x</button>
                        </div>
                        ))}
                    </div>
                    <div className="flex justify-between w-full lg:w-10/12 mt-6">
                        <h1 className="text-secondary text-md font-black ">PERMANENCE</h1>
                        <h2><a href="clear.com" className="text-xs font-bold text-slate-500">CLEAR</a></h2>
                    </div>

                    <select name="filterPermanence"  className="bg-gray-200 w-full lg:w-10/12 rounded-lg text-xs p-1">
                        <option value="" defaultValue>e.g “Yes”</option>
                        <option value="True" > Yes</option>
                        <option value="False" >Not</option>
                    </select>

                    
                </div>
                
                <div className="my-6">
                    <Button 
                    size='full'
                    text="Search"></Button>
                </div>
            </div>
        </div>
    );
}