import './About.css';
import { useState, useEffect } from 'react';

const About = ({ handleScroll }) => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className='about_section'>
            <div className='title_wrapper'>
                <h1>Anna Jegorova</h1>
                <h2>Software Developer</h2>
            </div>
            <div className='all_info_container'>


                <div className='info_wrapper'>
                    <h4 className={`${isVisible ? 'visible' : ''}`}>
                        I utilize the best design practices
                        for shaping holistic and modern interfaces
                    </h4>
                    <h4 className={`${isVisible ? 'visible' : ''}`}>
                        .. and turn them into code using latest
                        technologies
                    </h4>
                </div>
                <div className='technologies_container'>

                    <span className={`${isVisible ? 'visible' : ''}`}> &#123; </span>
                    <div className='technologies_wrapper'>
                        <h3 className={`${isVisible ? 'visible' : ''}`}>ReactJS</h3>
                        <h3 className={`${isVisible ? 'visible' : ''}`}>NodeJS</h3>
                        <h3 className={`${isVisible ? 'visible' : ''}`}>Express</h3>
                        <h3 className={`${isVisible ? 'visible' : ''}`}>JavaScript</h3>
                        <h3 className={`${isVisible ? 'visible' : ''}`}>MongoDB</h3>
                        <h3 className={`${isVisible ? 'visible' : ''}`}>PostgreSQL</h3>
                    </div>
                    <span className={`${isVisible ? 'visible' : ''}`}> &#125; </span>
                </div>

            </div>
            <button onClick={handleScroll} className={`${isVisible ? 'visible' : ''}`}>
                <svg
                    viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    stroke="#33333"><g id="SVGRepo_bgCarrier" strokeWidth="0">
                    </g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                        strokeLinejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M6 9L12 15L18 9"
                            stroke="#333333"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                        </path>
                    </g>
                </svg>
            </button>
        </section>
    )
}

export default About;