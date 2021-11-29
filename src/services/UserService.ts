import { IUser, IUserLogin, IUserLoginResponse, IUserResponse } from 'types/user.interface';

import api from '../config/api';

const URL = '/api/v1/users';

export const signUp = async (user: IUser | { locale: string }): Promise<IUserResponse> => {
  const { data } = await api.post<IUserResponse>(URL, user);
  return data as IUserResponse;
};

export const signIn = async (user: IUserLogin): Promise<IUserLoginResponse> => {
  const { data, headers } = await api.post<IUserLoginResponse>(`${URL}/sign_in`, user);
  const accessToken = headers ? headers['access-token'] : '';
  return { ...data, accessToken } as IUserLoginResponse;
};
