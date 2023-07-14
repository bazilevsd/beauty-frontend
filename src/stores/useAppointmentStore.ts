import { useActionData, useAsyncError } from "react-router-dom";
import { create } from "zustand";
import { appointmentService } from "../services/appointmentService";

interface SetAppointmentStore {
  date: string;
  timeSlot: Array<TimeSlot>;
  availableTimes: Array<TimeSlot>;
  appointmentDays: Array<AppointDay>;
  //   appointmentDay: AppointmentDay;
  create: (date: string, bookingTimes: Array<TimeSlot>) => Promise<void>;
  getByDate: (date: string) => Promise<void>;
  getAllAppoints: () => Promise<void>;
  edit: (appointmentDay: AppointDay) => Promise<void>;
  deleteDay: (id: number | undefined) => Promise<void>;
}

export const useSetAppointmentStore = create<SetAppointmentStore>(
  (set, get) => ({
    date: "",
    timeSlot: [
      {
        time: "08:00 - 09:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "09:00 - 10:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "10:00 - 11:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "11:00 - 12:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },

      {
        time: "12:00 - 13:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "13:00 - 14:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "14:00 - 15:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "15:00 - 16:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "16:00 - 17:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "17:00 - 18:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "18:00 - 19:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
      {
        time: "19:00 - 20:00",
        available: false,
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        reason: "",
      },
    ],
    availableTimes: [],
    appointmentDays: [],
    // appointmentDay: { id: "", date: "", bookingTimes: [] },

    create: async (date: string, bookingTimes: Array<TimeSlot>) => {
      try {
        console.log("useStore", bookingTimes);

        await appointmentService.create({
          date: date,
          bookingTimes: bookingTimes,
        });
      } catch (error) {
        console.error(error);
      }
    },
    getByDate: async (date: string) => {
      console.log("store date", date);

      try {
        const oneByDate = await appointmentService.getByDate(date);
        console.log("store return", oneByDate);

        if (oneByDate === null || undefined) {
          set((state) => ({
            availableTimes: [],
          }));
        } else {
          set((state) => ({
            availableTimes: oneByDate,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    },
    getAllAppoints: async () => {
      try {
        const allAppoints = await appointmentService.getAllAppointments();
        console.log("Store all data", allAppoints);

        //@ts-ignore
        set((state) => ({
          appointmentDays: allAppoints,
        }));
      } catch (error) {
        console.error(error);
      }
    },
    edit: async (appointmentDay: AppointDay) => {
      const { getAllAppoints } = get();
      try {
        const data = await appointmentService.edit(appointmentDay);
        console.log("data from edit return", data);

        await getAllAppoints();
      } catch (error) {
        console.error(error);
      }
    },

    deleteDay: async (id: number | undefined) => {
      const { getAllAppoints } = get();
      try {
        await appointmentService.delete(id);
        await getAllAppoints();
      } catch (error) {
        console.error(error);
      }
    },
  })
);
