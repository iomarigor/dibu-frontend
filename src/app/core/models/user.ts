export interface IUser {
  id: number;
  created_at: any;
  full_name: string;
  email: string;
  id_level_user: number;
  status_id: number;
  updated_at: string;
  username: string;
}

export interface IUserCreation {
  full_name: string;
  email: string;
  id_level_user: number;
  username: string;
  password_confirmation: string;
  password: string;
}

export interface IValidationUser {
  correo: string;
  DNI: number;
}
