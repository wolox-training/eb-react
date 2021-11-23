import { IField } from 'types/field.interface';

export const FORM: IField[] = [
  { label: 'Name', key: 'first_name', type: 'text' },
  { label: 'Last Name', key: 'last_name', type: 'text' },
  { label: 'Email', key: 'email', type: 'text' },
  { label: 'Password', key: 'password', type: 'password' },
  { label: 'Password Confirmation', key: 'password_confirmation', type: 'password' }
];
