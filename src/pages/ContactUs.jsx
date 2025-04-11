import React from 'react';
import './ContactUs.css';
import logo from '../assets/rtr-logo.png';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
return (
    <>
    <div className="contact-container">
        <div className="contact-left">
        <h1 className="contact-title">Rotaract Club of CRCE</h1>

        <div className="contact-block">
            <h3 className="contact-role">Rtr. President</h3>
            <p className="contact-number">+91 XXXXX XXXXX</p>
        </div>

        <div className="contact-block">
            <h3 className="contact-role">Rtr. Vice President</h3>
            <p className="contact-number">+91 XXXXX XXXXX</p>
        </div>

        <div className="contact-block">
            <h3 className="contact-role">Rtr. Secretary</h3>
            <p className="contact-number">+91 XXXXX XXXXX</p>
        </div>

        <div className="club-contact">
            <div className="social-line">
            <FaInstagram className="icon" />
            <span>@rotaractcrce</span>
            </div>
            <div className="social-line">
            <FaEnvelope className="icon" />
            <span>rotaractcrce@gmail.com</span>
            </div>
        </div>
        </div>

        <div className="contact-right">
        <div className="logo-map-container">
            <img src={logo} alt="Rotaract Logo" className="contact-logo" />
            <iframe
            className="map-embed"
            title="CRCE Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.5928694123646!2d72.82939537520884!3d19.082206152479973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90fce0f32d7%3A0x166e417eb36c6f6e!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering%20(CRCE)!5e0!3m2!1sen!2sin!4v1712746895281!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
        </div>
    </div>

    <div className="credit-box">
        <p>
        Created by <strong>AbuHamza</strong>, <strong>Arnav Ferreira</strong> and <strong>Zebin Anil</strong>
        </p>
    </div>
    </>
);
};

export default ContactUs;
