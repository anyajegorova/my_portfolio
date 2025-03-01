import React from "react";
import "./styles/About2.css";
import ProfileCard from "../components/ProfileCard";

const About = ({ anchorRef, handleProjectScroll }) => {

    return (
        <section className="about-section" ref={anchorRef}>
            <ProfileCard handleProjectScroll={handleProjectScroll} />
        </section>
    );
};

export default About;
