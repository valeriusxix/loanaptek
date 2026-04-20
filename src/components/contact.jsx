import React from "react";
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-container">
                <h1>Contact Us</h1>
                <p>We're here to help! Reach out anytime.</p>
            </div>
                
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p>Email: support@loanapp.com</p>
                        <p>Phone: +1(555) 123-4567 </p>
                        <p>Hours: Mon-Fri, 9AM-5PM EST</p>
                    </div>

                    <div className="contact-form">
                        <form>
                            <input type="text" placeholder="Your Name" required />
                            <input type="email" placeholder="Your Email" required />
                            <textarea placeholder="Your Message" required></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
        </div>
    );
};

export default Contact;