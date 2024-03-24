"use client"
import Logo from "./Logo";
import { Button } from "./ui/button";

import Link from "next/link";

const Nav = () => {
    let Links = [
        {
            name: "home",
            link: "/",
        },
        {
            name: "log in",
            link: "/Login",
        },
        {
            name: "menu",
            link: "/",
        },
    ];
  return (
      <div className="shadow-md w-full top-0 left-0 fixed z-100 ">
          <div className="md:flex md:justify-between md:items-center md:px-10 px-7 py-4 bg-080808">
            <div className=" w-10px h-10px ">
                <Logo />
            </div>
            <ul className="md:flex md:items-center">
                
                      {Links.map((link)=>(
                          <li key={link.name} className="md:ml-20 text-sm uppercase">
                          <a href={link.link} className="text-white hover:text-gray-400 duration-500">{link.name}</a>
                      </li>
                        ))}
                
                
                   
              </ul>
              <Link href="/Text">
                <Button className="bg-white">
                    <span className="font-semibold text-black">Start Chatting</span>
                    </Button></Link>

              </div>
          
    </div>
  )
}

export default Nav