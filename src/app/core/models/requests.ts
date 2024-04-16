export interface IRequest {
  id: number;
  fecha_solicitud: string;
  convocatoria_id: number;
  alumno: IStudent;
  servicios_solicitados: IServicesRequests[];
  detalle_solicitudes: ISectionsRequest[];
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


export interface IBodyRequest {
  convocatoria_id: number;
  alumno_id: number;
  servicios_solicitados: IServiceRequest[];
  detalle_solicitudes: IDetailRequest[];
}

export interface IServiceRequest {
  estado: string;
  servicio_id: number;
  detalle_rechazo?: string;
}

export interface IDetailRequest {
  respuesta_formulario: string | null;
  url_documento: string | null;
  opcion_seleccion: string | null;
  requisito_id: number;
}

export interface IFileRequest {
  id_convocatoria: number;
  dni_alumno: number;
  name_file: string;
  file: string;
}

export interface IResponseFile {
  url_file: string;
}

export interface ISectionsRequest {
  id: number;
  descripcion: string;
  convocatoria_id: 1,
  created_at: string;
  updated_at: string;
  requisitos: IRequirementsRequest[];
}

export interface IRequirementsRequest {
  id: number;
  nombre: string;
  descripcion: string;
  url_guia: string;
  url_plantilla: string;
  opciones: string;
  tipo_requisito_id: number;
  seccion_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  respuesta: IResponseRequest;
}

export interface IResponseRequest {
  id: number;
  respuesta_formulario: string;
  url_documento: string;
  opcion_seleccion: string;
  solicitud_id: number;
  requisito_id: number;
  created_at: string;
  updated_at: string;
}

export interface IUpdateService {
  solicitud_id: number;
  servicios: IServiceRequest[];
}

export interface IErrorPostulation {
  tipo: string;
  msg: string;
}

export interface IStatusRequest {
  id: number;
  estado: string;
  fecha_revision: string;
  servicio_id: number;
  solicitud_id: number;
  detalle_rechazo: string;
  created_at: string;
  updated_at: string;
  servicio: {
    id: number;
    nombre: string;
  }
}
