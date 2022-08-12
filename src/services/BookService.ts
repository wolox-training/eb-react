import { IBook, IBookResponse } from 'types/book.interface';

import api from '../config/api';

const URL = '/api/v1/books';

export const getBooks = async (): Promise<IBookResponse> => {
  const { data } = await api.get(URL);
  return data as IBookResponse;
};

export const getBook = async (id: string): Promise<IBook> => {
  const { data } = await api.get(`${URL}/${id}`);
  return data as IBook;
};
