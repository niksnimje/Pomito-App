
import React from "react";
import { signInWithPopup, auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoogleButton from 'react-google-button'

function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      
      await axios.post("http://localhost:8080/user/create", {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
      });
      
      navigate("/profile");
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
        <div className="text-center place-items-center ">
            <img src="https://www.pomito.app/_next/image?url=%2Flogo.png&w=64&q=75" alt="" /> <br />
            <h2 className="text-3xl font-bold">Sign In</h2>
        </div> <br />
      <GoogleButton onClick={handleLogin}/> <br />
      <p className="text-sm">By continuing, you agree to our Terms of Service and Privacy Policy</p>
    </div>
  );
}

export default Login;