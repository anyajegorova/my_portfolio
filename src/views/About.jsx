import './About.css';
import { useState, useEffect } from 'react';

const About = () => {

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
        </section>
    )
}

export default About;