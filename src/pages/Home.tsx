import React, { useState } from 'react'
// IMAGES
import { imagesImport } from '../components/imagesImport'
import meme from '../assets/meme.webp'

// COMPONENTS
import PageDesigning from '../components/PageDesigning'
import FormContact from '../components/FormContact'
import MySkills from '../components/MySkills'
import PrincipalNameImg from '../components/PrincipalNameImg'
import MyPages from '../components/MyPages'

const Home = () => {

    // Importa las imagenes de una funcion especial- 
    const { LuisDev, reactSvg, typescript, cypress, cssSvg, node,
        tailwind, html, javascript, mongo, mysql, vite, firebase, github, sass, materialUi, nextjs, php, laravel, Ccharp } = imagesImport()
    return (

        <div className='Home pt-10  text-white bg-[#1f2124] '>
            <section id='Home' className=' py-10 md:px-10 clip-path-special bg-neutral-950 '>
                <PrincipalNameImg image={LuisDev} />
            </section>

            <section id="Pages" className='py-10'>
                <MyPages />
            </section>
            <section className='Skills  md:px-10   clip-path-special-invert-movile md: clip-path-special-invert bg-neutral-950 '>
                <MySkills skillsLogo={[[html, 'HTML'], [javascript, 'Javascript'], [typescript, 'Typescript'], [php, 'PHP'], [Ccharp, 'C#'], [reactSvg, 'React'], [laravel, 'Laravel'],
                [node, 'NodeJS'], [vite, 'Vite'], [cssSvg, 'CSS'],
                [tailwind, 'Tailwind'], [sass, 'Sass'], [materialUi, 'Material Ui'], [mysql, 'MYSQL'], [mongo, 'MongoDB'], [firebase, 'Firebase'], [github, 'Github'], [nextjs, 'NextJs'],
                [cypress, 'Cypress']]} />
            </section>
            <section id='Contact' className='px-5 py-5 '>
                <div className=' max-w-[60rem] m-auto'>
                    <h2 className='text-4xl text-teal-400 font-bold text-center pb-5'>Contacto</h2>
                    <FormContact></FormContact>
                </div>
            </section>
            <section>

                <div className=' flex justify-center'>
                    <img className='w-[30rem] p-5 rounded' src={meme}></img>
                </div>
            </section>

        </div>

    )
}


export default Home

