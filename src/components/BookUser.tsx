import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useScheduleStore } from "../stores/useScheduleStore";
import { sendEmail } from "../utilities/email";

export default function BookUser() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [timezone, setTimezone] = useState("");
  const [duration, setDuration] = useState("");

  const [receiverEmail, setReceiverEmail] = useState("");
  const { user } = useParams();

  const { schedules, getAllSchedules } = useScheduleStore();
  console.log("BookUser", schedules);

  //👇🏻 logs the user's details to the console
  const handleSubmit = async () => {
    try {
      //   preventDefault();
      sendEmail(email, fullName, message, duration);
      setFullName("");
      setMessage("");
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect(() => {
  // 	fetchBookingDetails(
  // 		user,
  // 		setError,
  // 		setTimezone,
  // 		setSchedules,
  // 		setReceiverEmail
  // 	);
  // }, [user]);

  return (
    <div className="bookContainer">
      <h2 className="bookTitle">Book a session with {user}</h2>
      {/* <form onSubmit={handleSubmit} className="booking__form"> */}
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="message">Any important note? (optional)</label>
      <textarea
        rows={5}
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <label htmlFor="session">
        Select your preferred session - GMT+2 Jerusalem
      </label>

      {schedules.map((instance) => {
        return (
          <select name="duration" onChange={(e) => setDuration(e.target.value)}>
            {instance.schedule.map((schedule: Schedule) => {
              console.log("one schedule", schedule);

              return (
                <option
                  value={`${schedule.day} - ${schedule.startTime} : ${schedule.endTime}`}
                  key={schedule.day}
                >{`${schedule.day} - ${schedule.startTime} : ${schedule.endTime}`}</option>
              );
            })}
          </select>
        );
      })}

      <button className="bookingBtn" onClick={handleSubmit}>
        SEND
      </button>
      {/* </form> */}
    </div>
  );
}
