import React from 'react';
import './FormSummary.css';
import Navbar from './Navbar';

const FormSummary = ({ formData, postText, experienceText, selectedCards, onClose }) => {
const handleFinalSubmit = () => {
    console.log("Final application submitted:", {
    ...formData,
    postText,
    experienceText,
    selectedCards,
    });

    // You can extend this logic later for backend integration
};

return (
    <>
    <div className="summary-overlay">
        <div className="summary-box">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>📝 Submitted Application Summary</h2>

        <div className="bento-grid">
            <div className="bento-tile">🙋‍♂️ <strong>Name:</strong> {formData.name}</div>
            <div className="bento-tile">📚 <strong>Stream:</strong> {formData.stream}</div>
            <div className="bento-tile">🎂 <strong>DOB:</strong> {formData.dob}</div>
            <div className="bento-tile">📱 <strong>WhatsApp:</strong> {formData.whatsapp}</div>
            <div className="bento-tile">📸 <strong>Instagram:</strong> {formData.instagram}</div>
            <div className="bento-tile">💼 <strong>LinkedIn:</strong> {formData.linkedin}</div>
            <div className="bento-tile">💻 <strong>GitHub:</strong> {formData.github || 'N/A'}</div>
            <div className="bento-tile">🧩 <strong>Applied Posts:</strong> {selectedCards.join(', ')}</div>
            <div className="bento-tile wide">🎯 <strong>Why This Post:</strong> {postText}</div>
            <div className="bento-tile wide">🛠️ <strong>Past Experience:</strong> {experienceText}</div>
            <div className="bento-tile">🎓 <strong>Year Of Study:</strong> {/* Add logic if needed */}</div>
        </div>

        <button className="final-submit-btn" onClick={handleFinalSubmit}>
            🚀 Submit Final Application
        </button>

        <div className="credit-box">
            Created by <strong>AbuHamza</strong>, <strong>Arnav Ferreira</strong> and <strong>Zebin Anil</strong>
        </div>
        </div>
    </div>
    </>
);
};

export default FormSummary;
