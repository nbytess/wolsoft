"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XCircleIcon } from "@heroicons/react/24/solid";

import Image from 'next/image';
import logo from '../components/assets/logo.png';
import HeaderLink from "./HeaderLink";

const headerLinks = [
    {
        title: "Strona główna",
        path: "#"
    },
    {
        title: "Oferta",
        path: "#offer"
    },
    {
        title: "Kontakt",
        path: "#contact"
    }
]

const Header = () => {
    const [headerOpen, setHeaderOpen] = useState(false);
    return (
        <nav className="border-gray-200 fixed top-0 left-0 right-0  z-10 w-full bg-[#1c1c1c] bg-opacity-95 navlinks">
            <div className="flex flex-wrap items-center justify-between mx-auto px-16">
                <Link href={"#"} className="lg:pl-32"><Image src={logo} alt="logo" height={150} width={150}/></Link>
                <div className="mobile-menu block md:hidden lg:hidden">
                    {
                        !headerOpen ? (
                            <button onClick={() => setHeaderOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><Bars3Icon className="h-5 w-5" /></button>
                        ) : (
                            <button onClick={() => setHeaderOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"><XCircleIcon className="h-5 w-5" /></button>
                        )
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="header">
                    <ul className="flex p-4 md:p-0 lg:pr-32 md:flex-row md:space-x-8 mt-0">
                        {
                            headerLinks.map((link, index) => (
                                <li key={index}>
                                    <HeaderLink href={link.path} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {headerOpen ? <ul className='flex flex-col py-4 items-center lg:hidden md:hidden navlinks'>{headerLinks.map((link, index) => 
        (<li key={index}><Link onClick={() => setHeaderOpen(false)} href={link.path} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">{link.title}</Link></li>)
        )}
    </ul> : null}
        </nav>
    );
};

export default Header;