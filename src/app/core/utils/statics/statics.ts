import {IServices} from "../../models/services";

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
];

export const FILE_MAX_SIZE = 10 * 1024 * 1024;

export const PDF_TYPE = 'application/pdf';

export const IMG_TYPE = ['image/jpeg', 'image/png', 'image/jpg'];

export const ValidateFileType = (file: File, typeFile: number): boolean => {
  if (typeFile === 1) return file.type === PDF_TYPE;

  return IMG_TYPE.includes(file.type);
}
