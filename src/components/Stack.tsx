import React from 'react'

type Props =
    {
        title: string,
        subText: string,
        image: string,
    }

const Stack = (props: Props) => {
    const { title, subText, image } = props
    return (
        <div className='image-text-stack flex flex-col items-center py-10'>
            <img src={image} className='max-w-[10rem]'></img>
            <hr className='h-px my-3'></hr>
            <h1 className='text-2xl'>{title}</h1>
            <hr className='h-px my-3 bg-gray-200 border-0 dark:bg-gray-700 w-[10rem]'></hr>
            <p>{subText}</p>
        </div>
    )
}

export default Stack