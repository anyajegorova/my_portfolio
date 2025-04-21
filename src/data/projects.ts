import SayIt from '../assets/say-it-project-review-image.png';
import GPT from '../assets/gpt_copy.png';
import SpaceX from '../assets/spacex_api.png';
import TastyBites from '../assets/tastybites_design.png';
import CatStore from '../assets/cat_store.png';
import GymExercisePlanner from '../assets/Gym_exercise_planner.png';
import AvustavaEnkeli from '../assets/Avustava-enkeli-project-review-image.png';

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
    // {
    //     name: 'Another ChatGPT',
    //     image: GPT,
    //     description: 'A chatbot web application that uses OpenAI API to generate responses. Users can chat with the bot and see the conversation history.',
    //     technologies: 'ReactJS, CSS, Open AI API, NodeJS, Express',
    //     gitHubLink: 'https://github.com/anyajegorova/another_chatgpt.git'
    // },
    // {
    //     name: 'SpaceX Capsules',
    //     image: SpaceX,
    //     description: 'A web application for showing SpaceX capsules information. Users can filter capsules, see detailed information about each capsule and export to CSV.',
    //     technologies: 'ReactJS, CSS, SpaceX API, Ag-Grid-React',
    //     gitHubLink: 'https://github.com/anyajegorova/spaceX.git'
    // },
    // {
    //     name: 'Gym Exercise Planner',
    //     image: GymExercisePlanner,
    //     description: 'A full-stack application for planning gym exercises with Google authentication. Users can view exercises and add them to their workout plan. Admin can also delete exercises.',
    //     technologies: 'Java Spring Boot, PostgreSQL, Google OAuth, HTML, Bootstrap',
    //     gitHubLink: 'https://github.com/anyajegorova/Gym_exercise_planner.git'
    // },
    // {
    //     name: 'TastyBites',
    //     image: TastyBites,
    //     description: 'A UI design for a recipe website',
    //     technologies: 'Figma'
    // },
    // {
    //     name: 'CatStore',
    //     image: CatStore,
    //     description: 'A UI design for a cat online store.',
    //     technologies: 'Figma'
    // }
];
