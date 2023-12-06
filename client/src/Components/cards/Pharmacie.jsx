export default function Pharmacie(){
    return(
        <>
   
  <div id="card" class="pt-6 pb-12 w-full ">

    <div class="container w-100 lg:w-4/5 mx-auto flex flex-col">
      <div  class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg shadow-xl  mt-4 w-100 mx-2">
        
        <div class=" lg:w-1/2 lg:m-6 ">
          <img class="inset-0 h-full w-full object-cover object-center" src="https://www.signalisation.ma/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/p/h/pharmacie_plaque.png" />
        </div>
        
        <div class="w-full py-4 px-6 text-gray-800 flex flex-col justify-around  mt-2">
            <div className="flex flex-col space-y-4 ">
                <p class="font-bold text-lg leading-tight truncate">Healthy Haven Pharmacy</p>
                <p class="font-semibold text-sm text-slate-500 leading-tight truncate">Healthy Haven Pharmacy</p>
                <p class="font-semibold text-sm text-slate-500 leading-tight truncate">Healthy Haven Pharmacy</p>
                <p class="font-bold text-sm leading-tight truncate">Healthy Haven Pharmacy</p>
            </div>
          
          <p className="text-sm lg:mb-20">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reiciendis molestiae aut nam, qui quibusdam similique animi sint aliquam temporibus ipsam natus a tenetur magnam eos ullam iure consectetur suscipit.
          </p>
        
        </div>
      </div>
    </div>
  </div>
        
  </>
    );
    
    

}