import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { scheduleService } from "../services/scheduleService";
import { useScheduleStore } from "../stores/useScheduleStore";

export default function Profile() {
  //👇🏻 The ID is the URL parameter for fetching the user's details.
  const { id } = useParams();

  const { schedules, schedule, getAllSchedules } = useScheduleStore();
  useEffect(() => {
    getAllSchedules();
  }, []);
  console.log("Profile", schedules);
  return (
    <div className="profile">
      <div style={{ width: "70%" }}>
        <h2>Hey, nevodavid</h2>
        <p>Here is your schedule: WAT</p>

        {schedules.map((instance) => {
          console.log("one sch", instance);
          return (
            <div>
              {instance.schedule.map((schedule: Schedule) => {
                return (
                  <table>
                    <tbody>
                      <tr key={schedule.day}>
                        <td style={{ fontWeight: "bold" }}>{schedule.day}</td>
                        <td>{schedule.startTime || "Unavailable"}</td>
                        <td>{schedule.endTime || "Unavailable"}</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
