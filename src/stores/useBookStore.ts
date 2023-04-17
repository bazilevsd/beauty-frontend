import { create } from "zustand";
import { bookService } from "../services/bookService";

interface BookStore {
  book: Book[];
  getAllBooks: () => Promise<void>;
  createNewBook: (book: Book) => Promise<void>;
  updateBook: (book: Book) => Promise<void>;
  deleteBook: (id: number) => Promise<void>;
}
export const useBookStore = create<BookStore>((set, get) => ({
  book: [],
  getAllBooks: async () => {
    try {
      const data = await bookService.getAll();
      // @ts-ignore
      set((state) => ({
        book: data,
      }));
    } catch (error) {
      console.error(error);
    }
  },
  createNewBook: async (book) => {
    try {
      const { getAllBooks } = get();

      await bookService.create(book);
      await getAllBooks();
    } catch (error) {
      console.error(error);
    }
  },
  updateBook: async (book) => {
    const { getAllBooks } = get();
    try {
      await bookService.update(book);
      await getAllBooks();
    } catch (error) {
      console.error(error);
    }
  },
  deleteBook: async (id) => {
    const { getAllBooks } = get();
    try {
      await bookService.delete(String(id));
      await getAllBooks();
    } catch (error) {
      console.error(error);
    }
  },
}));
