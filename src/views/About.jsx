import './About.css';

const About = () => {
    return (
        <section className='about_section'>
            <div className='title_wrapper'>
                <h1>Anna Jegorova</h1>
                <h2>Software Developer</h2>
            </div>
            <div className='info_wrapper'>
                <h4>
                    I utilize the best design practices
                    for shaping holistic and modern interfaces
                </h4>
                <h4>
                    .. and turn them into code using latest
                    technologies
                </h4>
            </div>
            <div className='technologies_wrapper'>
                <h3>ReactJS</h3>
                <h3>NodeJS</h3>
                <h3>Express</h3>
                <h3>JavaScript</h3>
                <h3>MongoDB</h3>
                <h3>PostgreSQL</h3>
            </div>
        </section>
    )
}

export default About;