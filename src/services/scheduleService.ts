import axios, { AxiosInstance, AxiosResponse } from "axios";

class ScheduleService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create({
      baseURL: "http://localhost:3000",
    });
    this.instance.interceptors.response.use(this.responseInterceptor);
  }

  private responseInterceptor({ data }: AxiosResponse<any, any>) {
    return data;
  }

  async getAll() {
    console.log("Get All");

    const data = await this.instance.get("schedule/");
    console.log("Serv ice comeback", data);

    return data;
  }
  async getOne(id: string) {
    return await this.instance.get(`/schedule/${id}`);
  }
  //@ts-ignore
  async create(schedule: Schedule[]): Promise<Schedule> {
    console.log("WE ARE HERE");
    try {
      console.log("WE ARE In TRY");
      console.log("Service", schedule);

      return await this.instance.post("/schedule/", { schedule });
    } catch (error) {
      console.log("Post error", error);
    }
  }
  async update(schedule: Schedule) {
    return await this.instance.put(`/schedule/${schedule.id}`, { ...schedule });
  }
  async delete(id: string) {
    return await this.instance.delete(`/schedule/${id}`);
  }
}

export const scheduleService = new ScheduleService();
