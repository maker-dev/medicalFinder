import Button from "../inputs/Button";

export default function SideBarCard(){
    return(
        <div className="w-full">
            <div className="bg-secondary flex justify-between items-center px-12 py-16">
                    <h1 className="text-white text-xl">Advanced Search</h1>
                    <h3 className="text-slate-400 text-sm"><a href="">CLEAR ALL</a></h3>
            </div>
            <div className="bg-white  p-6  ">
                <div className="w-full">
                    <h1 className="text-secondary text-lg font-black ">Search</h1>
                    <input type="search" placeholder="Type pill Pharmacy and more..."  className="bg-gray-200 w-full placeholder-slate-800 rounded-lg text-xs p-2"/>
                </div>
                <div className="w-full mt-4">
                    <div className="flex justify-between w-10/12 mt-10">
                        <h1 className="text-secondary text-md font-black ">CITY</h1>
                        <h2><a href="" className="text-xs font-bold text-slate-500">CLEAR</a></h2>
                    </div>

                    <select name="" id="" placeholder="ohrgioher" className="bg-gray-200 w-10/12 rounded-lg text-xs p-1">
                        <option value="" selected>e.g “NEAR BY” , “ALL”</option>
                    </select>

                    <div className="flex  gap-2  flex-wrap my-4">
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                    </div>
                    <div className="flex justify-between w-10/12 mt-10">
                        <h1 className="text-secondary text-md font-black ">CUSTOMER RATING</h1>
                        <h2><a href="" className="text-xs font-bold text-slate-500">CLEAR</a></h2>
                    </div>

                    <select name="" id="" placeholder="ohrgioher" className="bg-gray-200 w-10/12 rounded-lg text-xs p-1">
                        <option value="" selected>e.g “ALL”</option>
                    </select>

                    <div className="flex  gap-2  flex-wrap my-4">
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                    </div>
                    <div className="flex justify-between w-10/12 mt-10">
                        <h1 className="text-secondary text-md font-black ">PERMANENCE</h1>
                        <h2><a href="" className="text-xs font-bold text-slate-500">CLEAR</a></h2>
                    </div>

                    <select name="" id="" placeholder="ohrgioher" className="bg-gray-200 w-10/12 rounded-lg text-xs p-1">
                        <option value="" selected>e.g “True”</option>
                    </select>

                    <div className="flex  gap-2  flex-wrap my-4">
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                        <div className="bg-secondary text-white flex justify-start space-x-4  rounded-xl  px-2 py-1">
                            <h3 className="text-white text-xs font-semibold line-clamp-1">name huhiuh uih ijhiohiohoh</h3>
                            <button className="text-xs text-white font-thin">x</button>
                        </div>
                    </div>
                    
                </div>
                
                <div className="my-10">
                    <Button 
                    size='full '
                    text="Search"></Button>
                </div>
            </div>
        </div>
    );
}