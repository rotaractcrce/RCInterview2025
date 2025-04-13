import React from "react";
import { auth, provider, db } from "../firebase/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./login.css";
import photo from "../assets/photo.jpg";
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const blob = document.querySelector(".cursor-blob");
  
    const handleMouseMove = (e) => {
      blob.style.left = `${e.clientX}px`;
      blob.style.top = `${e.clientY}px`;
    };
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleLogin = async () => {
    try {
      // 👉 Force account selection
      provider.setCustomParameters({
        prompt: "select_account"
      });

      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      localStorage.setItem("userEmail", email);

      const seniorRef = collection(db, "seniorCouncilApplications");
      const juniorRef = collection(db, "juniorCouncilApplications");

      const seniorQuery = query(seniorRef, where("email", "==", email));
      const juniorQuery = query(juniorRef, where("email", "==", email));

      const seniorSnapshot = await getDocs(seniorQuery);
      const juniorSnapshot = await getDocs(juniorQuery);

      if (!seniorSnapshot.empty || !juniorSnapshot.empty) {
        navigate("/dashboard");
      } else {
        navigate("/Checkbox");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (

<>
    <div className="cursor-blob"></div>
    <div className="login-wrapper">
      <div className="login-card">
        {/* Left image section */}
        <div className="login-left">
          <img
            src={photo} // Your image path
            alt="Rotaract Team"
            className="login-img"
          />
        </div>
    
        {/* Right content section */}
        <div className="login-right">
          <h2 className="login-main-text">
            Wanna be a part of{' '}
            <br />
            <span className="typewriter-text">
              <Typewriter
                words={['Greatness?', 'Leadership?', 'Service?', 'ROTARACT?']}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </h2>
    
          <p className="login-sub-text">Be a part of this council</p>
          <p className="login-cta">Apply Now</p>
    
          <button className="google-login-btn" onClick={handleLogin}>
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google logo"
            />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
    <div className="credit-box">
      <div className="credit-left">
        Created by <strong>&nbsp; AbuHamza </strong> ,&nbsp; &nbsp; <strong> Arnav Ferreira &nbsp;</strong> and &nbsp;<strong>Zebin Anil</strong>
      </div>
      <div className="credit-right">
        © Product of Rotaract CRCE - 2025
      </div>
    </div>

</>
  );
};

export default Login;
