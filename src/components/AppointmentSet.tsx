import React, { useEffect, useState } from "react";
import { DateCalendar } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useUserStore } from "../stores/useUserStore";
import styles from "./AppointmentSet.module.scss";
import { useSetAppointmentStore } from "../stores/useAppointmentStore";

export default function AppointmentSet() {
  const { user } = useUserStore();
  const {
    timeSlot,
    create,
    availableTimes,
    getAllAppoints,
    appointmentDays,
    edit,
    deleteDay,
  } = useSetAppointmentStore();
  const [date, setDate] = useState<Date | null>(null);
  const [bookingTimes, setBookingTimes] = useState<Array<TimeSlot>>([]);

  useEffect(() => {
    console.log("timeslots", timeSlot);
    setBookingTimes([...timeSlot]);
  }, [date]);
  useEffect(() => {
    getAllAppoints();
  }, []);

  const handleOnChange = (newDate: Date | null) => {
    setDate(newDate);
    setBookingTimes([...timeSlot]);
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
  const handleAddAppointment = () => {
    if (date !== null) {
      const convDate = date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
      console.log("convDate", convDate);

      create(convDate, bookingTimes);

      console.log("Booking times", bookingTimes);
    }
  };
  return (
    <div className={styles.AppointmentSet}>
      <div className={styles.NewSet}>
        <h2>Add New Schedule</h2>

        {bookingTimes.map((slot, index) => {
          return (
            <button
              key={index}
              // disabled={false}
              className={styles.TimeSlotButton}
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                slot.available = !slot.available;
                if (slot.available === true) {
                  console.log("we are here");
                  e.currentTarget.style.backgroundColor = "Thistle";
                  //e.currentTarget.className = ".TimeSlotButtonPicked";
                } else if (slot.available === false) {
                  console.log("ans now here");
                  e.currentTarget.style.backgroundColor = "LavenderBlush";
                  //e.currentTarget.className = ".TimeSlotButton";
                }
                console.log("slot change", slot.available);
              }}
            >
              {slot.time}
            </button>
          );
        })}
        <button
          className={styles.submitButton}
          onClick={() => {
            handleAddAppointment();
            getAllAppoints();
          }}
        >
          Submit
        </button>
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateCalendar
          value={date}
          //onChange={(newDate: Date | null) => setDate(newDate)}
          onChange={handleOnChange}
        />
      </LocalizationProvider>
      <div className={styles.UpdateSet}>
        <h2>Update Schedule</h2>

        {appointmentDays.map((appointmentDay, index) => {
          return (
            <div key={index}>
              {appointmentDay.date === changeDate(date) && (
                <div className={styles.UpdateSet}>
                  {appointmentDay.bookingTimes.map((slot, index) => {
                    return (
                      <button
                        key={index}
                        // disabled={false}
                        className={
                          slot.available
                            ? styles.TimeSlotButtonPicked
                            : styles.TimeSlotButton
                        }
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          slot.available = !slot.available;
                          if (slot.available === true) {
                            console.log("we are here");
                            e.currentTarget.style.backgroundColor = "Thistle";
                            //e.currentTarget.className = ".TimeSlotButtonPicked";
                          } else if (slot.available === false) {
                            console.log("ans now here");
                            e.currentTarget.style.backgroundColor =
                              "LavenderBlush";
                            //e.currentTarget.className = ".TimeSlotButton";
                          }
                          console.log("slot change", slot.available);
                        }}
                      >
                        <p>{slot.time}</p>
                        <p>{slot.firstName}</p>
                        <p>{slot.lastName}</p>
                        <p>{slot.phoneNumber}</p>
                        <p>{slot.email}</p>
                        <p>{slot.reason}</p>
                      </button>
                    );
                  })}

                  <button
                    className={styles.submitButton}
                    onClick={() => {
                      edit(appointmentDay);
                      getAllAppoints();
                    }}
                  >
                    Update
                  </button>
                  <button
                    className={styles.submitButton}
                    onClick={() => {
                      deleteDay(appointmentDay._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
