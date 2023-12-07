import Button from "../inputs/Button";

export default function SideBarCard(){
    return(
        <div className="w-full">
            <div className="bg-secondary flex justify-between items-center px-12 py-16">
                    <h1 className="text-white text-xl">Advanced Search</h1>
                    <h3 className="text-slate-400 text-sm"><a href="">CLEAR ALL</a></h3>
            </div>
            <div className="bg-white  mt-4 p-4">
                <div className="w-full">
                    <h1 className="text-secondary text-lg font-black ">Search</h1>
                    <input type="search" placeholder="Type pill Pharmacy and more..."  className="bg-gray-200 w-full placeholder-slate-800 rounded-lg text-xs p-2"/>
                </div>
                <div>
                    <h1 className="text-secondary text-lg font-black ">Search</h1>
                    <select name="" id="" placeholder="ohrgioher" className="bg-gray-200 w-full  rounded-lg text-xs p-2">
                        <option value="">test</option>
                    </select>
                    
                </div>
                <div>
                <h1 className="text-secondary text-lg font-black ">Search</h1>
                    <input type="SEARCH"  className="bg-gray-200 w-full rounded"/>
                </div>
                <div>
                <h1 className="text-secondary text-lg font-black ">Search</h1>
                    <input type="search"  className="bg-gray-200 w-full rounded"/>
                </div>
                <div>
                    <Button 
                    size='full'
                    text="Search"></Button>
                </div>
            </div>
        </div>
    );
}