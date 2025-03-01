import React from "react";
import "./styles/About2.css";
import ProfileCard from "../components/ProfileCard";

const About = ({ anchorRef }) => {

    return (
        <section className="about-section" ref={anchorRef}>
            <ProfileCard />
        </section>
    );
};

export default About;
