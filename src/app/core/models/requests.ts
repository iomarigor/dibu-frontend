export interface IRequest {
  id: number;
  fecha_solicitud: string;
  convocatoria_id: number;
  alumno: IStudent;
  "servicios_solicitados": IServicesRequests[];
  "detalle_solicitudes": IResponseRequirements[];
}

export interface IStudent {
  id: number;
  codigo_estudiante: string;
  DNI: string;
  nombres: string;
  apellido_paterno: string;
  apellido_materno: string;
  sexo: string;
  facultad: string;
  escuela_profesional: string;
  modalidad_ingreso: string;
  lugar_procedencia: string;
  lugar_nacimiento: string;
  edad: number;
  correo_institucional: string;
  direccion: string;
  fecha_nacimiento: string;
  correo_personal: string;
  celular_estudiante: string;
  celular_padre: string;
}

export interface IServicesRequests {
  id: number;
  estado: string;
  servicio_id: number;
  solicitud_id: number;
  servicio: IServiceDetail;
}

export interface IServiceDetail {
  id: number;
  nombre: string;
  descripcion: string;
}

export interface IResponseRequirements {
  id: number;
  respuesta_formulario: string;
  url_documento: string;
  opcion_seleccion: string;
  requisito: string;
}