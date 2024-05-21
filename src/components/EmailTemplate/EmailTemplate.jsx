import React from "react";
import { Heading, Html, Text } from "@react-email/components";

const EmailTemplate = ({ name, subject, email, message }) => {
  return (
    <Html lang="en">
      <Heading as="h1">Nuevo mensaje desde el Portafolio virtual</Heading>
      <Text>Detalle: ${subject}</Text>
      <Text>Nombre del remitente: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Mensaje: {message}</Text>
    </Html>
  );
};

export default EmailTemplate;
