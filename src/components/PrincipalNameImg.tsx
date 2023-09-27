import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
type Props =
    {
        image: string;
    }



const PrincipalNameImg = (props: Props) => {
    const variantsConfig = (directionX: number) => {
        return {
            hidden: { opacity: 0, x: directionX },
            visible: { opacity: 1, x: 0 }
        }
    }
    return (

        <div className='name-image-principal  py-20 flex flex-col-reverse items-center gap-5  px-5 md:px-10 lg:justify-center lg:flex-row-reverse'>
            <div className='lg:max-w-[45rem] pb-8'>
                <motion.div

                    variants={variantsConfig(50)}
                    initial="hidden"
                    animate={'visible'}
                    transition={{ duration: 0.8, delay: 0.25 }}
                >
                    <h1 className=' text-4xl sm:text-7xl font-bold text-center  text-teal-500'>Luis Patricio Araya</h1>
                    <br />
                    <h2 className=' text-4xl sm:text-3xl font-bold text-center '>Analista Programador</h2>
                    <br />
                    <p className='text-center text-[.9rem]'>Hola, Para que me conozcas mejor soy un joven proveniente de la cuarta región de Chile, me gusta el deporte,
                        la música y soy una persona muy curiosa. Lo que me ha llevado a aprender el como funcionan las cosas desde pequeño. El desarrollo de software es un área que siempre innova por lo cual me vi atraído y es una de las cosas que me desafían para estar aprendiendo cada día más y eso es lo que me gusta. Soy una persona muy determinada a lograr sus objetivos y muy leal con la gente que se lo merece.  </p>
                </motion.div>

                <div className='links flex flex-col gap-5 pt-5 md:flex-row items-center'>
                </div>
            </div>
            <motion.div
                variants={variantsConfig(-50)}
                initial="hidden"
                animate={'visible'}
                transition={{ duration: 0.8, delay: 0.25 }}
            >
                <img className=' max-w-[22rem] lg:max-w-[22rem] object-contain' src={props.image}></img>
            </motion.div>
        </div>
    )
}

export default PrincipalNameImg