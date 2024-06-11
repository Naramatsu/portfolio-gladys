import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { whatsAppLink } from "../../constants";

export const selfSummaryLabel = "RESUMEN";
export const experienceLabel = "Experiencia";
export const educationLabel = "Educación";
export const profilesLabel = "Perfiles";
export const socialMediaLabel = "Redes sociales";
export const worksLabel = "Trabajos";

export const selfSummary = (
  <p>
    Comunicadora social apasionada y estratégica con habilidades en marketing
    digital. Centrada en promover el crecimiento de las comunidades en redes
    sociales.
  </p>
);

export const letsWork = (
  <h2 className="lets-work">
    ¡Vamos!
    <br />
    Trabajemos <span> Juntos.</span>
  </h2>
);

export const experienceList = [
  {
    date: "Actual",
    position: "Community Manager",
    company: "Freelancer",
    duties: [
      "Creación de parrilla orgánica.",
      "Investigar e implementar tendencias.",
      "Evaluación y monitoreo de pautas en Facebook ADS.",
    ],
  },
  {
    date: "Nov 2022 - Dic 2023",
    position: "Estratega de Contenido Digital",
    company: "BavPublicidad",
    duties: [
      "Apoyo en crear estrategia de RRSS.",
      "Investigar e implementar las tendencias de RRSS.",
      "Monitoreo en la actualización de las cuentas.",
      "Generación de contenido y evaluación del diseño de email marketing y blog.",
      "Acompañamiento, evaluación, control y monitoreo de pautas.",
      "Manejo de Canva y Capcut.",
    ],
  },
  {
    date: "Feb 2021 - Oct 2021",
    position: "Community Manager",
    company: "Zona Norte El Periódico",
    duties: [
      "Creación de contenido y manejo de RRSS",
      "Redacción y organización de notas informativas.",
      "Actualización de la lista de contactos de las fuentes.",
    ],
  },
  {
    date: " ",
    position: "Experiencia Social",
    company: "Fundación Dame Esos 5",
    duties: [
      "Creación y edición de contenido para los proyectos sociales realizados por la fundación.",
      "Apoyo para la creación de estrategias para mayor alcance en las RRSS.",
    ],
  },
  {
    date: " ",
    position: "Líder de Comunicaciones",
    company: "Colectivo Guerreras Yurbaco",
    duties: [
      "Creación de la parrilla orgánica.",
      "Grabación de los proyectos realizados por el colectivo.",
      "Investigar y analizar las tendencias de RRSS.",
      "Diseño de fotografía y videos para la Tienda Turística y Artesanal Guerreras Yurbaco.",
    ],
  },
];

export const educationList = [
  {
    date: "2023",
    title: "Comunicadora Social",
    entity: "Universidad de Cartagena.",
  },
  {
    date: "2012",
    title: "Bachiller",
    entity: "Institución Educativa Técnica Crisanto Luque",
  },
];

export const socialMediaList = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/gladys-paola-mendoza-d%C3%ADaz-/",
  },
  {
    icon: <FaWhatsapp />,
    link: whatsAppLink,
  },
];
