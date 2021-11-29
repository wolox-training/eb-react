export interface IField {
  label: string;
  key: string;
  type: 'text' | 'password';
  pattern?: { value: RegExp; message: string };
}
