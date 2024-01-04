export default function SubscribeBar(){

    return(
        <div className="flex md:flex-row flex-col justify-arround  space-x-0 md:space-x-10 items-center   px-2 py-6 bg-secondary rounded-xl " id="sub-bar">
            <div className="text-wrap p-4  text-sm "> 
            <p className="text-white text-md">Catch the latest in pharmacy product updates, expert tips, and exclusive offers every week - subscribe now !</p>
            </div>
            
            <form className="flex w-full  md:flex-row flex-col justify-between p-4 space-y-2 md:space-y-0 md:space-x-3">
                <input type="search" name="" id="" placeholder="E-mail"  className="w-full px-6 rounded-md  py-2"/>
                <button className="font-bold bg-main-400 px-6 py-2 rounded-md ">Subscribe</button>
            </form>
            
        </div>
    );
}