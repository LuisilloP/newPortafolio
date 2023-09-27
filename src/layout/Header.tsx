import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon, BugAntIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'
const Header = () => {
    const urls = [['Home', 'Principal'], ['Stack', 'Habilidades'], ['Pages', 'Paginas'], ['Contact', 'Contacto']]
    const [open, setOpen] = useState(false);
    const [MouseMoveY, setMouseMoveY] = useState(0);

    useEffect(() => {

        console.log(MouseMoveY)
        const handleMouseMove = () => {
            setMouseMoveY(window.scrollY)
        }
        window.addEventListener('scroll', handleMouseMove)
    }, [])

    return (
        <div className={`shadow-md w-full fixed   md:px-10 px-7 top-0 left-0 z-50 ${MouseMoveY == 0 ? 'py-5 bg-neutral-950 ' : ' bg-[#1f2124] py-3'} ease-out duration-500 `}  >
            <div className=' flex md:flex items-center justify-between'>
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

                    <span className=' text-gray-50'>L Dev</span>
                </div>
                <div onClick={() => setOpen(!open)} className=' cursor-pointer md:hidden w-7 h-7 invert'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                <ul className={` ${MouseMoveY == 0 ? ' bg-neutral-950 ' : ' bg-[#1f2124] '} md:flex md:items-center font-special-550 text-special-095 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ease-out duration-500 ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {
                        urls.map((link, i) => (
                            <li key={i} className='md:ml-8 md:my-0 my-7 '>
                                <a href={link[0]} className=' text-gray-300 hover:text-gray-100 '>{link[1]}</a>
                            </li>))
                    }
                    <li className='md:ml-8 md:my-0 my-7 hover:text-teal-500 donwload-icon-special  '>
                        <a target='_blank'
                            className=' flex w-[10rem] h-[3rem] hover:opacity-[0.9] bg-gray-900 items-center px-3 text-sm gap-2 rounded text-white'
                            href='https://firebasestorage.googleapis.com/v0/b/imagespages.appspot.com/o/LuisArayaCV.pdf?alt=media&token=50d70acf-1ff0-41ef-9577-df58f064b18a' rel="noreferrer" >
                            <ArrowDownTrayIcon className='w-5 dowload-animation ' />
                            <p>Descarga mi cv
                            </p>
                        </a>
                    </li>
                </ul>
                {/* button */}
            </div>
        </div>
    );
};

export default Header;