import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
return (
    <div className="about-container">
    <h1 className="about-title">About Rotaract CRCE</h1>

    <div className="about-sections">
        {/* Left Section */}
        <div className="about-left">
        <div className="info-box">
            <h2>What is Rotaract CRCE?</h2>
            <p>
            Rotaract CRCE is a youth-driven club under the umbrella of Rotary International,
            focused on personal development, leadership, and service to society through
            impactful projects and vibrant community engagement.
            </p>
        </div>

        <div className="info-box">
            <h2>Our Motto</h2>
            <p>
            "Fellowship Through Service" — We aim to create responsible leaders by providing
            a platform where service meets learning, and friendships grow through action.
            </p>
        </div>
        </div>

        {/* Right Section (Events Bento) */}
        <div className="about-right">
        <div className="events-box">
            <h2>Our Events</h2>
            <div className="event-grid">
            <div className="event-card">
                <h3>Installation</h3>
                <p>
                An official event that inducts the new Rotaract CRCE team, celebrates past milestones,
                and sets future goals.
                </p>
            </div>
            <div className="event-card">
                <h3>Footslog</h3>
                <p>
                The annual trek that promotes adventure, bonding, and a love for nature
                among our club members.
                </p>
            </div>
            <div className="event-card">
                <h3>Heart and Soul Run</h3>
                <p>
                Our flagship charity marathon that raises awareness and funds for social causes,
                uniting people through fitness and purpose.
                </p>
            </div>
            <div className="event-card">
                <h3>Joy of Giving</h3>
                <p>
                A touching visit to Father Agnel Ashram where members bring joy to children
                through heartfelt interactions and activities.
                </p>
            </div>
            </div>
        </div>
        </div>
    </div> 
    <div className="credit-box">
        <p>
        Created by <strong>AbuHamza</strong>, <strong>Arnav Ferreira</strong> and <strong>Zebin Anil</strong>
        </p>
    </div>
    </div>
);
};

export default AboutUs;
