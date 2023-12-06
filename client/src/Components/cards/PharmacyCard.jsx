import aIcons from "../../Assets/Icons";
export default function PharmacyCard(props){
  const {imgUrl} = props; 
    return(
        <>
   
  <div id="card" className=" w-full ">

    <div className=" w-full flex flex-col">
      <div  className="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl   ">
        
        <div className=" md:w-1/2 m-6 ">
          <img className="inset-0 h-full w-full object-cover object-center" src={imgUrl === null ? aIcons.phaIcDefault : imgUrl} />
        </div>
        
        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-around  mt-2">
            <div className="flex flex-col space-y-4 ">
                <p className="font-bold text-lg leading-tight truncate">Healthy Haven Pharmacy</p>
                <p className="font-semibold text-sm text-slate-500 leading-tight truncate">Healthy Haven Pharmacy</p>
                <p className="font-semibold text-sm text-slate-500 leading-tight truncate">Healthy Haven Pharmacy</p>
                <p className="font-bold text-sm leading-tight truncate">Healthy Haven Pharmacy</p>
            </div>
          
          <p className="text-sm lg:mb-20 my-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reiciendis molestiae aut nam, qui quibusdam similique animi sint aliquam temporibus ipsam natus a tenetur magnam eos ullam iure consectetur suscipit.
          </p>
        
        </div>
      </div>
    </div>
  </div>
        
  </>
    );
    
    

}