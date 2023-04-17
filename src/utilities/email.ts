import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import React from "react";
// import env from "react-dotenv";
import dotenv from "dotenv";
// dotenv.config();
// require("dotenv").config();
// import "dotenv/config";

export const sendEmail = (
  //   receiverEmail: string,
  email: string,
  fullName: string,
  message: string,
  duration: string
) => {
  console.log(
    "process.env.YOUR_SERVICE_ID",
    `${import.meta.env.VITE_YOUR_SERVICE_ID}`
  );

  //   const SERVICE_ID = process.env.YOUR_SERVICE_ID;
  emailjs
    .send(
      `${import.meta.env.VITE_YOUR_SERVICE_ID}`,
      `${import.meta.env.VITE_YOUR_TEMPLATE_ID}`,

      {
        // to_email: receiverEmail,
        from_email: email,
        fullName,
        message,
        duration,
      },
      `${import.meta.env.VITE_YOUR_PUBLIC_KEY}`
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success("Session booked successfully!");
      },
      (error) => {
        console.log(error.text);
        toast.error(error.text);
      }
    );
};
