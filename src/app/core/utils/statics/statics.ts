import {IRequirement} from "../../models/announcement";
import {IServices} from "../../models/services";

export const SECTIONS_REQUIREMENTS_ONE: IRequirement[] = [
  {
    nombre: "Código estudiante",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "DNI",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Nombres",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Apellidos",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Sexo",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: "M|F",
    tipo_requisito_id: 4,
    activo: true
  },
  {
    nombre: "Facultad",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Escuela profesional",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Modalidad de ingreso",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Edad",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Correo institucional",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Dirección",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Feha de nacimiento",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Correo personal",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "celular de estudiante",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Celular padre",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Tipo de estudiante",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: "Estudiante|Practicante|Tesista",
    tipo_requisito_id: 4,
    activo: true
  }
];

export const SECTIONS_REQUIREMENTS_TWO: IRequirement[] = [
  {
    nombre: "Departamento de nacimiento",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Provincia de nacimiento",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Distrito de nacimiento",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  }
];

export const SECTIONS_REQUIREMENTS_THREE: IRequirement[] = [
  {
    nombre: "Departamento de procedencia",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Provincia de procedencia",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  },
  {
    nombre: "Distrito de procedencia",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 3,
    activo: true
  }
];

export const SECTIONS_REQUIREMENTS_FOURTH: IRequirement[] = [
  {
    nombre: "Ficha socieconomica",
    descripcion: "Subir una captura de la ficha socieconomica actualizada (servicio social y pag web)",
    url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_FICHA_SOCIECONOMICA_UNAS_2024.pdf",
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Una (01) fotorafia actualizada tamaño carnet y/o pasaporte",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 1,
    activo: true
  },
  {
    nombre: "Suba la captura de su SISFOH vigente",
    descripcion: "Suba la captura de su SISFOH actual, puede obtener la información en la siguiente URL",
    url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_SISFOH.pdf",
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Seleccion su clasificación según su SISFOH vigente",
    descripcion: "Ingrese su clasificación de acuerdo a su SISFOH",
    url_guia: '',
    url_plantilla: '',
    opciones: "POBRE EXTREMO|POBRE|NO POBRE|NO REGISTRA",
    tipo_requisito_id: 4,
    activo: true
  },
  {
    nombre: "Copia de DNI de los padres",
    descripcion: "Subir documento con los DNI de los padres escaneados",
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 1,
    activo: true
  },
  {
    nombre: "Copia de DNI del solicitante",
    descripcion: "Subir documento con los DNI del solicitante escaneado",
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 1,
    activo: true
  }
];

export const SECTIONS_REQUIREMENTS_FIVE: IRequirement[] = [
  {
    nombre: "Solicitud dirigida a la dirección de bienestar universitario",
    descripcion: '',
    url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_SOLICITUD_DIRIGIDA_DBU.pdf",
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Formato de atencion de los servicios de DBU",
    descripcion: "Tener los sello de odontologia, psicopedagogia, centro medico (evaluación medido DBU o certificado medico del minsa) y enfermeria",
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Carta de compromiso de los padres para uso de los servicios solicitados (Menores de edad)",
    descripcion: '',
    url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_PLANTILLA_CARTA_COMPROMISO_PADRES.docx",
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 1,
    activo: true
  },
  {
    nombre: "Carta de compromiso para la asistencia a los talleres de psicopedagogia minimo 03 veces",
    descripcion: '',
    url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_PLANTILLA_CARTA_COMPROMISO_ASISTECIA_TALLERES.docx",
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 1,
    activo: true
  },
  {
    nombre: "Reporte de deudas de tesoreria",
    descripcion: "Solicitar en caja ubicada en pabellon central",
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Certificado domiciliario",
    descripcion: "Certificado donde tu municipalidad valide tu lugar de residencia de tu ciudad de origen",
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Copia de recivo de luz y/o agua los que solicitan por primera vez",
    descripcion: "En caso de no contar con recibo, subir documento que lo acredite",
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Certijoven policiales",
    descripcion: "Antecedentes policiales",
    url_guia: '',
    url_plantilla: '',
    opciones: "No tiene|Si tiene",
    tipo_requisito_id: 4,
    activo: true
  },
  {
    nombre: "Certijoven judiciales",
    descripcion: "Antecedentes judiciales",
    url_guia: '',
    url_plantilla: '',
    opciones: "No tiene|Si tiene",
    tipo_requisito_id: 4,
    activo: true
  },
  {
    nombre: "Certijoven penales",
    descripcion: "Antecedentes penales",
    url_guia: '',
    url_plantilla: '',
    opciones: "No tiene|Si tiene",
    tipo_requisito_id: 4,
    activo: true
  },
  {
    nombre: "Certificado actualizado unico laboral CERTIJOVEN (Pag web del Ministerio de Trabajo)",
    descripcion: '',
    url_guia: "https://www.empleosperu.gob.pe/CertificadoUnicoLaboral/irIndex.html",
    url_plantilla: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_CERTIJOVEN.pdf",
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Constancia vigente del SIS o seguro particular",
    descripcion: "Subir imagen de seguro vigente, puede obtener la información en la siguiente URL",
    url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_SIS.pdf",
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Carne de vacuna antitetanica",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Carne de vacuna antihepatitis",
    descripcion: '',
    url_guia: '',
    url_plantilla: '',
    opciones: '',
    tipo_requisito_id: 2,
    activo: true
  },
  {
    nombre: "Seguro de salud",
    descripcion: "",
    url_guia: '',
    url_plantilla: '',
    opciones: "SIS|EsSalud|Otro seguro",
    tipo_requisito_id: 4,
    activo: true
  }
];

export const Services: IServices[] = [
  {
    title: "Direccion de Bienestar Universitario",
    image: 'assets/img/OBU.png',
    url: "https://portalweb.unas.edu.pe/content/dbu"
  },
  {
    title: "Servicio Social",
    image: 'assets/img/Social.png',
    url: "https://portalweb.unas.edu.pe/content/dbu/servicio-social",
  },

  {
    title: "Topico",
    image: 'assets/img/Topico.png',
    url: "https://portalweb.unas.edu.pe/content/dbu/topico",
  },

  {
    title: "Area de Psicopedagogia",
    image: 'assets/img/Psicopedagogia.png',
    url: "https://portalweb.unas.edu.pe/content/dbu/psicopedagogia",
  },

  {
    title: "Odontologia",
    image: 'assets/img/Odontologia.png',
    url: "https://portalweb.unas.edu.pe/content/dbu/odontologia",
  },

  {
    title: "Comedor Universitario",
    image: 'assets/img/Comedor.png',
    url: "https://portalweb.unas.edu.pe/content/dbu/comedor-universitario",
  },
  {
    title: "Residencia Estudiantil",
    image: 'assets/img/Residencia.png',
    url: "https://portalweb.unas.edu.pe/content/dbu/residencia-estudiantil"
  },
  {
    title: "Complejo Deportivo",
    image: 'assets/img/Complejo.png',
    url: "https://portalweb.unas.edu.pe/content/dbu/complejo-deportivo"
  },
  {
    title: "Becas para Estudio de Pregrado",
    image: 'assets/img/Becas.png',
    url: "https://portalweb.unas.edu.pe/content/becas-pregrado"
  }
]

