import FooterBottom from '../Components/ui/FooterBottom';
import Navbar from "../Components/ui/Navbar";
import phaIcDefault from "../Assets/Icons/PharmacyImg.svg";



export default function PharmacyPage(){
    return(
        <>
            <Navbar /> 
                <div className='m-6 bg-white  p-6  flex flex-col '>
                    <div className=''>
                        stars
                    </div>
                    
                    <div className='mt-1'>
                        <h1 className='font-black lg:text-2xl text-xl '>Pharmacy Title Here{}</h1>
                        <p className='font-black text-sm text-gray-500 mt-4 '>Operating Hours: 7AM{}</p>
                    </div>
                    <div className=" md:w-1/2 my-10 mx-auto  ">
                     <img
                        className="inset-0 h-full w-full object-cover object-center"
                        src={phaIcDefault}
                         alt="pharmacy image"
                         />
                    </div>
                    <div className='my-3'>
                        <h1 className='font-black lg:text-2xl text-xl '>PHARMACY OVERVIEW</h1>
                        <p className='mt-6 '>Description Here {} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet cumque sed beatae alias assumenda, repellendus, fuga quidem excepturi quam amet dolore ratione nisi facere accusamus sit sunt soluta nemo fugit!</p>
                    </div>
                    <div className="rounded-md overflow-auto border border-gray-400 mt-10">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-300">
                                        <th className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                                </svg>
                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">Phone Number</p>
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">+212764378298</p>
                                            </div>
                                            </div>
                                            
                                        </th>
                                        <th className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                                                <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z" clipRule="evenodd" />
                                            </svg>

                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm  text-center font-medium md:text-left">Permanance Capability</p>
                                                <p className="text-gray-600 text-sm  text-center font-medium md:text-left">Active</p>
                                            </div>
                                            </div>
                                            
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="border-b border-gray-300">
                                        <td className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                                </svg>
                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm font-medium text-center md:text-left">Google Map Location </p>
                                                <p className="text-gray-600 text-sm font-medium text-center md:text-left" ><a className='text-red-700 underline font-bold hover:text-green-700' href={`https://www.google.com/maps/place/32%C2%B038'22.2%22N+4%C2%B022'27.7%22W/@32.639504,-4.3769239,17z/data=!3m1!4b1!4m4!3m3!8m2!3d32.639504!4d-4.374349?entry=ttu`} target='_blank'>Location link</a></p>
                                            </div>
                                            </div>
                                            
                                        </td>
                                        <td className="py-6 px-4 border-r border-gray-300">
                                            <div className='flex md:flex-row flex-col items-center '>
                                            <div className="relative p-4 rounded-full border border-1 border-gray-400">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                            </svg>
                                            </div>

                                            <div className="mt-4 md:mt-0 md:ml-4">
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">Contact E-mail</p>
                                                <p className="text-gray-600 text-sm text-center font-medium md:text-left">patmacy.mail@gmail.com</p>
                                            </div>
                                            </div>
                                            
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                    </div> 
                    <div className='mt-12'>
                        <h1 className='font-black lg:text-2xl text-xl '>PHARMACY LOCATION</h1>
                        <div>
                            card map design 
                        </div>
                    </div>
                </div>
            <FooterBottom/>
        </>
        
    );
}