import React from 'react';
import Navbar from '../Navbar';
import contacsty from "./Contact.module.css";
import Footerrr from '../Footerrr';

const Contact = () => {
  return (
    <div> 
      <Navbar/>
      <div className={contacsty.between}>
        <h3>
          <span style={{ color: "#FF6F61", fontSize: "35px" }}> Contact</span> 
          <span style={{ color: "#FF6F61", fontSize: "35px" }}> US </span>
        </h3>
        <p>Thank you for your interest in 
          <span style={{ color: "#FF6F61", fontSize: "35px" }}> US </span>! 
          We're thrilled to hear from you and are here to assist you with any inquiries you may have. Whether you have questions about our products, need assistance with an order, or simply want to say hello, we're just a message away.
        </p>
        <ul>
          <details>
            <summary>Contact information .. </summary>
            <li><a href="tel:+201091003211"  className={contacsty.callus}>Call Us</a></li>
            <li><a href="mailto:abdelrahmaanelshaeer@yahoo.com"  className={contacsty.callus}>Email</a></li>
            <li>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.502353734202!2d31.347073075390938!3d30.051131774920147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583faf5c4becff%3A0x94ea3ad624879315!2sAMIT!5e0!3m2!1sen!2seg!4v1713759249580!5m2!1sen!2seg" 
                width="600" 
                height="450" 
                style={{ border: "0" }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </li>
            <li>
              <span style={{ textShadow: "#FF6F61", fontSize: "28px" , color:"white" }}>
                "We appreciate your time and look forward to hearing from you soon :)"
              </span>
            </li>
          </details>
        </ul>
      </div>
      <Footerrr/>
    </div>
  );
}

export default Contact;
