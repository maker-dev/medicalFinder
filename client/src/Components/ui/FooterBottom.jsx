import React from "react";
import logo from "../Assets/Icons/Logo.svg";

function FooterBottom() {
  return (
    <div className="bg-main-400 pt-20">
      <div className="grid grid-cols-12 gap-6 px-5 space-y-8 lg:px-0 lg:space-y-0">
        <div className="hidden lg:block lg:col-span-1"></div>
        <div className="col-span-12 lg:col-span-4">
          <div className="mb-6">
            <img src={logo} alt="logo" className="lg:w-3/4" />
          </div>
          <p>
            Provided By @Cityzens
            <br />
            Ecole National Superieur Tetouan
            <br />
            Ens Tetouan, All Rights Reserved
          </p>
        </div>
        <div className="col-span-12 lg:col-span-2">
          <div className="flex flex-col">
            <h3 className="font-bold mb-6 text-xl">Links</h3>
            <div className="space-y-3">
              <p>overons</p>
              <p>social Media</p>
              <p>counters</p>
              <p>contact</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-2">
          <div className="flex flex-col">
            <h3 className="font-bold mb-6 text-xl">Company</h3>
            <div className="space-y-3">
              <p>terms & conditions</p>
              <p>privacy policy</p>
              <p>contact</p>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-2">
          <div className="flex flex-col">
            <h3 className="font-bold mb-6 text-xl">Get in Touch</h3>
            <div className="space-y-3">
              <p>cityzens88@gmail.com</p>
              <p>085-132567</p>
              <p>crechterwoord k12</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-1"></div>
      </div>
      <p className="text-center mt-20 mt-">
        © 2023 Medical Finder .All Rights Reserved
      </p>
    </div>
  );
}

export default FooterBottom;
