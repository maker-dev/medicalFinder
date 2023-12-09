import Button from "../inputs/Button";

export default function SideBarCard(){
    return(
        <div className="w-full">
            <div className="bg-secondary flex justify-between items-center px-8 py-9">
                    <h1 className="text-white text-xl">Advanced Search</h1>
                    <h3 className="text-slate-400 text-sm"><a href="clearall.com">CLEAR ALL</a></h3>
            </div>
            <div className="bg-white  p-4  ">
                <div className="w-full">
                    <h1 className="text-secondary text-lg font-black ">Search</h1>
                    <input type="search" name="searchField" placeholder="Type pill Pharmacy and more..."  className="bg-gray-200 w-full placeholder-slate-800 rounded-lg text-xs p-2"/>
                </div>
                <div className="w-full mt-2">
                    <div className="flex justify-between w-10/12 mt-6">
                        <h1 className="text-secondary text-md font-black ">CITY</h1>
                        <h2><a href="https://hi.com" className="text-xs font-bold text-slate-500">CLEAR</a></h2>
                    </div>

                    <select name="filterLocation"  className="bg-gray-200 w-10/12 rounded-lg text-xs p-1">
                        <option value="" defaultValue>e.g “NEAR BY” , “ALL”</option>
                    </select>

                    <div className="flex  gap-2  flex-wrap my-2">
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                    </div>
                    <div className="flex justify-between w-10/12 mt-6">
                        <h1 className="text-secondary text-md font-black ">CUSTOMER RATING</h1>
                        <h2><a href="clear.com" className="text-xs font-bold text-slate-500">CLEAR</a></h2>
                    </div>

                    <select name="filterCustomer" className="bg-gray-200 w-10/12 rounded-lg text-xs p-1">
                        <option value="" defaultValue>e.g “ALL”</option>
                    </select>

                    <div className="flex  gap-2  flex-wrap my-2">
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                    </div>
                    <div className="flex justify-between w-10/12 mt-6">
                        <h1 className="text-secondary text-md font-black ">PERMANENCE</h1>
                        <h2><a href="clear.com" className="text-xs font-bold text-slate-500">CLEAR</a></h2>
                    </div>

                    <select name="filterPermanence"  className="bg-gray-200 w-10/12 rounded-lg text-xs p-1">
                        <option value="" defaultValue>e.g “True”</option>
                    </select>

                    
                </div>
                
                <div className="my-6">
                    <Button 
                    size='full '
                    text="Search"></Button>
                </div>
            </div>
        </div>
    );
}