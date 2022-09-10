import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../config/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h2 className="title">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Log in</button>
        </form>
        <span>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
