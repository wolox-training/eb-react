import { IField } from 'types/field.interface';

export const FORM: IField[] = [
  {
    label: 'Email',
    key: 'email',
    type: 'text',
    pattern: { value: /\S+@\S+\.\S+/, message: 'Entered value does not match email format' }
  },
  {
    label: 'Password',
    key: 'password',
    type: 'password'
  }
];
