import React, { useState } from 'react';
import './FormSummary.css';
import { db } from "../firebase/firebase-config";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


const FormSummary = ({ formData, postText, experienceText, selectedCards, onClose, }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleFinalSubmit = async () => {
    setIsSubmitting(true);
    console.log("Final application submitted:", {
      ...formData,
      postText,
      experienceText,
      selectedCards,
    });

    try {
      const uploadedURLs = [];

      // Iterate over the documents and upload them to Cloudinary
      for (let file of formData.documents) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", file);
        uploadFormData.append("upload_preset", "InterviewFiles");
        uploadFormData.append(
          "folder",
          `interviews/seniorCouncil/${formData.name.trim().replace(/\s+/g, "_")}`
        );

        const res = await fetch(
          "https://api.cloudinary.com/v1_1/dc7gv02kk/raw/upload",
          {
            method: "POST",
            body: uploadFormData,
          }
        );

        const data = await res.json();

        if (!data.secure_url) {
          throw new Error(
            `Upload failed for ${file.name}: ${data.error?.message || "Unknown error"}`
          );
        }

        uploadedURLs.push({
          name: file.name,
          url: data.secure_url,
        });
      }

      // Create a new document ID and reference in Firestore
      const docId = `${formData.name.trim().replace(/\s+/g, "_")}_${Date.now()}`;
      const docRef = doc(db, "seniorCouncilApplications", docId);

      // Store form data and document URLs in Firestore
      await setDoc(docRef, {
        ...formData,
        postText,
        experienceText,
        selectedCards,
        documents: uploadedURLs,
        timestamp: new Date(),
      });

      alert("Senior Council application submitted successfully!");
      navigate("/dashboard");
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong:\n\n" + (err.message || err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderDocumentPreviews = (documents) => {
    return documents.map((doc, index) => {
      if (doc.type.startsWith('image')) {
        return (
          <div key={index} style={{ marginBottom: "8px" }}>
            <img src={URL.createObjectURL(doc)} alt={doc.name} width="100" height="100" />
          </div>
        );
      }
      return (
        <div key={index} style={{ marginBottom: "8px" }}>
          <a href={URL.createObjectURL(doc)} target="_blank" rel="noopener noreferrer">
            📄 {doc.name}
          </a>
        </div>
      );
    });
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
            <div className="bento-tile">🎓 <strong>Year Of Study:</strong> {
              formData.selectedYear === '2024' ? 'Second Year' : 'Third Year'}</div>
            <div className="bento-tile wide">🧩 <strong>Documents:</strong> 
              <div className="document-previews">{renderDocumentPreviews(formData.documents)}</div>
            </div>
          </div>

          <button className="final-submit-btn" onClick={handleFinalSubmit} disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : '🚀 Submit Final Application'}
          </button>

          {/* <div className="credit-box">
            Created by <strong>AbuHamza</strong>, <strong>Arnav Ferreira</strong> and <strong>Zebin Anil</strong>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FormSummary;
