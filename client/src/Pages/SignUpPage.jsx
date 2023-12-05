import React from "react";
import Navbar from "../Components/ui/Navbar";
import Text from "../Components/inputs/Text";
import Button from "../Components/inputs/Button";
import Password from "../Components/inputs/Password";
import Footer from "../Components/Footer";

function SignUpPage() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center">
        <div class="w-full max-w-md mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
            <h1 className="text-center font-black text-4xl">Sign Up</h1>
            <h2 className="text-center  text-xl mt-2 mb-4">Hi There !</h2>
            <div class="mb-4 flex space-x-4">
              <Text
                type="text"
                size="1/3"
                name="firstname"
                placeholder="First Name*"
              />
              <Text
                type="text"
                size="1/3"
                name="lastname"
                placeholder="Last Name*"
              />
            </div>
            <div className="mb-4">
              <Text
                type="email"
                size="full"
                name="email"
                placeholder="E-mail*"
              />
            </div>
            <div className="mb-4">
              <Password name="createpassword" placeholder="Create Password*" />
            </div>

            <div className="mb-4">
              <Text
                type="password"
                size="full"
                name="confirmpassword"
                placeholder="Confirm Password*"
              />
            </div>
            <div className="mb-4">
              <p>Password must be at least 8 characters, numbers.</p>
            </div>
            <div className="mb-4">
              <input type="text" />
            </div>
            <div class="flex items-center justify-between">
              <Button text="Sign Up"></Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUpPage;
