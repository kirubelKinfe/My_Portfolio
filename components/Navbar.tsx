"use client"

import { Menu } from 'lucide-react'
import SideNav from './SideNav'
import { useState } from 'react'
const linkStyle = "text-sm lg:text-base text-[#130849] py-2 px-4 font-bold transition hover:text-blue-700 duration-300"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="fixed bg-white z-50 right-0 top-0 left-0 flex items-center justify-between px-5 sm:px-10 h-20 w-full shadow-md">
            <div className='flex items-center gap-3'>
                <Menu className='text-[#130849] block md:hidden' onClick={() => setMenuOpen(true)} />
                <a href="/" className="text-lg md:text-xl lg:text-xl text-[#130849] font-bold">
                    Kirubel.dev
                </a>
            </div>

            <ul className="items-center justify-between hidden md:flex">
                <li><a href="#home" className={linkStyle}>Home</a></li>
                <li><a href="#about" className={linkStyle}>About</a></li>
                <li><a href="#projects" className={linkStyle}>Projects</a></li>
                <li><a href="#contact" className={linkStyle}>Contact</a></li>
            </ul>

            <SideNav menuOpen={menuOpen} handleMenuClose={() => setMenuOpen(false)} />
        </nav>
    )
}

export default Navbar