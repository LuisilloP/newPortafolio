import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  image: string
}

const PrincipalNameImg = (props: Props) => {
  const variantsConfig = (directionX: number) => {
    return {
      hidden: { opacity: 0, x: directionX },
      visible: { opacity: 1, x: 0 },
    }
  }
  return (
    <div className='name-image-principal  py-20 flex flex-col-reverse items-center gap-5  px-5 md:px-10 lg:justify-center lg:flex-row-reverse'>
      <div className='lg:max-w-[45rem] pb-8'>
        <motion.div
          variants={variantsConfig(50)}
          initial='hidden'
          animate={'visible'}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <h1 className=' text-4xl sm:text-7xl font-bold text-center  text-teal-500'>
            Luis Patricio Araya
          </h1>
          <br />
          <h2 className=' text-4xl sm:text-3xl font-bold text-center '>Ingeniero Informático</h2>
          <br />
          <p className='text-center text-[.9rem]'>
            Actualmente soy egresado de la carrera Ingeniería Informática y poseo un titulo técnico
            de Analista Programador, me encuentro trabajando de manera independiente haciendo
            asesoramiento, mantenimiento de equipos y desarrollo de software para PYMES o
            trabajadores independientes mientras estoy en búsqueda de practica laboral para la
            carrera de Ingeniería Informática. <br /> <br /> En la casa de estudio se me destacaba
            por participar en las actividades de la carrera como dar una clase/taller de algoritmos
            hasta ser solicitado para acudir a eventos de la carrera. <br />
            <br />
            Estoy interesado en el área de desarrollo ya sea web o móvil, por la experiencia y ganas
            de aprender.{' '}
          </p>
        </motion.div>

        <div className='links flex flex-col gap-5 pt-5 md:flex-row items-center'></div>
      </div>
      <motion.div
        variants={variantsConfig(-50)}
        initial='hidden'
        animate={'visible'}
        transition={{ duration: 0.8, delay: 0.25 }}
      >
        <img
          className=' max-w-[22rem] lg:max-w-[22rem] rounded-md object-contain'
          src={props.image}
        ></img>
      </motion.div>
    </div>
  )
}

export default PrincipalNameImg
