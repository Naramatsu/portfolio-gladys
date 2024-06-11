import { Resend } from "resend";
import EmailTemplate from "../components/EmailTemplate";

export const sendEmail = async (formData) => {
  const { name, email, subject, message } = formData;

  try {
    const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);
    const newSubject = `${subject} - Reach you from your Online Curriculum.`;

    await resend.emails.send({
      from: `${name} <${process.env.REACT_APP_RESEND_EMAIL_FROM}>`,
      to: process.env.REACT_APP_RESEND_EMAIL_TO,
      subject: newSubject,
      react: EmailTemplate({ name, email, message, subject: newSubject }),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    return {
      error: error.message,
      success: false,
    };
  }
};
