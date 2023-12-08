export default function ResultBar(){


    return(
        <div className="flex flex-col justify-center ">
        <div className=" flex justify-between items-center">
            <h1 className="font-bold text-lg">Result (12)</h1>
            <div>
                <label htmlFor="sort"  className="text-gray-400 font-bold">SORT BY </label>
                <select id="sort" className="bg-white px-4 py-1 focus:outline-main-400 ">
                    <option value="" defaultValue>Newest</option>
                    <option value="" >Oldest</option>
                </select>
            </div>
            
        </div>
        <hr className="bg-secondary w-full h-1 mt-2"/>
        </div>
        
    );
}