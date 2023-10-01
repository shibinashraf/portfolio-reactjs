import logo from "../rb.png"
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
export default function Nav() {
    const [mobNav,setMobNav] = useState(false);
  return (

    <div className="p-8 items-center   h-[5rem] w-screen flex text-white md:justify-between">
        <img className="flex  h-14 w-14"  src={logo} alt=""></img>
        <ul className=" hidden md:flex gap-12 mr-[7rem]">
            <li className="hover:text-red-600 ">About</li>
            <li className="hover:text-red-600 ">Skills</li>
            <li className="hover:text-red-600 ">Projects</li>
            <li className="hover:text-red-600 ">Certifications</li>
            <li className="hover:text-red-600 ">Education</li>
            <li className="hover:text-red-600 ">Contact Me</li>
               
</ul>
</div>
 
  );
}
