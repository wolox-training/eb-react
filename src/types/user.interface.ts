export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserResponse extends IUser {
  errors?: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    full_messages: string[];
  };
}

export interface IUserLoginResponse extends IUser {
  errors?: string[];
  accessToken: string;
}
