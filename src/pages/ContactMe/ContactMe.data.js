import { BsFillGeoAltFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const contactmeLabel = "Contacta me";
export const contactInfoLabel = "Informacion de contacto";
export const socialMediaLabel = "Redes sociales";

export const letsWorkTogether = (
  <h3>
    Trabajemos <span>Juntos</span>
  </h3>
);

export const contactInfoList = [
  {
    icon: <MdOutlineEmail />,
    name: "Email",
    label: "Glays.mendoza@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    name: "Telefono",
    label: "(+57) 300 000 0000",
  },
  {
    icon: <BsFillGeoAltFill />,
    name: "Localizacion",
    label: "Colombia. Cartagena",
  },
];

export const formFields = [
  {
    label: (
      <label>
        Nombre <span>(requerido)</span>
      </label>
    ),
    type: "text",
    name: "name",
    placeholder: "Tu nombre",
  },
  {
    label: (
      <label>
        Email <span>(requerido)</span>
      </label>
    ),
    type: "email",
    name: "email",
    placeholder: "Tu correo",
  },
  {
    label: (
      <label>
        Asunto <span>(requerido)</span>
      </label>
    ),
    type: "text",
    name: "subject",
    placeholder: "Asunto del correo",
  },
];

export const formTextareaMessageLabel = (
  <label>
    Mensaje <span>(requerido)</span>
  </label>
);

export const sendMessageLabel = "Enviar Mensaje";
