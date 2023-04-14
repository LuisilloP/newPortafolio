import React from 'react'
import { ImageDistanceContent } from '../Interfaces'
type Props =
    {
        imageAndDistance: ImageDistanceContent[]
    }

const Skills = (props: Props) => {
    const { imageAndDistance } = props
    return (
        <div>
            <div className='skills flex justify-center items-center h-[90vmin] '>
                <div className="bg-cyan-950 guia w-[calc(90vmin/1)] h-[calc(90vmin/1)] "><p className=' text-center pt-4 text-gray-50 font-bold'>Bien!</p></div>
                <div className="bg-sky-900 guia w-[calc(90vmin/1.5)] h-[calc(90vmin/1.5)] "><p className=' text-center pt-4 text-gray-50 font-bold'>Alto!!</p></div>
                <div className="bg-teal-600 guia w-[calc(90vmin/2.5)] h-[calc(90vmin/2.5)] flex items-center justify-center "><p className=' text-center  text-gray-50 font-bold'>Exelente!!!</p></div>
                {imageAndDistance.map((value) =>
                (
                    <div key={value.name} className={`cont-object z-30 content-${value.name} ${value.distance == 'good' ? 'w-[calc(90vmin/2)]' : value.distance == 'high' ? 'w-[calc(90vmin/3)]' : 'w-[calc(90vmin/6)]'}`}>
                        <img src={value.image} id={value.name} content={value.name} title={value.name} className='object-type z-30 w-[calc(90vmin/12)]'></img>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Skills