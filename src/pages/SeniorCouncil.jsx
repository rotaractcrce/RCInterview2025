import React, { useState } from 'react';
import './JuniorCouncil.css';
import PostCards from './PostCardsSC';
import ApplyButton from '../components/Button';
import FormSummaryOverlay from '../components/FormSummary'; // ✅ correct import
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const JuniorCouncil = () => {
const [formData, setFormData] = useState({
    name: '',
    stream: '',
    dob: '',
    whatsapp: '',
    instagram: '',
    linkedin: '',
    github: '',
});

const [selectedCards, setSelectedCards] = useState([]);
const [postText, setPostText] = useState('');
const [experienceText, setExperienceText] = useState('');
const [errors, setErrors] = useState({});
const [showSummary, setShowSummary] = useState(false); // ✅ show overlay

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
};

const handleBlur = (e) => {
    const { name, value } = e.target;
    if ((name === 'name' || name === 'stream' || name === 'dob') && !value) {
    setErrors((prev) => ({ ...prev, [name]: 'This field is required' }));
    }
};

const handleApplyClick = () => {
    // You can also add validation here
    setShowSummary(true);
};

const closeSummary = () => setShowSummary(false);

const [uploadedFiles, setUploadedFiles] = useState([]);


return (
    <div className="junior-wrapper">
    {showSummary && (
        <FormSummaryOverlay
        formData={formData}
        selectedCards={selectedCards}
        postText={postText}
        experienceText={experienceText}
        onClose={closeSummary}
        />
    )}

    <div className="form-left">
        <h1 className="form-title">Apply for Senior Council</h1>
        <form className="info-form">
        <div className="floating-input">
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? 'error' : ''}
            required
            />
            <label className={formData.name ? 'filled' : ''}>Full Name</label>
        </div>

        <div className="floating-input">
            <select
            name="stream"
            value={formData.stream}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.stream ? 'error' : ''}
            required
            >
            <option value="">Select Stream</option>
            <option value="CompsA">Computer Science A</option>
            <option value="CompsB">Computer Science B</option>
            <option value="CompsC">Computer Science C</option>
            <option value="CSE">CSE</option>
            <option value="ECS">ECS</option>
            <option value="Mech">Mechanical</option>
            </select>
            <label className={formData.stream ? 'filled' : ''}>Stream</label>
        </div>

        <div className="floating-input">
            <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.dob ? 'error' : ''}
            required
            />
            <label className={formData.dob ? 'filled' : ''}>Date of Birth</label>
        </div>

        {/* Optional fields */}
        <div className="optional-grid">
            <div className="floating-input">
            <FaWhatsapp className="icon" />
            <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
            />
            <label className={formData.whatsapp ? 'filled' : ''}>WhatsApp</label>
            </div>
            <div className="floating-input">
            <FaInstagram className="icon" />
            <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
            />
            <label className={formData.instagram ? 'filled' : ''}>Instagram</label>
            </div>
            <div className="floating-input">
            <FaLinkedin className="icon" />
            <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
            />
            <label className={formData.linkedin ? 'filled' : ''}>LinkedIn</label>
            </div>
            <div className="floating-input">
            <FaGithub className="icon" />
            <input
                type="text"
                name="github"
                value={formData.github}
                onChange={handleChange}
            />
            <label className={formData.github ? 'filled' : ''}>GitHub</label>
            </div>
        </div>

        <div className="file-buttons">
            <label className="file-label resume-upload">
                Upload Resume & SOP
                <input
                type="file"
                accept=".pdf"
                multiple
                onChange={(e) => setUploadedFiles(Array.from(e.target.files))}
                />
            </label>

            {/* Show list of uploaded files */}
            <div className="file-name-list">
                {uploadedFiles.map((file, index) => (
                <p key={index} className="file-name">📄 {file.name}</p>
                ))}
            </div>

            <a
                href="/pdfs/PostDescription.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="file-label view-post"
            >
                View Post Description
            </a>
        </div>

        </form>

        <PostCards selectedCards={selectedCards} setSelectedCards={setSelectedCards} />
        <div onClick={handleApplyClick}>
        <ApplyButton />
        </div>
        </div>

    <div className="form-right">
        <h2 className="right-heading">Which post are you applying for and why?</h2>
        <textarea
        className="top"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Your answer..."
        rows="6"
        />
        <h3 className="right-heading">Past Experience</h3>
        <textarea
        className="bottom"
        value={experienceText}
        onChange={(e) => setExperienceText(e.target.value)}
        placeholder="Mention any relevant experience..."
        rows="4"
        />
    </div>
    </div>
);
};

export default JuniorCouncil;
