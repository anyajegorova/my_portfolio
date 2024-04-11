import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = ({anchorRef}) => {
    const form = useRef();

    const handleClick = (event) => {
        event.preventDefault();
        emailjs
            .sendForm(
                'service_ivkah3m',
                'template_fbfq4dm',
                form.current,
                'lMaEZmQbs-phf2SCI')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            },
                (error) => {
                    console.error(error.text);
                }
            )
    }
    return (
        <section className='contact_section'>
            <form className='contact_form' ref={form} onSubmit={handleClick}>
                <h2>Contact me now!</h2>
                <label htmlFor="user_name">Name</label>
                <input type='text' name='user_name' placeholder='Name' />
                <label htmlFor="user_email">Email</label>
                <input type='email' name='user_email' placeholder='Email' />
                <label htmlFor="message">Message</label>
                <textarea placeholder='Message' name='message' ref={anchorRef}></textarea>
                <button type='submit'>Send</button>
            </form>

        </section>
    )
}

export default Contact;