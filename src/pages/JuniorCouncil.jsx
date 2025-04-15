import React, { useState, useRef } from 'react';
import './JuniorCouncil.css';
import PostCards from './PostCardsJC';
import ApplyButton from '../components/Button';
import FormSummaryOverlay from '../components/FormSummary'; // ✅ correct import
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const JuniorCouncil = () => {
const email = localStorage.getItem('userEmail');
const [formData, setFormData] = useState({
    name: '',
    stream: '',
    dob: '',
    whatsapp: '',
    instagram: '',
    linkedin: '',
    github: '',
    documents: [],
    selectedYear: '2024',
    email: email || '',
});

const [selectedCards, setSelectedCards] = useState([]);
const [postText, setPostText] = useState('');
const [experienceText, setExperienceText] = useState('');
const [errors, setErrors] = useState({});
const [showSummary, setShowSummary] = useState(false); // ✅ show overlay
const fileInputRef = useRef(null);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
};

const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData((prev) => ({ ...prev, documents: Array.from(files) }));
  };

const handleBlur = (e) => {
    const { name, value } = e.target;
    if ((name === 'name' || name === 'stream' || name === 'dob') && !value) {
    setErrors((prev) => ({ ...prev, [name]: 'This field is required' }));
    }
};

const handleFileRemove = (indexToRemove) => {
    setFormData((prev) => {
      const updatedDocs = prev.documents.filter((_, i) => i !== indexToRemove);
      if (updatedDocs.length === 0 && fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return { ...prev, documents: updatedDocs };
    });
  };
  
  

// const handleApplyClick = () => {
//     // from validation over here on submit baki sab
//     const { name, stream, dob, whatsapp, instagram, linkedin, github, documents } = formData;

//     console.log(documents);

//     if (
//         !name || !stream || !dob ||
//         !whatsapp || !instagram || !linkedin || !github ||
//         selectedCards.length !== 3 ||
//         !postText.trim() || !experienceText.trim() ||
//         formData.documents.length === 0
//       ) {
//         alert("Please fill all fields and select all 3 preferences.");
//         return;
//       }

const flashError = (name) => {
    const input = document.querySelector(`[name="${name}"]`);
    const target = input || document.querySelector(`label[name="${name}"]`);
    if (target) {
      target.classList.add('flash-error');
      setTimeout(() => target.classList.remove('flash-error'), 1500);
    }
  };
  
  
  const handleApplyClick = () => {
    const {
      name, stream, dob, whatsapp,
      instagram, linkedin, github, documents
    } = formData;
  
    const emptyFields = [];
  
    if (!name) emptyFields.push('name');
    if (!stream) emptyFields.push('stream');
    if (!dob) emptyFields.push('dob');
    if (!whatsapp) emptyFields.push('whatsapp');
    if (!instagram) emptyFields.push('instagram');
    if (!linkedin) emptyFields.push('linkedin');
    if (!github) emptyFields.push('github');
    if (selectedCards.length !== 3) emptyFields.push('cards');
    if (!postText.trim()) emptyFields.push('postText');
    if (!experienceText.trim()) emptyFields.push('experienceText');
    if (documents.length === 0) emptyFields.push('documents');
    
  
    if (emptyFields.length > 0) {
      emptyFields.forEach(f => flashError(f));
      return;
    }
      
    setShowSummary(true);
};

const closeSummary = () => setShowSummary(false);

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
        <h1 className="form-title">Apply for Junior Council</h1>
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
                            type="tel"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleChange}
                            onBlur={() =>
                            setErrors((prev) => ({
                                ...prev,
                                whatsapp: /^\d{10}$/.test(formData.whatsapp) ? '' : 'Enter a valid 10-digit number',
                            }))
                            }
                            className={errors.whatsapp ? 'error' : ''}
                            pattern="\d{10}"
                            maxLength={10}
                            inputMode="numeric"
                            required
                        />
                        <label className={formData.whatsapp ? 'filled' : ''}>WhatsApp</label>
                        {errors.whatsapp && <span className="error-message">{errors.whatsapp}</span>}
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
                Upload Resume
                <input
                    type="file"
                    name="documents"
                    multiple
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                />


            </label>

            {/* Show list of uploaded files */}
            <div className="file-name-list">
            {formData.documents.map((file, index) => (
                <div key={index} className="file-entry">
                📄 {file.name}
                <span
                    className="remove-file"
                    onClick={() => handleFileRemove(index)}
                    >
                    ❌
                </span>
                </div>
            ))}
            </div>

            <div onClick={() => window.open('/PostDescription.pdf', '_blank')} className="file-label view-post">
    View Post Description
</div>
        </div>

        </form>

        <PostCards selectedCards={selectedCards} setSelectedCards={setSelectedCards} />

        {selectedCards.length !== 3 && (
        <p className="error-message">Please select exactly 3 preferences.</p>
        )}

        <div onClick={handleApplyClick}>
        <ApplyButton />
        </div>
    </div>

    <div className="form-right">
        <h2 className="right-heading">Why do you all think you’d crush it in these roles, and what’s got you excited to apply?</h2>
        <textarea
        className="top"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        placeholder="Your answer..."
        rows="6"
        />
        <h3 className="right-heading">Got any cool past experiences that’ll help you rock this role? Spill the beans

</h3>
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
