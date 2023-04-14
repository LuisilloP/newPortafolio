import React from 'react'
import briefcase from '../assets/briefcase.svg'
const Header = () => {
    const urls = [['Home', 'Principal'], ['Stack', 'Habilidades'], ['Pages', 'Paginas'], ['Contact', 'Contacto']]
    return (
        <header className=' fixed w-full font-bold  z-40'>
            <nav className='header sticky top-0 bg-neutral-900 shadow-md flex items-center justify-between px-8 py-02 font-montserrat  h-14' >
                <a className='flex gap-5 items-center text-teal-500 z-40'>
                    <img className='w-9 shadow-lg' src={briefcase}></img>
                    LuisDev Portafolio
                </a>
                <input type='checkbox' name='hamburger' id='hamburger' className='peer' hidden />
                <label htmlFor='hamburger' id='hamburger-label' className=' peer-checked:hamburger block relative z-40 p-6 -mr-6 cursor-pointer lg:hidden'>
                    <div aria-hidden='true' className='m-auto h-0.5 w-6 rounded bg-gray-700 transition duration-300' />
                    <div aria-hidden='true' className='m-auto mt-2 h-0.5 w-6 rounded bg-gray-700 transition duration-300' />
                </label>
                <div className='navigation-bar peer-checked:translate-x-0 fixed inset-0 w-[calc(100%-4.5rem)] translate-x-[-100%] bg-neutral-900  border-r shadow-xl transition duration-300 lg:border-r-0 lg:w-auto lg:static lg:shadow-none lg:translate-x-0'>
                    <div className='flex flex-col h-full justify-between lg:items-center lg:flex-row'>
                        <ul className='pt-32 md:text-[0.9rem] text-gray-300 space-y-8  lg:space-y-0 lg:flex lg:space-x-12 lg:pt-0'>
                            {urls.map(value => (
                                <li className='border-b  lg:border-none' key={value[0] + 1}>
                                    <a className=' duration-150 ease-out hover:ease-in px-12 lg:px-0 transition cursor-pointer hover:text-cyan-600 ' onClick={() => {
                                        document.querySelector(`#${value[0]}`)?.scrollIntoView({ behavior: 'smooth' })
                                        const hamburger = document.querySelector('#hamburger') as HTMLInputElement
                                        hamburger.checked = false
                                    }}>{value[1]} </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header