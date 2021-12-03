import { IBookResponse } from 'types/book.interface';

import api from '../config/api';

const URL = '/api/v1/books';

export const getBooks = async (): Promise<IBookResponse> => {
  const { data } = await api.get(URL);
  return data as IBookResponse;
};
