export interface User {
  name: string;
  documentNumber: string;
  documentType: string;
  email: string;
  password: string;
  rol: 'admin' | 'user';
}
