import React from 'react'
// IMAGES
import { imagesImport } from '../components/imagesImport'
import meme from '../assets/meme.webp'
import dowloadSvg from '../assets/dowload.svg'
// COMPONENTS
import Stack from '../components/Stack'
import Skills from '../components/Skills'
import { LinkButton } from '../components/LinkButton'
// interface 
import { ImageDistanceContent } from '../Interfaces'
import PageDesigning from '../components/PageDesigning'
import FormContact from '../components/FormContact'
const Home = () => {
    const { LuisDev, fronent, backend, testing, reactSvg, typescript, cypress, cssSvg, node,
        tailwind, html, javascript, mongo, mysql, vite, firebase, github, sass } = imagesImport()
    const circleSkills: ImageDistanceContent[] =
        [
            { name: 'react', image: String(reactSvg), distance: 'exelent' },
            { name: 'css', image: String(cssSvg), distance: 'exelent' },
            { name: 'html', image: String(html), distance: 'exelent' },
            { name: 'javascript', image: String(javascript), distance: 'exelent' },
            { name: 'typescript', image: String(typescript), distance: 'high' },
            { name: 'nodejs', image: String(node), distance: 'high' },
            { name: 'mongo', image: String(mongo), distance: 'high' },
            { name: 'tailwind', image: String(tailwind), distance: 'high' },
            { name: 'mysql', image: String(mysql), distance: 'high' },
            { name: 'vite', image: String(vite), distance: 'high' },
            { name: 'sass', image: String(sass), distance: 'high' },
            { name: 'github', image: String(github), distance: 'high' },
            { name: 'cypress', image: String(cypress), distance: 'good' },
            { name: 'firebase', image: String(firebase), distance: 'good' },
        ]

    return (

        <div className='Home pt-10'>
            <section id='Home' className=' py-10 px-10'>
                <div className='name-image-principal flex flex-col items-center gap-5  px-10 lg:justify-center lg:flex-row'>
                    <img className=' max-w-[18rem] lg:max-w-[24rem] object-contain' src={LuisDev}></img>
                    <div>
                        <h1 className=' text-5xl font-bold text-center'><span className=' text-teal-500'>Luis Araya</span> Desarrollador Full Stack</h1>
                        <br />
                        <p className='text-center'>Soy titulado como analista programador y congele mi carrea como ingeniero informático para dedicarme a la programación de lleno. Tengo experiencia trabajando en equipo e implementando soluciones.</p>
                        <div className='links flex pt-5'>
                            <LinkButton text='GitHub!!' color='bg-slate-900' url='https://github.com/LuisilloP' svg='github' ></LinkButton>
                            <LinkButton text='Linkedin!!' color='bg-blue-700' url='https://linkedin.com/in/luis-araya-programer' svg='linkedin' ></LinkButton>
                            <a target='_blank'
                                className=' flex bg-slate-950 items-center px-3 text-sm gap-2 rounded-lg text-white'
                                href='https://firebasestorage.googleapis.com/v0/b/imagespages.appspot.com/o/LuisArayaCV.pdf?alt=media&token=50d70acf-1ff0-41ef-9577-df58f064b18a' rel="noreferrer" >
                                <img className='w-8' src={dowloadSvg}></img>
                                <p>Mira mi CV!!!</p>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            <section id='Stack' className='full-stack  bg-zinc-100 min-h-[20rem] py-5 '>
                <h1 className='text-4xl font-bold text-teal-500 text-center '>Principal Stack</h1>
                <div className='grid  md:grid-cols-3 px-5'>
                    <Stack title='FRONTEND' subText='HTML CSS SCSS TAILWIND JAVASCRIPT TYPESCRIPT REACT' image={fronent} ></Stack>
                    <Stack title='BACKEND' subText='NODEJS EXPRESS MONGODB MYSQL' image={backend} ></Stack>
                    <Stack title='TESTING' subText='CYPRESS' image={testing} ></Stack>
                </div>
                <div>
                    <h1 className='text-4xl font-bold text-teal-500 text-center pb-8'>Habilidades y Herramientas</h1>
                    <div className='skills flex justify-center items-center h-[90vmin] '>
                        <Skills imageAndDistance={circleSkills}></Skills>
                    </div>
                </div>

            </section>
            <section id="Pages" className='py-5'>
                <h1 className='text-4xl font-bold text-teal-500 text-center pb-5'>Paginas </h1>
                <div className='container-pages min-h-[20rem] gap-5 grid lg:grid-cols-3 px-5 '>
                    <PageDesigning
                        name='Propiedades( En construccion 🧱)'
                        text='Esta página posee un backend el cual se encarga de manejar usuarios y un CRUD para las propiedades de este mismo.
                        Fue diseñada con react, javascript, sass, vite, nodejs, express, materialUi y github.
                        '
                        url="https://propiedadesluisprueba.netlify.app/"
                        image='https://firebasestorage.googleapis.com/v0/b/portafolioluisdev.appspot.com/o/PropertyPage.png?alt=media&token=66251203-2725-4f83-bf54-303290acc40b' ></PageDesigning>

                    <PageDesigning
                        name='Api gatos'
                        text='El desarrollo de esta pagina se baso en probar apis externas y conectarlas.Una que genera nombres aleatorios y otra que genera imagenes de gatos aleatorios que tambien puede ser ingresado el nombre.
                        Fue diseñada con react, typescript, tailwind, vite, github.
                        '
                        url="https://apigatosluisdev.netlify.app/"
                        image='https://firebasestorage.googleapis.com/v0/b/portafolioluisdev.appspot.com/o/apigatos.png?alt=media&token=b6cc9096-d7cd-4a4c-922b-270672de26fa' ></PageDesigning>
                    <PageDesigning
                        name='SkillShot'
                        text='Esta pagina fue desarollada por un equipo de 5 integrantes en el cual fui desarrollador principal 
                        Fue diseñada con react, typescript, scss, vite, github y una api de correos.
                        '
                        url="https://skillshot.netlify.app/"
                        image='https://firebasestorage.googleapis.com/v0/b/portafolioluisdev.appspot.com/o/SkillShot%20(1).png?alt=media&token=a39a5b2e-7cf7-46a1-894e-3a0000e0b562' ></PageDesigning>
                </div>
            </section>
            <section id='Contact' className='px-5 py-5'>
                <h1 className='text-4xl font-bold text-teal-500 text-center pb-5'>Contacto </h1>
                <FormContact></FormContact>
            </section>
            <section>
                <h1 className='text-4xl font-bold text-teal-500 text-center pb-5'> Y ya sabes </h1>
                <div className=' flex justify-center'>
                    <img className='w-[30rem] p-5 rounded' src={meme}></img>
                </div>

            </section>
        </div>

    )
}

export default Home

