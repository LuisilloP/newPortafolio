import React from 'react'

type Props = {
    skillsLogo: Array<string>
}
const Skills = (props: Props) => {

    return (
        <>
            <p className='pb-2 font-bold'>Skills</p>
            <div className='flex gap-2 flex-wrap'>{props.skillsLogo.map((skill) =>
            (
                <img className=' w-8 ' key={skill} src={skill}></img>
            ))}</div>
        </>
    )
}

export default Skills

