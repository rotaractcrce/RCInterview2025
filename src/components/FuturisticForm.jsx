import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './formstyle.css';

const FuturisticForm = () => {
const [about, setAbout] = useState('');
const [selectedYear, setSelectedYear] = useState('');
const navigate = useNavigate();

const handleTextareaChange = (e) => setAbout(e.target.value);
const handleYearChange = (e) => setSelectedYear(e.target.value);

const handleNext = () => {
    if (!about.trim() || !selectedYear) {
    alert("Please fill out all fields.");
    return;
    }

    if (selectedYear === '2024') {
    navigate('/junior');
    } else if (selectedYear === '2025') {
    navigate('/senior');
    }
};

return (
    <div className="form-wrapper">
    <h1 className="form-heading">Your Story > Your Resume</h1>
    <h2 className="form-subheading">
    We want to know the real you. What makes you interesting, weird, fun, different? Drop the formalities and tell us who you really are.</h2>

    <textarea
        className="form-textarea"
        placeholder="Tell us about yourself..."
        rows="5"
        value={about}
        onChange={handleTextareaChange}
    />

    <h2>The Year of Study is:</h2>
    <div className="radio-group">
        <input
        type="radio"
        id="year-2024"
        name="year"
        value="2024"
        checked={selectedYear === '2024'}
        onChange={handleYearChange}
        />
        <label htmlFor="year-2024">Second Year</label>

        <input
        type="radio"
        id="year-2025"
        name="year"
        value="2025"
        checked={selectedYear === '2025'}
        onChange={handleYearChange}
        />
        <label htmlFor="year-2025">Third Year</label>
    </div>

    <button className="next-button" onClick={handleNext}>
        NEXT
    </button>
    </div>
);
};

export default FuturisticForm;
// The above code is a React component for a futuristic form that allows users to describe themselves and select their year of study. It uses hooks for state management and navigation between different routes based on user input. The form includes a textarea for user input, radio buttons for year selection, and a button to proceed to the next step.