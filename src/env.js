(function (window) {
  window.__env = window.__env || {};
  window.__env.API_DBU = "https://dbu-dev.dimo-app.com/backend";
  // window.__env.API_DBU = "https://bienestar.unas.edu.pe/backend";
  window.__env.API_CAJA = "https://tesoreria.unas.edu.pe";

  window.__env.SECTIONS_REQUIREMENTS_ONE = [
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
      nombre: "Dirección",
      descripcion: '',
      url_guia: '',
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 3,
      activo: true
    },
    {
      nombre: "Fecha de nacimiento",
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
      nombre: "Tipo de estudiante",
      descripcion: '',
      url_guia: '',
      url_plantilla: '',
      opciones: "Estudiante|Practicante|Tesista",
      tipo_requisito_id: 4,
      activo: true
    }
  ];

  window.__env.SECTIONS_REQUIREMENTS_TWO = [
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

  window.__env.SECTIONS_REQUIREMENTS_THREE = [
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

  window.__env.SECTIONS_REQUIREMENTS_FOURTH = [
    {
      nombre: "Solicitud dirigida a la dirección de bienestar universitario",
      descripcion: "Adquirir en caja - UNAS",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_SOLICITUD_DIRIGIDA_DBU.pdf",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Reporte de deudas de tesoreria / Ingresantes constancia de matricula)",
      descripcion: "Solicitar en caja ubicada en pabellon central caja - UNAS / Solicitar en Dirección de Asuntos Academicos DIAA",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_REPORTE_DEUDA.jpg",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Carta de compromiso de los padres para uso de los servicios solicitados (Menores de edad)",
      descripcion: "Llenar el formato de acuerdo a la guia",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_PLANTILLA_CARTA_COMPROMISO_PADRES.docx",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    }
  ];

  window.__env.SECTIONS_REQUIREMENTS_FIVE = [
    {
      nombre: "Ficha socioeconómica",
      descripcion: "Subir una captura de la ficha socioeconómica actualizada (servicio social y pag web)",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_FICHA_SOCIECONOMICA_UNAS_2024.pdf",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Un (01) fotografia actualizada",
      descripcion: "Tamaño carnet y/o pasaporte",
      url_guia:
        "https://academico.unas.edu.pe/resources/Photos/Students/2021/UNAS002018061774761761.jpg",
      url_plantilla: "",
      opciones: "",
      tipo_requisito_id: 2,
      activo: true,
    },
    {
      nombre: "SISFOH (Clasificación socioeconómica) vigente",
      descripcion: "Subir el documento generado por la pagina web de SISFOH en la siguiente guia",
      url_guia: "https://operaciones.sisfoh.gob.pe:450/cse/",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Clasificación según su SISFOH vigente",
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
    },
    {
      nombre: "Certificado domiciliario",
      descripcion: "Certificado firmado por alguna autoridad de tu lugar de procedencia",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_CERTIFICADO_DOMICILIARIO.png",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Copia de recibo de luz y/o agua los que solicitan por primera vez",
      descripcion: "En caso de no contar con recibo, subir documento que lo acredite",
      url_guia: '',
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    }
  ];

  window.__env.SECTIONS_REQUIREMENTS_SIX = [
    {
      nombre: "Seguro de salud",
      descripcion: "Seleccionar su tipo de seguro",
      url_guia: '',
      url_plantilla: '',
      opciones: "SIS|EsSalud|Otro seguro",
      tipo_requisito_id: 4,
      activo: true
    },
    {
      nombre: "Constancia vigente (SIS, EsSalud, Otro)",
      descripcion: "Subir imagen de seguro vigente, puede obtener la información en la siguiente guia",
      url_guia: "http://app.sis.gob.pe/SisConsultaEnLinea/Consulta/frmConsultaEnLinea.aspx",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Carnet de vacuna antitetanica o Carta de compromiso (sello enfermeria)",
      descripcion: "subir fotografia del carnet de vacunación o carta de compromiso",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_CARTA_COMPROMISO_REGULARIZAR.jpg",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Carnet de vacuna antihepatitis o Carta de compromiso (sello enfermeria)",
      descripcion: "subir fotografia del carnet de vacunación o carta de compromiso",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_CARTA_COMPROMISO_REGULARIZAR.jpg",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Formato de atencion de los servicios de DBU",
      descripcion: "Tener los sello de odontologia, psicopedagogia y centro medico.",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_CONTANCIA_EVALUACION.jpg",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    },
    {
      nombre: "Carta de compromiso para la asistencia a los talleres de psicopedagogia minimo 03 veces",
      descripcion: "Llenar el formato de acuerdo a la guia",
      url_guia: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_PLANTILLA_CARTA_COMPROMISO_ASISTECIA_TALLERES.pdf",
      url_plantilla: '',
      opciones: '',
      tipo_requisito_id: 1,
      activo: true
    }
  ];

  window.__env.SECTIONS_REQUIREMENTS_SEVEN = [
    {
      nombre: "Certificado unico laboral actualizado CERTIJOVEN (Pag web del Ministerio de Trabajo)",
      descripcion: "Subir el documento generano por la pagina web para obtener su CERTIJOVEN en la siguiente guia",
      url_guia: "https://www.empleosperu.gob.pe/portal-mtpe/#/nuevo-usuario",
      url_plantilla: "https://bienestar.unas.edu.pe/backend/storage/app/guias/1_GUIA_CERTIJOVEN.pdf",
      opciones: '',
      tipo_requisito_id: 1,
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
    }
  ];

  window.__env.GOOGLE_RECAPTCHA_SITEKEY = "6LeHadskAAAAADv1LgwVU2Xe9sOQqiRt2Sfkr-5-";

  window.__env.enableDebug = true;
})(this);
