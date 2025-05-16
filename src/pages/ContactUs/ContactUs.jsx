import { Link } from "react-router-dom";
import "./contactUs.css";

export default function ContactUs() {
    return (
        <div className="contact-us-page" >
            <section id="head-section">
                <header>
                    <h2>Contact Us</h2>
                </header>
                <p>
                    Feel free to contact us with any questions or concerns. You
                    can use the form on our website or email us directly. We
                    appreciate your interest and look forward to hearing from
                    you.
                </p>
            </section>

            <section
                id="formsection"
                style={{
                    background:
                        "linear-gradient(0deg, rgb(255, 0, 0), rgb(255, 255, 255))"
                }}
            >
                <form
                    action="https://formsubmit.co/padhanbenu96@gmail.com"
                    method="POST"
                >
                    <div className="form-group">
                        <label htmlFor="fullname">Full Name:</label>
                        <input
                            type="text"
                            name="name"
                            id="fullname"
                            required
                            placeholder="Full Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email<sup>*</sup>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            placeholder="Your Message"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>

            <section id="details">
                <section>
                    <header>
                        <h3>Contacts</h3>
                    </header>
                    <p>baatdekha@gmail.com</p>
                    <p>768-202-2188</p>
                </section>
                <section>
                    <header>
                        <h3>Address</h3>
                    </header>
                    <p>Raghunathpali, Kolabira</p>
                    <p>NH49, Jharsuguda, 768213</p>
                </section>
                <section>
                    <header>
                        <h3>Opening Hours</h3>
                    </header>
                    <p>Monday - Friday: 9:00 A.M - 06:00 P.M</p>
                    <p>Saturday: 9:00 A.M - 01:00 P.M</p>
                    <p>Sunday: Closed</p>
                </section>
            </section>

            <section id="map">
                <div>
                    <iframe
                        className="grid-map__frame"
                        width="100%"
                        height="100%"
                        src="https://maps.google.com/maps?q=jharsuguda,%20768213&t=m&z=13&ie=UTF8&output=embed"
                        title="Location Map"
                    ></iframe>
                </div>
            </section>
        </div>
    );
}
