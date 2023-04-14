import React from 'react'

type Props =
    {
        image: string
        url: string
        name: string
        text: string
    }

const PageDesigning = (props: Props) => {
    const { image, url, name, text } = props
    return (
        <a className='page-card relative flex items-end p-[1.5rem] bg-white transition-[0.4s ease-out] cursor-pointer shadow-md rounded sm:min-h-[20rem]'
            target='_blank'
            href={url} rel="noreferrer"
        >
            <img
                loading='lazy'
                className='image-card w-full h-full object-cover absolute top-0 left-0 rounded'
                src={image}
            >
            </img>
            <div className='info relative z-10 opacity-0 text-white translate-y-[30px] transition-[0.5s]'>
                <h1 className=' text-xl pb-5'>{name}</h1>
                <p className='text-[.9rem]'>{text} </p>
            </div>
        </a>
    )
}

export default PageDesigning