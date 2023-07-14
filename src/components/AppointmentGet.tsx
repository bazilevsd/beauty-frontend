import React, { useEffect, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useUserStore } from "../stores/useUserStore";
import styles from "./AppointmentGet.module.scss";
import { useSetAppointmentStore } from "../stores/useAppointmentStore";
import { sendEmail } from "../utilities/email";

export default function AppointmentGet() {
  const [date, setDate] = useState<Date | null>(new Date());
  const [showSubForm, setShowSubForm] = useState<number | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [appDate, setAppDate] = useState<string | undefined>("");
  const [appTime, setAppTime] = useState("");
  const { availableTimes, edit, getAllAppoints, appointmentDays } =
    useSetAppointmentStore();

  console.log("availableTimes", availableTimes);
  console.log("date", date);

  useEffect(() => {
    getAllAppoints();
  }, []);

  const handleSubForm = (indx: number) => {
    setShowSubForm(indx);
    //setShowSubForm(prevState => ({showSubForm, [indx]: !prevState[indx]}))
  };

  const handleChange = (newDate: Date | null) => {
    setDate(newDate);
    console.log("new date", date);
    console.log("all data", appointmentDays);
  };

  const changeDate = (initDate: Date | null) => {
    const convDate = initDate?.toLocaleDateString("en-GB", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    console.log("changed Date", convDate);
    return convDate;
  };

  return (
    <div className={styles.AppointmentGet}>
      <div>
        <h2>Chose The Date</h2>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateCalendar
            value={date}
            //   onChange={(newDate: Date | null) => setDate(newDate)}
            onChange={handleChange}
          />
        </LocalizationProvider>
      </div>
      <div className={styles.allSlotsContainer}>
        <h2>
          Chose The Time, Enter Your Contact Information And Reson For Visit
          Then Click Submit
        </h2>
        {appointmentDays.map((appointmentDay, index) => {
          return (
            <div key={index}>
              {appointmentDay.date === changeDate(date) && (
                <div className={styles.allSlots}>
                  {appointmentDay.bookingTimes.map((slot, index) => {
                    return (
                      <div className={styles.oneSlot}>
                        <button
                          key={index}
                          className={
                            slot.available
                              ? styles.TimeSlotButtonPicked
                              : styles.TimeSlotButton
                          }
                          onClick={() => {
                            handleSubForm(index);
                          }}
                        >
                          {slot.time}
                        </button>
                        <div>
                          {showSubForm === index && slot.available === true ? (
                            <div className={styles.subForm}>
                              <div className={styles.inputForm}>
                                <input
                                  className={styles.inputField}
                                  type="text"
                                  placeholder="First Name"
                                  onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                  ) => {
                                    slot.firstName = e.currentTarget.value;
                                    setFirstName(e.currentTarget.value);
                                  }}
                                  required
                                />
                                <input
                                  className={styles.inputField}
                                  type="text"
                                  placeholder="Last Name"
                                  onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                  ) => {
                                    slot.lastName = e.currentTarget.value;
                                    setLastName(e.currentTarget.value);
                                  }}
                                  required
                                />
                                <input
                                  className={styles.inputField}
                                  type="phone"
                                  placeholder="Phone Number"
                                  onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                  ) => {
                                    slot.phoneNumber = e.currentTarget.value;
                                    setPhoneNumber(e.currentTarget.value);
                                  }}
                                  required
                                />
                                <input
                                  className={styles.inputField}
                                  type="email"
                                  placeholder="Email"
                                  onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                  ) => {
                                    slot.email = e.currentTarget.value;
                                    setEmail(e.currentTarget.value);
                                  }}
                                  required
                                />
                                <input
                                  className={styles.inputField}
                                  type="text"
                                  placeholder="Consultation Or Service Name"
                                  onChange={(
                                    e: React.FormEvent<HTMLInputElement>
                                  ) => {
                                    slot.reason = e.currentTarget.value;
                                    setReason(e.currentTarget.value);
                                  }}
                                  required
                                />
                              </div>
                              <button
                                className={styles.submitButton}
                                onClick={(
                                  e: React.MouseEvent<HTMLButtonElement>
                                ) => {
                                  slot.available = !slot.available;
                                  if (slot.available === true) {
                                    console.log("we are here");
                                    e.currentTarget.style.backgroundColor =
                                      "Thistle";
                                    //e.currentTarget.className = ".TimeSlotButtonPicked";
                                  } else if (slot.available === false) {
                                    console.log("ans now here");
                                    e.currentTarget.style.backgroundColor =
                                      "LavenderBlush";
                                    //e.currentTarget.className = ".TimeSlotButton";
                                  }
                                  setAppDate(changeDate(date));
                                  setAppTime(slot.time);
                                  edit(appointmentDay);
                                  sendEmail(
                                    firstName,
                                    lastName,
                                    phoneNumber,
                                    email,
                                    reason,
                                    appDate,
                                    appTime
                                  );
                                  getAllAppoints();
                                }}
                              >
                                Submit
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
