import axios, { AxiosInstance, AxiosResponse } from "axios";
import sendRequest from "../utilities/send-request";

class UserService {
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

  //   async getAll() {
  //     console.log("Get All");

  //     const data = await this.instance.get("users/");
  //     console.log("Serv ice comeback", data);

  //     return data;
  //   }
  //   async getOne(id: string) {
  //     return await this.instance.get(`/schedule/${id}`);
  //   }
  //@ts-ignore
  async signUp(userData): Promise<Token> {
    console.log("WE ARE HERE");
    try {
      console.log("WE ARE In TRY");
      console.log("Service", userData);
      //@ts-ignore
      return await this.instance.post("/users/", userData, sendRequest);
    } catch (error) {
      console.log("Post error", error);
    }
  }
  //@ts-ignore
  async login(credentials) {
    //@ts-ignore
    return await this.instance.put(`/users/login`, credentials, sendRequest);
  }
  //   async delete(id: string) {
  //     return await this.instance.delete(`/schedule/${id}`);
  //   }
}

export const userService = new UserService();
