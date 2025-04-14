import { useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const adminEmails = ["histeve9594@gmail.com"];

export default function AdminDashboard() {
  const [seniorApplications, setSeniorApplications] = useState([]);
  const [juniorApplications, setJuniorApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser || !adminEmails.includes(currentUser.email)) {
        navigate("/");
        return;
      }

      try {
        const seniorSnap = await getDocs(collection(db, "seniorCouncilApplications"));
        const juniorSnap = await getDocs(collection(db, "juniorCouncilApplications"));

        setSeniorApplications(seniorSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setJuniorApplications(juniorSnap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching data:", error);
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

  const renderApplications = (title, applications) => (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6 border-b border-gray-300">{title}</h2>
      {applications.length === 0 ? (
        <p className="text-white italic">No applications submitted yet.</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {applications.map((app, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white bg-opacity-10 text-white backdrop-blur-md p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{app.name}</h3>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Stream:</strong> {app.stream}</p>
              <p><strong>DOB:</strong> {app.dob}</p>
              <p><strong>WhatsApp:</strong> {app.whatsapp}</p>
              <p><strong>Instagram:</strong> {app.instagram}</p>
              <p><strong>LinkedIn:</strong> {app.linkedin}</p>
              <p><strong>GitHub:</strong> {app.github}</p>
              <p><strong>Selected Year:</strong> {app.selectedYear}</p>
              <p><strong>Selected Cards:</strong> {app.selectedCards}</p>

              {app.documents && app.documents.length > 0 && (
                <div className="mt-4">
                  <p className="font-semibold">Documents:</p>
                  <ul className="list-disc list-inside text-blue-300 text-sm space-y-1">
                    {app.documents.map((doc, i) => (
                      <li key={i}>
                        <a
                          href={doc.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {doc.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );

  if (loading) return <div className="text-white text-center mt-10">Loading...</div>;

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{
        background: "linear-gradient(to right, #1a2639, #7f2032)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        </div>

        <div className="glass-card-container">
          {renderApplications("Senior Council Applications", seniorApplications)}
          {renderApplications("Junior Council Applications", juniorApplications)}
        </div>
      </div>
    </div>
  );
}
