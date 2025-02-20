import React from 'react'
import './styles/Technologies.css'
import TechnologyChip from './TechnologyChip'
import HTML5Logo from '../assets/logos/HTML5.svg'
import CSS3Logo from '../assets/logos/CSS3.svg'
import JavaScript from '../assets/logos/JavaScript.png'
import ReactLogo from '../assets/logos/React.svg'
import ReactNative from '../assets/logos/React-native.svg'
import TypeScript from '../assets/logos/typescript.png'
import NodeJS from '../assets/logos/nodejs.svg'
import PostgreSQL from '../assets/logos/postgresql.svg'
import MongoDB from '../assets/logos/MongoDB.png'
import MaterialUI from '../assets/logos/MaterialUI.svg'
import AntDesign from '../assets/logos/AntDesign.svg'
import Git from '../assets/logos/Git.png'
import Github from '../assets/logos/GitHub.png'
import Firebase from '../assets/logos/Firebase.png'
import Kinsta from '../assets/logos/Kinsta.png'
import ReactRouterDOM from '../assets/logos/ReactRouterDOM.png'
import Vite from '../assets/logos/Vite.svg'
import Pug from '../assets/logos/Pug.png'
import Mocha from '../assets/logos/Mocha.svg'
import Chai from '../assets/logos/Chai.png'
import JWTLogo from '../assets/logos/JWT.png'
import Heroku from '../assets/logos/Heroku.png'
import Jest from '../assets/logos/Jest.png'
import Slack from '../assets/logos/Slack.png'
import Jira from '../assets/logos/Jira.png'
import Figma from '../assets/logos/Figma.png'

const technologies = [
  { image: HTML5Logo, text: 'HTML5' },
  { image: CSS3Logo, text: 'CSS3' },
  { image: JavaScript, text: 'JavaScript' },
  { image: ReactLogo, text: 'React.js' },
  { image: ReactNative, text: 'React Native' },
  { image: TypeScript, text: 'TypeScript' },
  { image: NodeJS, text: 'Node.js' },
  { image: PostgreSQL, text: 'PostgreSQL' },
  { image: MongoDB, text: 'MongoDB' },
  { image: MaterialUI, text: 'Material UI' },
  { image: AntDesign, text: 'Ant Design' },
  { image: Git, text: 'Git' },
  { image: Github, text: 'Github' },
  { image: Firebase, text: 'Firebase' },
  { image: Kinsta, text: 'Kinsta' },
  { image: ReactRouterDOM, text: 'React Router DOM' },
  { image: Vite, text: 'Vite' },
  { image: Pug, text: 'Pug' },
  { image: Mocha, text: 'Mocha' },
  { image: Chai, text: 'Chai' },
  { image: JWTLogo, text: 'JWT' },
  { image: Heroku, text: 'Heroku' },
  { image: Jest, text: 'Jest' },
  { image: Slack, text: 'Slack' },
  { image: Jira, text: 'Jira' },
  { image: Figma, text: 'Figma' },
]

interface TechnologiesProps {
  isVisible: boolean;
}

const Technologies: React.FC<TechnologiesProps> = ({ isVisible }) => {
  return (
    <div className="technologies_container">
      {technologies.map((tech, index) => (
        <TechnologyChip
          key={tech.text}
          image={tech.image}
          text={tech.text}
          className={isVisible ? 'visible' : ''}
          style={{ transitionDelay: `${1.5 + index * 0.2 - (index * index * 0.003)}s` }}
        />
      ))}
    </div>
  )
}

export default Technologies
