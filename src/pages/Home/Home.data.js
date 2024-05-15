import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export const selfSummaryLabel = "AUTORESUMEN";
export const experienceLabel = "Experiencia";
export const educationLabel = "Educación";
export const profilesLabel = "Perfiles";
export const socialMediaLabel = "Redes sociales";
export const worksLabel = "Trabajos";

export const selfSummary = (
  <p>
    Comunicadora social apasionada y estratégica con habilidades excepcionales
    en el ámbito digital. Centrada en promover el crecimiento de las comunidades
    en redes sociales.
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
    date: "2007 - 2017",
    position: "Community Manager",
    company: "Funencanto",
  },
  {
    date: "2007 - 2017",
    position: "Community Manager",
    company: "Kaua Edificio",
  },
];

export const educationList = [
  {
    date: "2007 - 2017",
    title: "Comunicadora Social",
    entity: "Universidad de Cartagena",
  },
  {
    date: "2007 - 2017",
    title: "Bachiller Academico",
    entity: "Institución Educativa Docente de Turbaco",
  },
];

export const socialMediaList = [
  {
    icon: <FaInstagram />,
    link: "/",
  },
  {
    icon: <FaFacebookF />,
    link: "/",
  },
  {
    icon: <FaLinkedinIn />,
    link: "/",
  },
  {
    icon: <FaWhatsapp />,
    link: "/",
  },
];
