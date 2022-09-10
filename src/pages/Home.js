import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <NavBar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
