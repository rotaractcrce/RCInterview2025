import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './UserDashboard.css';

export default function UserDashboard() {
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        const seniorSnap = await getDocs(collection(db, "seniorCouncilApplications"));
        const juniorSnap = await getDocs(collection(db, "juniorCouncilApplications"));

        const allApplications = [
          ...seniorSnap.docs.map((doc) => ({ id: doc.id, ...doc.data(), type: "Senior" })),
          ...juniorSnap.docs.map((doc) => ({ id: doc.id, ...doc.data(), type: "Junior" })),
        ];

        const userApp = allApplications.find((app) => app.email === user.email);
        setApplication(userApp || null);
      } catch (error) {
        console.error("Error loading dashboard:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    navigate("/");
  };

  if (loading) return <div className="dashboard-loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Your Application</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>

      {application ? (
        <div className="bento-grid">
          <div className="bento-box">🙋‍♂️ <strong>Name:</strong> {application.name}</div>
          <div className="bento-box">📧 <strong>Email:</strong> {application.email}</div>
          <div className="bento-box">📚 <strong>Stream:</strong> {application.stream}</div>
          <div className="bento-box">🎂 <strong>DOB:</strong> {application.dob}</div>
          <div className="bento-box">📱 <strong>WhatsApp:</strong> {application.whatsapp}</div>
          <div className="bento-box">📸 <strong>Instagram:</strong> {application.instagram}</div>
          <div className="bento-box">💼 <strong>LinkedIn:</strong> {application.linkedin}</div>
          <div className="bento-box">💻 <strong>GitHub:</strong> {application.github || "N/A"}</div>
          <div className="bento-tile">🧩 <strong>Applied Posts:</strong> {application.selectedCards.join(', ')}</div>
          <div className="bento-box">🎓 <strong>Year:</strong> {application.selectedYear}</div>
          <div className="bento-box">🏷️ <strong>Council Type:</strong> {application.type}</div>
          {application.documents && application.documents.length > 0 && (
            <div className="bento-box">
              📁 <strong>Documents:</strong>
              <ul className="doc-list">
                {application.documents.map((doc, i) => (
                  <li key={i}>
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      {doc.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p className="dashboard-empty">No application submitted yet.</p>
      )}
    </div>
  );
}
