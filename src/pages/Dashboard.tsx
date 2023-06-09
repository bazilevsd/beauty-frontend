import React, { useState } from "react";
// import { useTimezoneSelect } from "react-timezone-select";
import TimezoneSelect from "react-timezone-select";
import { useNavigate } from "react-router-dom";
import { Time } from "../utilities/resource";
import { toast } from "react-toastify";
import { useScheduleStore } from "../stores/useScheduleStore";
import { getUser } from "../utilities/user-services";
import AuthPage from "./AuthPage";

export default function Dashboard() {
  const [user, setUser] = useState(getUser());
  const { createNewSchedule } = useScheduleStore();
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const handleTimeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
    const { name, value } = e.target;
    if (value === "Select") return;
    const list: Schedule[] = [...schedule];
    list[id][name as keyof Schedule] = value;

    setSchedule(list);
  };
  //👇🏻 Logs the user's schedule to the console after setting the availability
  const handleSaveSchedules = () => {
    if (JSON.stringify(selectedTimezone) !== "{}") {
      console.log(schedule);
      createNewSchedule(schedule);
    } else {
      toast.error("Select your timezone");
    }
  };
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState<Schedule[]>([
    { day: "Sun", startTime: "", endTime: "" },
    { day: "Mon", startTime: "", endTime: "" },
    { day: "Tue", startTime: "", endTime: "" },
    { day: "Wed", startTime: "", endTime: "" },
    { day: "Thu", startTime: "", endTime: "" },
    { day: "Fri", startTime: "", endTime: "" },
    { day: "Sat", startTime: "", endTime: "" },
  ]);

  //👇🏻 Runs when a user sign out
  const handleLogout = () => {
    localStorage.removeItem("_id");
    localStorage.removeItem("_myEmail");
    navigate("/");
  };
  console.log("front", user);

  return (
    <>
      {user ? (
        <div>
          <nav className="dashboard__nav">
            <button onClick={handleLogout} className="logout__btn">
              Log out
            </button>
          </nav>
          <main className="dashboard__main">
            <h2 className="dashboard__heading">Select your availability</h2>

            <div className="timezone__wrapper">
              <p>Pick your timezone</p>
              <TimezoneSelect
                // @ts-ignore
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
              {schedule.map((sch, id) => (
                <div className="form" key={id}>
                  <p>{sch.day}</p>
                  <div className="select__wrapper">
                    <label htmlFor="startTime">Start Time</label>
                    <select
                      name="startTime"
                      id="startTime"
                      onChange={(e) => handleTimeChange(e, id)}
                    >
                      {Time.map((t) => (
                        <option key={t.id} value={t.t} id={t.id}>
                          {t.t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="select__wrapper">
                    <label htmlFor="endTime">End Time</label>
                    <select
                      name="endTime"
                      id="endTime"
                      onChange={(e) => handleTimeChange(e, id)}
                    >
                      {Time.map((t) => (
                        <option key={t.id} value={t.t} id={t.id}>
                          {t.t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>

            <div className="saveBtn__container">
              <button onClick={handleSaveSchedules}>SAVE SCHEDULES</button>
            </div>
          </main>
        </div>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </>
  );
}
