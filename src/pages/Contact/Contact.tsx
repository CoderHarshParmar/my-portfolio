
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Contact.css";

// Custom SVG Icons - No lucide-react dependency
type IconName =
  | "mail"
  | "map"
  | "send"
  | "arrow"
  | "github"
  | "linkedin"
  | "instagram"
  | "message"
  | "clock"
  | "check"
  | "sparkles";

type IconProps = {
  name: IconName;
  size?: number;
};

const Icon = ({ name, size = 20 }: IconProps) => {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...common}
    >
      {name === "mail" && (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </>
      )}

      {name === "map" && (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </>
      )}

      {name === "send" && (
        <path d="m22 2-7 20-4-9-9-4 20-7ZM22 2 11 13" />
      )}

      {name === "arrow" && (
        <>
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </>
      )}

      {name === "github" && (
        <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.9 1.4a13.4 13.4 0 0 0-7.1 0C5 1.2 3.8 1.6 3.8 1.6a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
      )}

      {name === "linkedin" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 10v7" />
          <path d="M8 7h.01" />
          <path d="M12 17v-7" />
          <path d="M12 13a3 3 0 0 1 6 0v4" />
        </>
      )}

      {name === "instagram" && (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </>
      )}

      {name === "message" && (
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
      )}

      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </>
      )}

      {name === "check" && (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="m8 12 3 3 5-6" />
        </>
      )}

      {name === "sparkles" && (
        <>
          <path d="m12 3 1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2L12 3Z" />
          <path d="m19 14 1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14Z" />
        </>
      )}
    </svg>
  );
};

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const animation = shouldReduceMotion
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.7 },
      };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSubmitted(false);

    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace this with your actual email address.
    const emailAddress = "your-email@example.com";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Hello,

My name is ${formData.name}.
Email: ${formData.email}

${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const contactDetails = [
    {
      icon: "mail" as const,
      label: "Email Me",
      value: "harshparmar1355@gmail.com",
      link: "mailto:your-email@example.com",
    },
    {
      icon: "map" as const,
      label: "Location",
      value: "Rajkot, Gujarat, India",
      link: "https://www.google.com/maps/search/?api=1&query=Rajkot+Gujarat+India",
    },
    {
      icon: "clock" as const,
      label: "Availability",
      value: "Open to Opportunities",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: "github" as const,
      name: "GitHub",
      url: "https://github.com/",
    },
    {
      icon: "linkedin" as const,
      name: "LinkedIn",
      url: "https://linkedin.com/",
    },
    {
      icon: "instagram" as const,
      name: "Instagram",
      url: "https://instagram.com/",
    },
  ];

  return (
    <main className="contact-page">
      {/* Background */}
      <div className="contact-background">
        <div className="contact-glow contact-glow-one" />
        <div className="contact-glow contact-glow-two" />
        <div className="contact-grid" />
      </div>

      {/* Hero */}
      <section className="contact-hero">
        <motion.div
          className="contact-hero-content"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="contact-eyebrow">
            <Icon name="sparkles" size={15} />
            LET'S CONNECT
          </span>

          <h1>
            Let's Build
            <br />
            Something <span>Amazing.</span>
          </h1>

          <p>
            Have a project idea, collaboration opportunity, or just want to
            say hello? I'd love to hear from you. Let's create something
            meaningful together.
          </p>

          <motion.a
            href="#contact-form"
            className="contact-hero-button"
            whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
          >
            Start a Conversation
            <Icon name="arrow" size={18} />
          </motion.a>
        </motion.div>

        <motion.div
          className="contact-hero-art"
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="contact-orbit orbit-one" />
          <div className="contact-orbit orbit-two" />

          <div className="contact-art-circle">
            <Icon name="message" size={78} />
            <span className="art-spark spark-one">✦</span>
            <span className="art-spark spark-two">✧</span>
          </div>

          <div className="floating-contact floating-contact-one">
            <Icon name="mail" size={19} />
          </div>

          <div className="floating-contact floating-contact-two">
            <Icon name="send" size={19} />
          </div>
        </motion.div>
      </section>

      {/* Contact Details */}
      <section className="contact-details-section">
        <motion.div className="contact-section-heading" {...animation}>
          <span>GET IN TOUCH</span>
          <h2>
            Let's Connect <span>Directly</span>
          </h2>
          <p>Choose your preferred way to reach me.</p>
        </motion.div>

        <div className="contact-details-grid">
          {contactDetails.map((item, index) => (
            <motion.div
              className="contact-detail-card"
              key={item.label}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={shouldReduceMotion ? {} : { y: -8 }}
            >
              <div className="contact-detail-icon">
                <Icon name={item.icon} size={24} />
              </div>

              <span>{item.label}</span>

              {item.link ? (
                <a
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  {item.value}
                  <Icon name="arrow" size={15} />
                </a>
              ) : (
                <h3>{item.value}</h3>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section" id="contact-form">
        <div className="contact-form-layout">
          <motion.div className="contact-form-info" {...animation}>
            <span className="contact-eyebrow">
              <Icon name="sparkles" size={14} />
              HAVE A PROJECT?
            </span>

            <h2>
              Tell Me About
              <br />
              Your <span>Ideas.</span>
            </h2>

            <p>
              Every great project starts with a conversation. Share your
              thoughts, and let's explore what's possible.
            </p>

            <div className="contact-form-note">
              <div className="note-icon">
                <Icon name="check" size={20} />
              </div>

              <div>
                <h4>Let's make it happen</h4>
                <p>
                  I'm always excited to explore new ideas and opportunities.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={shouldReduceMotion ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-input-row">
              <div className="contact-input-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength={2}
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-email">Your Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-input-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-input-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or idea..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                minLength={10}
              />
            </div>

            <button type="submit" className="contact-submit-button">
              Send Message
              <Icon name="send" size={17} />
            </button>

            {submitted && (
              <p className="contact-success">
                <Icon name="check" size={17} />
                Your email app should open with your message.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Social Links */}
      <section className="contact-social-section">
        <motion.div {...animation}>
          <span>FIND ME ONLINE</span>
          <h2>
            Let's Stay <span>Connected.</span>
          </h2>
          <p>Follow my journey, explore my work, and connect with me.</p>
        </motion.div>

        <div className="contact-social-grid">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="contact-social-card"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={shouldReduceMotion ? {} : { y: -7, scale: 1.03 }}
            >
              <Icon name={social.icon} size={25} />
              <span>{social.name}</span>
              <Icon name="arrow" size={17} />
            </motion.a>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="contact-bottom">
        <motion.div {...animation}>
          <span>HAVE SOMETHING IN MIND?</span>
          <h2>Let's Create Your Next Big Thing.</h2>

          <a href="mailto:your-email@example.com">
            Say Hello
            <Icon name="arrow" size={18} />
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Contact;
