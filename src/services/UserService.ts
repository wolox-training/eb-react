import { IUser, IUserResponse } from 'types/user.interface';

import api from '../config/api';

const URL = '/api/v1/users';

export const signUp = async (user: IUser | { locale: string }): Promise<IUserResponse> => {
  const { data } = await api.post<IUserResponse>(URL, user);
  return data as IUserResponse;
};
