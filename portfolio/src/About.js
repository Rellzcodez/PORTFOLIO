import React from 'react'
import './About.css'
import aboutimg from './Images/port4.jpg'
function About() {
  return (
    <div className='about component__space'>
        <div className='container'>
            <div className='row'>
                <div className='col__2'>
                    <img src={aboutimg} alt='' className='about__img' />
                </div>
                <div className='col__2'>
                    <h1 className='about__heading'>
                        About Me
                    </h1>
                    <div className='about__meta'>
                        <p className='about__text p__color'>
                        I'm a Front-end Developer who's passionate about solving problems with code.
                        I Have less than two years of experience building and maintaining responsive websites in the recruiting industry,
                        I’m familiar with technologies such as JavaScript, Typescript, React, CSS, SCSS, Framer Motion, styled-component, TailwindCSS, Nodejs.<br /> 
                        I am a passionate and determined developer whose interest is in using technology  to solve problems.
                        I'm also passionate about teaching and learning from others about tech.
                        I engage in a lot in interships to learn more and equipping myself with the right resources.
                        </p>
                        <p className='about__text p__color'>
                        I'm a Front-end Developer who's passionate about solving problems with code.
                        I Have less than two years of experience building and maintaining responsive websites in the recruiting industry,
                        I’m familiar with technologies such as JavaScript, Typescript, React, CSS, SCSS, Framer Motion, styled-component, TailwindCSS, Nodejs.<br /> 
                        I am a passionate and determined developer whose interest is in using technology  to solve problems.
                        I'm also passionate about teaching and learning from others about tech.
                        I engage in a lot in interships to learn more and equipping myself with the right resources.
                        </p>
                        <div className='about__button d__flex align__items__center'>
                            <a href='#'><button className='about btn pointer'> Download Cv</button></a> 
                            <a href='#'><button className='about btn pointer'> Hire Me</button></a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default About