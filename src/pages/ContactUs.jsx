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
            <h3 className="contact-role">Rtr. President - Steve Anthony</h3>
            <p className="contact-number">+91 83691 04988</p>
        </div>

        <div className="contact-block">
            <h3 className="contact-role">Rtr. Secretary - Chirag Rajpurohit</h3>
            <p className="contact-number">+91 97664 50343 </p>
        </div>

        <div className="contact-block">
            <h3 className="contact-role">Rtr. Technical Head - Zebin Anil</h3>
            <p className="contact-number">+91 81089 33911</p>
        </div>

        <div className="club-contact">
            <div className="social-line">
            <FaInstagram className="icon" />
            <span> <a href='https://www.instagram.com/rotaract_crce?igsh=cncwZWpibnp2YmVs'> @rotaract_crce  </a> </span>
            </div>
            <div className="social-line">
            <FaEnvelope className="icon" />
            <span> <a href="mailto:rotaractcrce@gmail.com"> rotaractcrce@gmail.com  </a> </span>
            </div>
        </div>
        </div>

        <div className="contact-right">
            <div className="logo-map-container">
                <img src={logo} alt="Rotaract Logo" className="contact-logo" />
                <iframe
                className="map-embed"
                title="CRCE Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.9545896342954!2d72.81779557519717!3d19.04433818214515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9410830616d%3A0x111b63353dbbce01!2sFr.%20Conceicao%20Rodrigues%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1681388495467!5m2!1sen!2sin"
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
