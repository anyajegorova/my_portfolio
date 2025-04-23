import SayIt from '../assets/say-it-project-review-image.webp';
import AvustavaEnkeli from '../assets/Avustava-enkeli-project-review-image.webp';

export const projects = [
    {
        name: 'Avustava Enkeli',
        image: AvustavaEnkeli,
        description: 'Avustava Enkeli is a web application offering professional cleaning and assistant services for households in Vantaa. The project aims to provide a user-friendly interface for customers to learn about the services offered, view pricing, and contact the company for bookings.',
        technologies: 'ReactJS, Vite, TypeScript, CSS',
        liveLink: 'https://avustava-enkeli.onrender.com/' 
    },
    {
        name: 'SayIt!',
        image: SayIt,
        description: 'Responsive full-stack MERN chat-like web application. Register, create a topic, say something and like what other users say. Users can also delete their own messages and topics, edit profile, and see liked messages.',
        technologies: 'ReactJS, Vite, CSS, NodeJS, Express, MongoDB',
        liveLink: 'https://sayit-el0l.onrender.com/'
    },
];
