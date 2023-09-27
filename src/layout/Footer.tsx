import React from 'react'



const footer = () => {
    const urls = [['Home', 'Principal'], ['Stack', 'Habilidades'], ['Pages', 'Paginas'], ['Contact', 'Contacto']]
    return (
        <footer className=' bg-neutral-900 min-h-[5rem]'>

            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a className='flex gap-5 items-center text-teal-500 z-40'>
                        <img className='w-9 shadow-lg' ></img>
                        LuisDev Portafolio
                    </a>
                    <ul className="flex gap-5 flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 pt-5 md:pt-0">
                        {urls.map(value => (
                            <li className='' key={value[0] + 1}>
                                <a className=' duration-150 ease-out hover:ease-in px-12 lg:px-0 transition cursor-pointer hover:text-cyan-600 ' onClick={() => {
                                    document.querySelector(`#${value[0]}`)?.scrollIntoView({ behavior: 'smooth' })
                                    const hamburger = document.querySelector('#hamburger') as HTMLInputElement
                                    hamburger.checked = false
                                }}>{value[1]} </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>

        </footer>
    )
}

export default footer