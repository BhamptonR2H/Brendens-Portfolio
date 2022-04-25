import React, { useRef } from "react";
import "../sass/_Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5q3oyco",
      "template_1hupy7v",
      form.current,
      "i6_9mu4IYDJvmG4oY"
    );
    alert("Thank you for submitting a message.");
    e.target.reset();
  };
  const form = useRef();
  return (
    <>
      <section className="contact" id="Contact">
        <h2>Contact</h2>
        <p>Email: brendenjhampton@gmail.com</p>
        <form ref={form} onSubmit={sendEmail}>
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Name"
            required
          />
          <input
            name="email"
            type="text"
            class="feedback-input"
            placeholder="Email"
            required
          />
          <textarea
            name="text"
            class="feedback-input"
            placeholder="Comment"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </section>
    </>
  );
};

export default Contact;
