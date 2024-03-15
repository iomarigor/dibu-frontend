export interface Login {
  username: string;
  password: string;
}

export interface IDetailSession {
  id: number;
  username: string;
  full_name: string;
  email: string;
  id_level_user: number;
  status_id: number;
  created_at: any;
  updated_at: string;
  expirer_in: number;
  token: string;
}

export interface IToken {
  iss: string;
  iat: number;
  exp: number;
  nbf: number;
  jti: string;
  sub: number;
  prv: string;
}

export interface ISession {
  id: number;
  username: string;
  full_name: string;
  email: string;
  id_level_user: number;
  status_id: number;
  created_at: any;
  updated_at: string;
  expired_in: number;
}
