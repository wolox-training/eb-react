import { IUser } from 'types/user.interface';

import api from '../config/api';

const URL = '/api/v1/users';

export const signUp = async (user: IUser | { locale: string }): Promise<any> => {
  const { data } = await api.post(URL, user);
  return data;
};
