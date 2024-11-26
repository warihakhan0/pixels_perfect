import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row md:justify-between p-10 place-items-center">
      <div>
        <h1 className="text-white text-3xl font-extrabold ">Fashion</h1>
        <h3 className="text-slate-400 mb-10 w-4/5">
          Complete your style with awesome clothes from us.
        </h3>
        <div className="text-black m-2 gap-2 flex flex-row justify-between text-xl w-36">
          <div className="bg-yellow-300 p-2 rounded-lg">
            <FaFacebookF />
          </div>
          <div className="bg-yellow-300 p-2 rounded-lg">
            <FaInstagram />
          </div>
          <div className="bg-yellow-300 p-2 rounded-lg">
            <FaTwitter />
          </div>
          <div className="bg-yellow-300 p-2 rounded-lg">
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-14 m-5">
        <div className="mb-5">
          <h3 className="text-slate-300 font-medium text-sm mb-2">Company</h3>
          <ul>
            <li className="text-slate-400  list-none mb-2">About</li>
            <li className="text-slate-400 list-none mb-2">Contact us</li>
            <li className="text-slate-400 list-none mb-2">Support</li>
            <li className="text-slate-400 list-none mb-2">Careers</li>
          </ul>
        </div>
        <div className="mb-5">
          <h3 className="text-slate-300 font-medium text-sm mb-2">
            Quick Link
          </h3>
          <ul>
            <li className="text-slate-400  list-none mb-2">Share Location</li>
            <li className="text-slate-400 list-none mb-2">Orders Tracking</li>
            <li className="text-slate-400 list-none mb-2">SizeGuide</li>
            <li className="text-slate-400 list-none mb-2">FAQs</li>
          </ul>
        </div>
        <div className="mb-5">
          <h3 className="text-slate-300 font-medium text-sm mb-2">Legal</h3>
          <ul>
            <li className="text-slate-400  list-none mb-2">
              Terms & conditions
            </li>
            <li className="text-slate-400 list-none mb-2">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
