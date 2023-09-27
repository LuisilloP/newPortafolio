import React from 'react'
import Skills from './Skills'

type Props =
    {
        image: string
        url: string
        name: string
        text: string
        skillsLogo: Array<string>
    }

const PageDesigning = (props: Props) => {
    const { image, url, name, text, skillsLogo } = props
    return (
        <div className=''>
            <a className='page-card relative flex items-end p-[1.5rem] bg-white transition-[0.4s ease-out] cursor-pointer shadow-md min-h-[11.5rem] sm:min-h-[24rem]'
                target='_blank'
                href={url} rel="noreferrer"
            >
                <img
                    loading='lazy'
                    className='image-card w-full h-full object-cover absolute top-0 left-0 '
                    src={image}
                >
                </img>
                <div className='info relative z-10 opacity-0 text-white translate-y-[30px] transition-[0.5s]'>
                    <h1 className=' text-xl pb-5 font-bold'>{name}</h1>
                    <Skills skillsLogo={skillsLogo} />
                </div>

            </a>
            <div className=' bg-[#171718] min-h-[9rem] rounded-r p-3 '>
                <h3 className='pb-2 text-[1.1rem] font-bold'>{name}</h3>
                <p className='text-[.8rem]'>{text}</p>

                <div className=' sm:hidden pt-5'>
                    <Skills skillsLogo={skillsLogo} />
                </div>


            </div>

        </div>
    )
}

export default PageDesigning