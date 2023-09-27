import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import React from 'react'
type Props =
    {
        skillsLogo: Array<Array<string>>
    }

const MySkills = (props: Props) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div ref={ref} className='pt-20 pb-10 '>
            <h2 className='text-4xl font-bold text-teal-500 text-center  pb-10 pt-36  md:p-10'>Habilidades</h2>

            <div className='flex gap-2 flex-wrap justify-center'>{props.skillsLogo.map((skill, index) =>
            (
                <motion.div

                    key={skill[1]}
                    variants={
                        {
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, delay: index * 0.25 }}
                >

                    <img className=' w-36 h-36' src={skill[0]}></img>
                    <p className='font-bold text-center'>{skill[1]}</p>
                </motion.div>
            ))}
            </div>
        </motion.div >
    )
}

export default MySkills