import { create } from "zustand";
import { scheduleService } from "../services/scheduleService";

interface ScheduleStore {
  schedules: Schedules[];
  schedule: Schedule[];
  getAllSchedules: () => Promise<void>;
  createNewSchedule: (schedule: Schedule[]) => Promise<void>;
  updateSchedule: (schedule: Schedule) => Promise<void>;
  deleteSchedule: (id: number) => Promise<void>;
}
export const useScheduleStore = create<ScheduleStore>((set, get) => ({
  schedules: [],
  schedule: [],
  getAllSchedules: async () => {
    try {
      const data = await scheduleService.getAll();
      console.log("Store return", data);

      // @ts-ignore
      set((state) => ({
        schedules: data,
      }));
      console.log("Schedule after set", data);
    } catch (error) {
      console.error(error);
    }
  },
  createNewSchedule: async (schedule: Schedule[]) => {
    try {
      const { getAllSchedules } = get();

      await scheduleService.create(schedule);
      console.log("Store", schedule);

      await getAllSchedules();
    } catch (error) {
      console.error(error);
    }
  },
  updateSchedule: async (schedule) => {
    const { getAllSchedules } = get();
    try {
      await scheduleService.update(schedule);
      await getAllSchedules();
    } catch (error) {
      console.error(error);
    }
  },
  deleteSchedule: async (id) => {
    const { getAllSchedules } = get();
    try {
      await scheduleService.delete(String(id));
      await getAllSchedules();
    } catch (error) {
      console.error(error);
    }
  },
}));
