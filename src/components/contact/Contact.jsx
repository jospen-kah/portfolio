import React from 'react'
import emailjs from '@emailjs/browser'

import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
e.preventDefault();

emailjs.sendForm('service_r807pxd', 'template_wslq2kq', form.current, '6wMmBOPnFssPX1WX9')
.then((result) => {
    console.log(result.text);
    console.log("message sent ")
}, (error) => {
    console.log(error.text);
});
};


return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>
<div className="container contact__container">
<div className="contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option__icon'/>
<h4>Email</h4>
<h5>jospenngumk@gmail.com</h5>
<a href='mailto:jospenngumk@gmail.com' rel="noreferrer" target='_blank'>send a
message</a>
</article>
<article className='contact__option'>
<AiOutlineLinkedin className='contact__option__icon'/>
<h4>LinkedIn</h4>
<h5>Profile</h5>
<a href='https://www.linkedin.com/in/kah-jospen-ngum-9a5501270'rel="noreferrer" target='_blank'
>Tape me on LinkedIn </a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<h4>Whatsapp</h4>
<h5>Direct message</h5>
<a href='https://web.whatsapp.com/send?phone=+237651335128'
rel="noreferrer" target='_blank'>Whatsapp me</a>
</article>
</div>
<form ref={form} onSubmit={sendEmail}>
<input type="text" name='Full name' placeholder='Full name' required/>
<input type="email" name='Email' placeholder='Email' required/>
<textarea name="message" id="message" cols="30" rows="10"
placeholder='your message' required></textarea>
<button type="submit" className='btn btn-primary'>send message</button>
</form>
</div>
</section>
)
}
export default Contact