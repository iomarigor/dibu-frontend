export interface IStatistics {
  sexo: ISex;
  facultades: IFaculty;
  escuelas_profesionales: IProfessionalsSchool
  estados_solicitud: IRequestStatus;
}

export interface ISex {
  num_hombres: number;
  num_mujeres: number;
}

export interface IFaculty {
  "FACULTAD DE AGRONOMIA": number;
  "FACULTAD DE CIENCIAS CONTABLES": number;
  "FACULTAD DE CIENCIAS ECONOMICAS Y ADMINISTRATIVAS": number;
  "FACULTAD DE INGENIERIA EN INDUSTRIAS ALIMENTARIAS": number;
  "FACULTAD DE INGENIERIA EN INFORMATICA Y SISTEMAS": number;
  "FACULTAD DE INGENIERIA MECANICA ELECTRICA": number;
  "FACULTAD DE RECURSOS NATURALES RENOVABLES": number;
  "FACULTAD DE ZOOTECNIA": number;
}

export interface IRequestStatus {
  pendiente: number;
  rechazado: number;
  aceptado: number;
  aprobado: number;
}

export interface IProfessionalsSchool {
  "ADMINISTRACION": number;
  "AGRONOMIA": number;
  "CONTABILIDAD": number;
  "ECONOMIA": number;
  "INGENIERIA AMBIENTAL": number;
  "INGENIERIA EN CONSERVACION DE SUELOS Y AGUA": number;
  "INGENIERIA EN INDUSTRIAS ALIMENTARIAS": number;
  "INGENIERIA EN INFORMATICA Y SISTEMAS": number;
  "INGENIERIA EN RECURSOS NATURALES RENOVABLES": number;
  "INGENIERIA FORESTAL": number;
  "INGENIERIA MECANICA ELECTRICA": number;
  "ZOOTECNIA": number;
}
