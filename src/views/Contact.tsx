import React from 'react';
import './styles/Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = ({ anchorRef }) => {
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
                <h2>Let's Get in Touch.</h2>
                <label htmlFor="user_name">Name</label>
                <input type='text' name='user_name' placeholder='Name' />
                <label htmlFor="user_email">Email</label>
                <input type='email' name='user_email' placeholder='Email' />
                <label htmlFor="message">Message</label>
                <textarea placeholder='Message' name='message' ref={anchorRef}></textarea>
                <button type='submit'>Send</button>
            </form>
            <div className='cite_container'>
                <svg fill="#ffffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff">
                    <g id="SVGRepo_bgCarrier"
                        strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z">
                        </path>
                    </g>
                </svg>
                <p>
                    <cite>It is easy to make things hard, but hard to make them easy. </cite>
                    - Rutger Bregman, Humankind: A Hopeful History
                </p>
            </div>


        </section>
    )
}

export default Contact;