  import React ,{useState} from "react";
  import Navbar from "../Components/ui/Navbar";
  import Text from "../Components/inputs/Text";
  import Button from "../Components/inputs/Button";
  import Password from "../Components/inputs/Password";
  import Footer from "../Components/Footer";
  import { Link, useNavigate } from "react-router-dom";
  import api from '../Api/api';
  import Loader from '../Components/ui/Loader';

  function SignUpPage() {
    const [userType, setUserType] = useState('client');
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPassword_confirmation] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    //validation errors states:
    const [validateName, setValidateName] = useState([]);
    const [validateFirstName, setValidateFirstName] = useState([]);
    const [validateLastName, setValidateLastName] = useState([]);
    const [validateEmail, setValidateEmail] = useState([]);
    const [validatePassword, setValidatePassword] = useState([]);
    
    

    const handleUserTypeChange = (e) => {
      setUserType(e.target.value);
    };


    const signUpUser = async (e) => {
      setLoading(true);
      e.preventDefault();
      const response = await api.post('register', JSON.stringify({userType,name, firstName, lastName, email, password, password_confirmation}));
      
      if(response.status === 422){
        setValidateName(response.data.message.name || []);
        setValidateFirstName(response.data.message.firstName || []);
        setValidateLastName(response.data.message.lastName || []);
        setValidateEmail(response.data.message.email || []);
        setValidatePassword(response.data.message.password || []);
      }
      else{
        navigate("/login");
      }
      
      
      setLoading(false);
    }

    return (
      <>

        <Navbar />
        <div className="h-full my-10 flex items-center">
          <div className  ="w-full max-w-md mx-auto">
            <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 ">
              <h1 className="text-center font-black text-4xl">Sign Up</h1>
              <h2 className="text-center  text-xl mt-2 mb-4">Hi There !</h2>
              
                <>
                  
                  {userType==="client" &&(

                    <>
                    <div className="md:flex  md:space-x-2 block space-x-0">
                    <div className="md:mb-2 mb-4 ">
                <Text
                  type="text"
                  size="full"
                  name="firstName"
                  inputValue={firstName}
                  onInputChange={setFirstName}
                  placeholder="First Name*"
                  borderColor={ validateFirstName.length === 0  ? "":"border-red-500 focus:border-red-500"}
                />
                {validateFirstName.length > 0  && validateFirstName.map((errorFirstName,index) => {return(<p key={index} className="text-red-500 font-thin mt-1">{errorFirstName}</p>)})}
              </div>
              <div className="md:mb-2 mb-4">
                <Text
                  type="text"
                  size="full"
                  name="lastName"
                  inputValue={lastName}
                  onInputChange={setLastName}
                  placeholder="Last Name*"
                  borderColor={ validateLastName.length === 0 ? "":"border-red-500 focus:border-red-500"}
                />
                { validateLastName.length > 0  && validateLastName.map((errorLastName,index) => {return(<p key={index} className="text-red-500 font-thin mt-1">{errorLastName}</p>)})}
              </div>
              </div>
              
              </>
              
              )}
              
              {userType==="pharmacy" && (
              <div className=" mb-4 mt-6  ">
                  <Text
                    type="text"
                    size="full"
                    name="name"
                    inputValue={name}
                    onInputChange={setName}
                    placeholder="Pharmacy Name*"
                    borderColor={validateName.length === 0 ? "":"border-red-500 focus:border-red-500"}
                  />
                  {validateName.length > 0  && validateName.map((errorName,index) => {return(<p key={index} className="text-red-500 font-thin mt-1">{errorName}</p>)})}
                </div>
              )}
              
              <div className="mb-4">
                <Text
                  type="email"
                  size="full"
                  name="email"
                  inputValue={email}
                  onInputChange={setEmail}
                  placeholder="E-mail*"
                  borderColor={validateEmail.length === 0 ? "":"border-red-500 focus:border-red-500"}
                />
                { validateEmail.length > 0 && validateEmail.map((errorEmail,index)=>{return(<p key={index} className="text-red-500 font-thin mt-1">{errorEmail}</p>)})}
              </div>
              <div className="mb-4">
                <Password 
                name="password" 
                inputValue={password}
                onInputChange={setPassword}
                placeholder="Create Password*"
                borderColor={ validatePassword.length === 0 ? "":"border-red-500 focus:border-red-500"}
                />
                {validatePassword.length > 0  && validatePassword.map((errorPassword,index) => {return(<p key={index} className="text-red-500 font-thin mt-1">{errorPassword}</p>)})}
              </div>

              <div className="mb-4">
                <Text
                  type="password"
                  size="full"
                  inputValue={password_confirmation}
                  onInputChange={setPassword_confirmation}
                  name="password_confirmation"
                  placeholder="Confirm Password*"
                  borderColor={ validatePassword.includes("The password field confirmation does not match.") ? "border-red-500 focus:border-red-500":""}
                />
                { validatePassword.length > 0 && validatePassword.includes("The password field confirmation does not match.")  && (<p className="text-red-500 font-thin mt-2">The password field confirmation does not match.</p>)}
              </div>
                </>
              
        
              
  <div className="flex mb-4 flex-col sm:flex-row">
      <h1 className="mr-4">Are you a ? </h1> 
      <div className="flex items-center me-4 ms-4">
          <input id="pharmacy-radio" type="radio" value="pharmacy"
                  checked={userType === 'pharmacy'}
                  onChange={handleUserTypeChange} name="user-radio-group" className="w-4 h-4 text-main-400 bg-gray-100 border-gray-300 focus:ring-main-400 dark:focus:ring-main-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-main-400 dark:border-main-400"/>
          <label htmlFor="pharmacy-radio" className="ms-2 text-sm font-medium ">Pharmacy</label>
      </div>
      <p className="mr-4">Or</p>
      <div className="flex items-center me-4 ms-4">
          <input id="client-radio" type="radio" value="client"
                  checked={userType === 'client'}
                  onChange={handleUserTypeChange} name="user-radio-group" className="w-4 h-4 text-main-400 bg-gray-100 border-gray-300 focus:ring-main-400 dark:focus:ring-main-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-main-400 dark:border-main-400"/>
          <label htmlFor="client-radio" className="ms-2 text-sm font-medium ">Client</label>
      </div>
  </div>

              
      <div className="mb-4 flex items-center">
      <input name="checkbox-agree" type="checkbox" value="" className="w-4 h-4 text-main-400 bg-gray-100  rounded focus:ring-main-400 dark:focus:ring-main-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-main-600"/>
      <label htmlFor="checkbox-agree" className="ms-2 text-sm ">I agree with the <a href="agree.com" className="text-main-400 hover:underline">terms and conditions</a>.</label>
      </div>
      <div className="flex items-center justify-between">
        <Button text="Sign Up" onBtnClick={signUpUser}></Button>
      </div>
      <div className="inline-flex items-center justify-center w-full">
      <hr className="w-full h-px my-8 bg-slate-900 border-0 "/>
      <span className="absolute  rounded-full text-xs p-2 text-center font-medium text-white -translate-x-1/2 bg-slate-900 left-1/2 ">
        OR</span>
      </div>
      <div className="grid w-full place-items-center mb-4">
      <div className=" flex space-x-6">
        {/* facebook */}
      <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className="mb-2 inline-block bg-blue-700 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="white"
      viewBox="0 0 24 24">
      <path
        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
    </svg>
  </button>
  {/* google */}
  <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className="mb-2 inline-block bg-red-600 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="white"
      viewBox="0 0 24 24">
      <path
        d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        fillRule="evenodd"
        clipRule="evenodd" />
    </svg>
  </button>
  {/* linkdin */}
  <button
    type="button"
    data-te-ripple-init
    data-te-ripple-color="light"
    className="mb-2 inline-block bg-blue-500 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
    >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="white"
      viewBox="0 0 24 24">
      <path
        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  </button>
  </div>
      </div>
      <h2 className="ms-2 text-sm text-center ">Already a member ? <Link to="/login" className="text-main-400 hover:underline">Log in</Link>.</h2>

    </form>
          </div>
        </div>
        {loading && <Loader />}
        <Footer />
      </>
    );
    
  }

  export default SignUpPage;
