import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import Book from "../components/Book";
import Dashboard from "../components/Dashboard";
import Loogin from "../components/Login";
import Signup from "../components/Signup";
import Profile from "../components/Profile";
import BookUser from "../components/BookUser";

//👇🏻 React-Toastify configuration
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MainPage() {
  const [pageName, setPageName] = useState("Home");
  console.log(pageName);

  return (
    <div>
      {/* Main Page */}
      <Header text={pageName} />
      {/* <Book />
      <Loogin />
      <Signup /> */}
      <Dashboard />
      <Profile />
      <BookUser />
    </div>
  );
}
