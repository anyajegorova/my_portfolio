import React from "react";
import "./styles/About2.css";
import ProfileCard from "../components/ProfileCard";

interface AboutProps {
    anchorRef: React.RefObject<HTMLElement>;
    handleProjectScroll: () => void;
}

const About: React.FC<AboutProps> = ({ handleProjectScroll }) => {

    return (
        <section className="about-section">
            <ProfileCard handleProjectScroll={handleProjectScroll} />
        </section>
    );
};

export default About;
