export default function ResultBar(){


    return(
        <>
        <div className="mx-2 flex justify-between items-center">
            <h1 className="font-bold text-lg">Result (12)</h1>
            <div>
                <label htmlFor="" className="text-gray-400 font-bold">SORT BY </label>
                <select name="" className="bg-white px-4 py-1 focus:outline-main-400 ">
                    <option value="">Newest</option>
                </select>
            </div>
            
        </div>
        <hr className="bg-secondary w-full h-1 mt-2"/>
        </>
        
    );
}