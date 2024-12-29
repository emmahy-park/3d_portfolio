import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-black py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Emma</span>👋
            <br/>
            Welcome to my 3D portfolio!
        </h1>
    ),
    2: (
        <InfoBox 
            text="Please click below to learn more about me."
            link = "/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox 
            text=<> Worked on many projects <br/> and picked up many skills on the way
            </>
            link = "/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox 
            text="If you'd like to chat together, feel free to reach out! You're welcome anytime."
            link = "/contact"
            btnText="Let's talk"
        />
    ),
    5: (
        <h1 className='mx-5 font-bold text-center text-white'>
            Drag left/right to rotate!
        </h1>
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo