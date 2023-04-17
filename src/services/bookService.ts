import axios, { AxiosInstance, AxiosResponse } from "axios";

class BookService {
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
    return await this.instance.get("/book/");
  }
  async getOne(id: string) {
    return await this.instance.get(`/book/${id}`);
  }
  async create(book: Book): Promise<Book> {
    return await this.instance.post("/book/", { ...book });
  }
  async update(book: Book) {
    return await this.instance.put(`/book/${book.id}`, { ...book });
  }
  async delete(id: string) {
    return await this.instance.delete(`/book/${id}`);
  }
}

export const bookService = new BookService();
