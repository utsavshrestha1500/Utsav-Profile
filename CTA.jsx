import React from 'react'
import CV from '../../assets/cv.pdf'
import './cta.css'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} downlaod className='btn'>Download CV</a>
        <a href='#about' className='btn btn-primary'> Let's go</a>
    </div>
  )
}

export default CTA