import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import SummarySquare from "../../components/SummarySquare";
import {
  contactInfoLabel,
  contactInfoList,
  contactmeLabel,
  formFields,
  formTextareaMessageLabel,
  letsWorkTogether,
  sendMessageLabel,
  socialMediaLabel,
} from "./ContactMe.data";
import "./ContactMe.style.scss";
import { SlMagicWand } from "react-icons/sl";

import { sendEmail } from "../../api/email";
import { whatsAppLink } from "../../constants";

const formDataInitialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactMe = () => {
  const [formData, setFormData] = useState(formDataInitialState);

  const handlerText = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlerSubmmit = async () => {
    await sendEmail(formData);
  };

  return (
    <main className="contactme" id="contactme">
      <h2>{contactmeLabel}</h2>
      <Container className="contactme-container">
        <section className="contact-info">
          <h4>{contactInfoLabel}</h4>
          {contactInfoList.map(({ icon, name, label }, index) => (
            <section key={index} className="contact-info-section">
              {icon}
              <section className="contact-info-section-caption">
                <h5>{name}</h5>
                <p>{label}</p>
              </section>
            </section>
          ))}
          <h4>{socialMediaLabel}</h4>
          <section className="contact-info-social">
            <a
              href="https://www.linkedin.com/in/gladys-paola-mendoza-d%C3%ADaz-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a href={whatsAppLink} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </section>
        </section>
        <section className="contact-email-form">
          <SummarySquare className="card">
            <SlMagicWand className="magic" />
            {letsWorkTogether}
            <section className="contact-email-form-container">
              {formFields.map(({ label, type, name, placeholder }, index) => (
                <section key={index} className="form-field">
                  {label}
                  <input
                    type={type}
                    value={formData[name]}
                    name={name}
                    placeholder={placeholder}
                    onChange={handlerText}
                  />
                </section>
              ))}
              <section className="form-field">
                {formTextareaMessageLabel}
                <textarea
                  value={formData.message}
                  name="message"
                  placeholder="Mensaje"
                  onChange={handlerText}
                />
              </section>
              <button onClick={handlerSubmmit}>{sendMessageLabel}</button>
            </section>
          </SummarySquare>
        </section>
      </Container>
    </main>
  );
};

export default ContactMe;
