import axios, { AxiosInstance, AxiosResponse } from "axios";

class AppointmentService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "https://beauty-site-backend.herokuapp.com/",
    });
    this.instance.interceptors.response.use(this.responseInterceptor);
  }

  private responseInterceptor({ data }: AxiosResponse<any, any>) {
    return data;
  }
  async create(appointDay: AppointDay) {
    try {
      return await this.instance.post("setappointment", appointDay);
    } catch (error) {
      console.log("Post error", error);
    }
  }
  async getAllAppointments() {
    try {
      return await this.instance.get("/setappointment/");
    } catch (error) {
      console.log("Get all error", error);
    }
  }
  async getByDate(date: string) {
    const data: Array<TimeSlot> = await this.instance.get(
      `/setappointment/${date}`
    );
    return data;
  }
  async edit(appointmentDay: AppointDay) {
    try {
      console.log("app day in Service", appointmentDay._id);

      return await this.instance.put(`/setappointment/${appointmentDay._id}`, {
        ...appointmentDay,
      });
    } catch (error) {
      console.log("Get all error", error);
    }
  }
  async delete(id: number | undefined) {
    try {
      return await this.instance.delete(`/setappointment/${id}`);
    } catch (error) {
      console.log("Get all error", error);
    }
  }
}

export const appointmentService = new AppointmentService();
