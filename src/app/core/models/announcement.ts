export interface IAnnouncement {
  fecha_inicio: string;
  fecha_fin: string;
  nombre: string;
  convocatoria_servicio: IService[];
  secciones: ISection[];
  activo: boolean;
}

export interface IService {
  servicio_id: number;
  cantidad: number;
}

export interface ISection {
  descripcion: string;
  requisitos: IRequirement[];
}

export interface IRequirement {
  nombre: string;
  descripcion: string;
  url_guia: string;
  tipo_requisito_id: number;
  activo: boolean;
}

//1= documento  2=Imagen 3=Formulario