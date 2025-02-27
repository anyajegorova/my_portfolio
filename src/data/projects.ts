import SayIt from '../assets/sayit_screenshot2.png';
import GPT from '../assets/gpt_copy.png';
import SpaceX from '../assets/spacex_api.png';
import TastyBites from '../assets/tastybites_design.png';
import CatStore from '../assets/cat_store.png';
import GymExercisePlanner from '../assets/Gym_exercise_planner.png';

export const projects = [
    {
        name: 'SayIt!',
        image: SayIt,
        description: 'Responsive full-stack MERN chat-like web application. Register, create a topic, say something and like what other users say.',
        gitHubLink: 'https://github.com/anyajegorova/Sayit.git'
    },
    {
        name: 'Another ChatGPT',
        image: GPT,
        description: 'A web application design of ChatGPT using OpenAI API, ReactJS, NodeJS and Express. Chat with AI and get responses in real-time.',
        gitHubLink: 'https://github.com/anyajegorova/another_chatgpt.git'
    },
    {
        name: 'SpaceX Capsules',
        image: SpaceX,
        description: 'A web application using SpaceX API for mapping SpaceX capsules information into Ag-Grid-React table.',
        gitHubLink: 'https://github.com/anyajegorova/spaceX.git'
    },
    {
        name: 'Gym Exercise Planner',
        image: GymExercisePlanner,
        description: 'A full-stack application for planning gym exercises with Google authentication using Java Spring Boot and PostgreSQL database. Users can view exercises and add them to their workout plan. Admin can also delete exercises.',
        gitHubLink: 'https://github.com/anyajegorova/Gym_exercise_planner.git'
    },
    {
        name: 'TastyBites',
        image: TastyBites,
        description: 'A UI design for a recipe website using Figma'
    },
    {
        name: 'CatStore',
        image: CatStore,
        description: 'A UI design for a cat online store using Figma.'
    }
];
