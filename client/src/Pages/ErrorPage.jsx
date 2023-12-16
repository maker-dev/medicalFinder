import Navbar from "../Components/ui/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
export default function ErrorPage(){
    const navigate = useNavigate();

    const handleClick = () => {
      // Use the navigate function to go to the home page
      navigate('/home');
    };

    return(  
        <>
            <Navbar></Navbar>
            <div className="flex flex-col items-center justify-center space-y-6 w-full h-screen bg-main-400">
                <p className="text-5xl text-white md:text-7xl lg:text-9xl">404</p>
                <p className="text-3xl text-white md:text-4xl lg:text-5xl">Ooops! Page not found</p>
                <button onClick={handleClick} type="button" className=" flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-slate-900 text-white stroke-white hover:text-slate-900 hover:stroke-slate-900 hover:bg-white rounded-lg gap-x-2 sm:w-auto ">
                    <svg className="w-5 h-5 stroke-inherit" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white">
                        <path  strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span className="text-inherit">Go back</span>
                </button>
            </div>
            <Footer></Footer>
        </>
    );
}