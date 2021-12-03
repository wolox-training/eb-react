export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  uid: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponse extends Exclude<IUser, 'uid'> {
  errors?: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    full_messages: string[];
  };
}

export interface IUserLoginResponse {
  accessToken: string;
  client: string;
  errors?: string[];
  data: IUser;
}
