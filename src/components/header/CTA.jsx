import React from 'react'
import cv from '.././../assets/cv.pdf'
const CTA = () => {
return (
<div className='cta'>

<a href="#contact" className='btn btn-primary'>Let's Talk</a>
<a href={cv} download className='btn'>Download CV</a>
</div>
)
}
export default CTA //this line indicates that this component can be imported and used everywhere in our application.