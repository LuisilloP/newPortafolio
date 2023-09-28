import React from 'react'
import PageDesigning from './PageDesigning'
import { imagesImport } from './imagesImport'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const MyPages = () => {

    const { reactSvg, typescript, node,
        tailwind, javascript, mongo, vite, firebase, github, sass, materialUi, nextjs } = imagesImport()
    const data =
        [
            {
                name: 'PropiedadesLuisDev',
                text: 'Esta página es una pagina en la cual su función es para la venta de propiedades, esta posee un backend que se encarga de la gestión de las propiedades, creación, eliminación, modificación y lectura de estos mismos. además de un login para que el administrador tenga acceso a estas funciones.',
                logos: [javascript, reactSvg, mongo, sass, materialUi, vite, node, github],
                url: 'https://properties-luis-dev-rasp.vercel.app/',
                image: 'https://firebasestorage.googleapis.com/v0/b/portafolioluisdev.appspot.com/o/PropertyWP.webp?alt=media&token=a613ed4d-0a90-4e33-92a5-5e1a5c4bebb2',
            },
            {
                name: 'Api gatos',
                text: 'La api de gatos es una muestra de cómo podría manejar dos API externas, en este caso se estaría utilizando para la generación automática de nombres y una generadora de imágenes de gatos a partir de un nombre, lo que dejaría dentro de la imagen de un gato el nombre seleccionado.',
                logos: [typescript, reactSvg, tailwind, vite, github],
                url: 'https://apigatosluisdev.netlify.app/',
                image: 'https://firebasestorage.googleapis.com/v0/b/portafolioluisdev.appspot.com/o/apiGatos.webp?alt=media&token=1cbf3c58-417d-44d7-955c-5b1073256024',
            },
            {
                name: 'SkillShot',
                text: 'Esta pagina fue desarrollada gracias a un proyecto de Coderhouse, esta experiencia consto de un equipo de 5 integrantes que se conformaban de 2 programadores, 2 diseñadores y una persona de marketing encargada de ceo. También destaco que fui la persona que se puso a cargo y de dar mas ideas para el desarrollo final de la página',
                logos: [typescript, reactSvg, sass, vite, github],
                url: 'https://skillshot.netlify.app/',
                image: 'https://firebasestorage.googleapis.com/v0/b/portafolioluisdev.appspot.com/o/SkillShot.webp?alt=media&token=718ddd1d-cf02-4c28-acee-68dc9cd9f779',
            },
            {
                name: 'Boxing Club',
                text: 'Boxing club fue un proyecto de manera voluntaria para el club al cual estoy asistiendo, es una SPA para mostrar la historia, tipos de golpes, imágenes, horario y ocupa un mapa con leaflet para la ubicación de este mismow.',
                logos: [typescript, reactSvg, nextjs, tailwind, firebase, github],
                url: 'https://boxing-club-ovalle.vercel.app/',
                image: 'https://firebasestorage.googleapis.com/v0/b/portafolioluisdev.appspot.com/o/BoxingClub.webp?alt=media&token=42ce5cf1-fa61-4ac8-8ce2-825a8646d360',
            },
        ]
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const divisible = (number: number) => {
        const rest = number % 2 == 0 ? true : false;
        return rest ? -50 : 50
    }
    return (
        <div className='max-w-[1440px] m-auto'>
            <h2 className='text-5xl font-bold text-teal-400 text-center pb-10'>Proyectos </h2>

            <motion.div
                className='container-pages min-h-[20rem] gap-5 grid lg:grid-cols-2 px-5 '
                ref={ref}
            >
                {data.map((values, index) =>
                (

                    <motion.div
                        ref={ref}
                        key={index}
                        variants={
                            {
                                hidden: { opacity: 0, x: divisible(index) },
                                visible: { opacity: 1, x: 0 }
                            }}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        transition={{ duration: 0.6, delay: index * 0.4 }}>
                        <PageDesigning

                            name={values.name}
                            text={values.text}
                            skillsLogo={values.logos}
                            url={values.url}
                            image={values.image} />
                    </motion.div>
                ))}
            </motion.div>
        </div >
    )
}

export default MyPages