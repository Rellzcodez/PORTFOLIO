import React from 'react'
import './Contact.css'
import contactimg from './Images/port2.jpg'
function Contact() {
  return (
    <div className=' contact component__space' id='Contact'>
        <div className='row'>
            <div className='col__2'>
                <div className='contact__box'>
                    <div className='contact__meta'>
                        <h1 className='hire__text'> Hire Me.</h1>
                        <p className='hire__text white'> I'm available for freelance work. Connect with me via phone:</p>
                        <p className='hire__text white'><strong>08105612052</strong> or email <strong>adeyemiodunayo@gmail.com</strong></p>
                    </div>
                    <div className='input__box'>
                        <input type='text' className='contact name' placeholder='Your name *' required='required' />
                        <input type='text' className='contact email' placeholder='Your Email *' required='required' />
                        <input type='text' className='contact subject' placeholder='Write a Subject'required='required' />
                        <textarea name='message' id='message' placeholder='Write Your Message' required='required' ></textarea>
                       <a href='odunayoadeyemi21@gmail.com'>
                        <button className='btn contact pointer' type='submit' formAction='' formTarget='_blank' formMethod='post '> Submit</button>
                        </a>
                    </div>
                </div>
            </div>
            <div className='col__2'>
                <img src={contactimg} alt='' className='contact__img' />
            </div>
        </div>

    </div>
  )
}

export default Contact