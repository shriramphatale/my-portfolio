import { useState } from "react";
import { Menu, X } from "lucide-react";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('Home')
    const navItems = [
        {
            label:'Home',
            id:'Home'
        },
        {
            label:'About',
            id:'About'
        },
        {
            label:'Projects',
            id:'Project'
        },
        {
            label:'Contact',
            id:'Contact'
        }
    ];

    return (
        <nav className="w-full fixed top-0 left-0 bg-transparent backdrop-blur-2xl  text-white z-50">
            <div className="flex justify-between items-center px-5 py-3">
                <h1 className="text-3xl font-bold">Dev <span className="text-red-500">/</span></h1>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setOpen(true)}>
                    <Menu size={28} />
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-10 text-lg font-medium text-white">
                    {navItems.map((item) => (
                        <Link key={item.label}
                            to={item.id}
                            smooth={true}
                            duration={300}
                            onClick={() => { setActive(item.label) }}
                            className={`hover:text-red-500 cursor-pointer transition duration-300
                            ${active === item.label ? "text-red-500" : "text-white"}`}>
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <div
                className={`fixed top-0 left-0 h-screen w-full bg-black text-white z-50 transform 
                ${open ? "translate-x-0" : "-translate-x-full"} 
                transition-transform duration-300 ease-in-out`}>

                <div className="flex fixed w-full justify-end items-center px-5  py-4 ">
                    <button onClick={() => setOpen(false)}>
                        <X size={28} />
                    </button>
                </div>

                <div className="flex flex-col justify-center items-center gap-6 text-xl h-full px-6">
                    {navItems.map((item) => (
                        <Link key={item.label}
                            to={item.id}
                            duration={300}
                            smooth={true} 
                            onClick={() => {
                            setActive(item.label)
                            setOpen(false)}
                            }

                            className={`hover:text-red-500 cursor-pointer transition duration-300
                            ${active === item.label ? "text-red-500" : "text-white"}`}>
                            {item.label}
                        </Link>
                    ))}

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
