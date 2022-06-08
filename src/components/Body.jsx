import React from 'react'
import Images from '../Images/image.jpg'
import './Body.css'

const Body = () => {
  return (
    <div >

      <div>
         <img  className='img' src={Images} alt="Pic" />
         </div>

         <div className='container'>
           <div className='box'>
             <div className='content'>
         <h1> About me</h1>
         <p> I'm a Front-end Developer who's passionate about solving problems with code.<br /> I Have less than two years of experience building and maintaining<br /> responsive websites in the recruiting industry,<br /> I’m familiar with technologies such as JavaScript, Typescript, React, CSS, SCSS, Framer Motion, styled-component, TailwindCSS, Nodejs.<br /> I am a passionate and determined<br /> developer whose interest is in using technology to<br /> to solve problems.  I'm also passionate about teaching and learning from others about tech. I engage in a lot in interships to learn more and equipping myself with the right resources.</p>
         </div>
         </div>
         </div>
    </div>
    
  )
}

export default Body