import React from "react";
import "../sass/_Contact.scss";

const contact = () => {
  return (
    <>
      <section className="contact" id="Contact">
        <h2>Contact</h2>
        <p>Email: brendenjhampton@gmail.com</p>
        <form>
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

export default contact;
