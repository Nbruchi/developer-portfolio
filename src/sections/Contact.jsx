import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            emailjs.send(
                "service_xajkub6",
                "template_qz0oats",
                {
                    from_name: form.name,
                    from_email: form.email,
                    to_email: "nbruce420@gmail.com",
                    message: form.message,
                },
                "N1s28lRaTNsWPaVRu"
            );

            setLoading(false);
            alert("Your message has been sent. Thank you!");
            setForm({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <section id="contact" className="c-space my-20">
            <h3 className="head-text">Contact Me</h3>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 min-h-screen"
                />
                <div className="contact-container">
                    <h3 className="head-text">Let&apos;s talk</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Whether you&apos;re looking to build a new website,
                        improve your existing platform, or bring a unique
                        project to life, I&apos;m here to help.
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Email</span>
                            <input
                                type="text"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Your Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi, I wanna give you a job..."
                            />
                        </label>
                        <button
                            className="field-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Message"}
                            <img
                                src="/assets/arrow-up.png"
                                alt="arrow up"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
