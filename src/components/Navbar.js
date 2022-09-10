import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <h2>Chat</h2>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
      </div>
      <button>Logout @{currentUser.displayName}</button>
    </div>
  );
};

export default NavBar;
