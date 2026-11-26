
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Code2,
  Sparkles,
  Braces,
  Monitor,
  Database,
  Palette,
  Smartphone,
  Globe,
  CheckCircle2,
  Send,
  Layers,
  Zap,
} from "lucide-react";

import "./Home.css";

// ==========================================
// DATA
// ==========================================

const roles = [
  "Full Stack MERN Developer",
  "Frontend Developer",
  "React.js Developer",
  "Creative Problem Solver",
];

const technologies = [
  { name: "React.js", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Globe },
  { name: "Express.js", icon: Layers },
  { name: "MongoDB", icon: Database },
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Palette },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Android", icon: Smartphone },
  { name: "Kotlin", icon: Code2 },
  { name: "Java", icon: Code2 },
  { name: "Git", icon: Code2 },
  { name: "GitHub", icon: Code2 },
];

const projects = [
  {
    number: "01",
    title: "PrettyFingers",
    category: "MERN Stack Development",
    description:
      "A modern nail salon management platform featuring appointment booking, customer management, services, and an elegant user experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    icon: Sparkles,
    color: "project-pink",
    link: "#",
  },
  {
    number: "02",
    title: "Nailora",
    category: "Full Stack Web Application",
    description:
      "A premium nail salon web experience with public, user, and admin panels designed for smooth salon management.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    icon: Palette,
    color: "project-purple",
    link: "#",
  },
  {
    number: "03",
    title: "Personal Portfolio",
    category: "Frontend Development",
    description:
      "A creative developer portfolio showcasing my journey, technical skills, projects, and passion for building digital products.",
    technologies: ["React", "TypeScript", "CSS", "Framer Motion"],
    icon: Monitor,
    color: "project-blue",
    link: "#",
  },
];

const strengths = [
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Building visually appealing interfaces with attention to detail.",
  },
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "Writing structured, reusable, and maintainable code.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Creating smooth experiences across mobile, tablet, and desktop.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    description:
      "Always exploring new technologies and improving my skills.",
  },
];

// Update these links with your actual social profiles.
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/CoderHarshParmar",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-username",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/your-username",
  },
];

// ==========================================
// SOCIAL MEDIA SVG LOGOS
// ==========================================

type SocialLogoProps = {
  name: string;
};

const SocialLogo = ({ name }: SocialLogoProps) => {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": true as const,
  };

  if (name === "GitHub") {
    return (
      <svg {...commonProps}>
        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.62 1.22 3.26.93.1-.73.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.16-2.99-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.1-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.11 2.96.73.78 1.16 1.77 1.16 2.99 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z" />
      </svg>
    );
  }

  if (name === "LinkedIn") {
    return (
      <svg {...commonProps}>
        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.97V9.35h2.96v9.55ZM6.45 8.04a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19.03 18.9h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.77V9.35h2.84v1.3h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.58 1.97 3.58 4.53v5.27Z" />
      </svg>
    );
  }

  if (name === "Instagram") {
    return (
      <svg
        {...commonProps}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    );
  }

  return null;
};

// ==========================================
// ANIMATION VARIANTS
// ==========================================

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

// ==========================================
// HOME COMPONENT
// ==========================================

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setRoleIndex((previous) => (previous + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <main className="home-page">

      {/* =====================================
          HERO SECTION
      ====================================== */}

      <section className="hero-section" id="home">
        <div className="hero-container container">

          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="hero-availability"
              variants={itemVariants}
            >
              <span className="availability-dot" />
              WELCOME TO MY DIGITAL WORLD
            </motion.div>

            <motion.p
              className="hero-greeting"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              className="hero-title"
              variants={itemVariants}
            >
              Harsh<span className="hero-period">.</span>
              <br />
              <span className="hero-title-outline">
                I Build Digital
              </span>
              <br />
              <span className="gradient-text">
                Experiences.
              </span>
            </motion.h1>

            <motion.div
              className="hero-role"
              variants={itemVariants}
            >
              <span className="role-prefix">I'm a</span>

              <motion.span
                key={roleIndex}
                className="role-text"
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 15 }
                }
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </motion.div>

            <motion.p
              className="hero-description"
              variants={itemVariants}
            >
              I build modern, scalable, and interactive web
              experiences by combining creative design with
              powerful technology. Turning ideas into meaningful
              digital products is what drives me.
            </motion.p>

            <motion.div
              className="hero-buttons"
              variants={itemVariants}
            >
              <Link to="/work" className="hero-btn primary-btn">
                Explore My Work <ArrowUpRight size={19} />
              </Link>

              <Link to="/contact" className="hero-btn secondary-btn">
                Let's Talk <ArrowRight size={18} />
              </Link>
            </motion.div>

           <motion.a
              href="/resume/HARSH_PARMAR_RESUME.pdf"
              download="HARSH_PARMAR_RESUME.pdf"
              className="hero-resume"
              variants={itemVariants}
            >
              <Download size={16} />
              Download Resume
           </motion.a>

            <motion.div
              className="hero-socials"
              variants={itemVariants}
            >
              <span className="social-label">
                FOLLOW MY JOURNEY
              </span>

              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <SocialLogo name={social.name} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}

          <motion.div
            className="hero-visual"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, scale: 0.8, x: 40 }
            }
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="visual-glow" />

            <motion.div
              className="visual-ring ring-one"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="visual-ring ring-two"
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <motion.div
              className="hero-core"
              animate={reduceMotion ? {} : { y: [0, -14, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="core-top">
                <span className="core-dot" />
                <span className="core-dot" />
                <span className="core-dot" />
                <span className="core-label">
                  DEVELOPER MODE
                </span>
              </div>

              <div className="core-content">
                <div className="core-icon">
                  <Code2 size={48} strokeWidth={1.4} />
                </div>

                <h2>Code.</h2>
                <h2 className="gradient-text">Create.</h2>
                <h2>Innovate.</h2>

                <p>
                  Building the future, one line at a time.
                </p>
              </div>

              <div className="core-bottom">
                <span>FULL STACK</span>
                <span className="core-status">
                  <span /> ONLINE
                </span>
              </div>
            </motion.div>

            {technologies.slice(0, 6).map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  className={`floating-tech tech-position-${index + 1}`}
                  animate={reduceMotion ? {} : { y: [0, -12, 0] }}
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                  title={tech.name}
                >
                  <Icon size={24} />
                  <span>{tech.name}</span>
                </motion.div>
              );
            })}

            <motion.div
              className="floating-badge badge-code"
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Braces size={18} />
              <span>Clean Code</span>
            </motion.div>

            <motion.div
              className="floating-badge badge-creative"
              animate={reduceMotion ? {} : { y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Sparkles size={17} />
              <span>Creative Mind</span>
            </motion.div>
          </motion.div>
        </div>

        <a href="#about" className="hero-scroll">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={16} />
        </a>

        <div className="hero-bottom-line" />
      </section>

      {/* =====================================
          ABOUT ME
      ====================================== */}

      <section className="section about-section" id="about">
        <div className="container">

          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.span
              className="section-eyebrow"
              variants={itemVariants}
            >
              GET TO KNOW ME
            </motion.span>

            <motion.h2 variants={itemVariants}>
              A Little About <span className="gradient-text">Me.</span>
            </motion.h2>

            <motion.p variants={itemVariants}>
              Passionate about technology, creativity, and
              building meaningful digital experiences.
            </motion.p>
          </motion.div>

          <div className="about-grid">

            <motion.div
              className="about-main-card"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="about-card-label">
                MY JOURNEY
              </span>

              <h3>
                Turning Ideas Into
                <span className="gradient-text">
                  {" "}Digital Reality.
                </span>
              </h3>

              <p>
                I'm Harsh, a passionate web developer who
                enjoys creating beautiful, functional, and
                user-friendly websites.
              </p>

              <p>
                My journey in web development is driven by
                curiosity, continuous learning, and the
                excitement of solving real-world problems
                through code.
              </p>

              <p>
                I enjoy working with modern frontend
                technologies and full-stack tools to transform
                creative ideas into practical applications.
              </p>

              <Link to="/about" className="text-link">
                Discover My Journey <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="about-side-card"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-decoration">
                <Code2 size={45} />
              </div>

              <span className="about-card-label">
                MY MINDSET
              </span>

              <h3>Learn. Build. Improve. Repeat.</h3>

              <p>
                Every project is an opportunity to learn
                something new, challenge myself, and create
                something better.
              </p>

              <div className="about-check">
                <CheckCircle2 size={17} />
                Always learning
              </div>

              <div className="about-check">
                <CheckCircle2 size={17} />
                Detail-oriented
              </div>

              <div className="about-check">
                <CheckCircle2 size={17} />
                Passion for development
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================
          EXPERTISE
      ====================================== */}

      <section className="section expertise-section" id="expertise">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              WHAT I WORK WITH
            </span>

            <h2>
              My Technical <span className="gradient-text">Expertise.</span>
            </h2>

            <p>
              Tools and technologies I use to bring digital
              ideas to life.
            </p>
          </div>

          <div className="technology-grid">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  className="technology-card"
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="technology-icon">
                    <Icon size={29} />
                  </div>

                  <span>{tech.name}</span>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================
          FEATURED PROJECTS
      ====================================== */}

      <section className="section projects-section" id="projects">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              SELECTED WORK
            </span>

            <h2>
              Featured <span className="gradient-text">Projects.</span>
            </h2>

            <p>
              A few projects that represent my creativity
              and development journey.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.number}
                  className="project-card"
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -9 }}
                >
                  <div className={`project-preview ${project.color}`}>
                    <span className="project-number">
                      {project.number}
                    </span>

                    <div className="project-preview-icon">
                      <Icon size={55} strokeWidth={1.2} />
                    </div>

                    <span className="project-preview-caption">
                      DIGITAL EXPERIENCE
                    </span>
                  </div>

                  <div className="project-content">
                    <span className="project-category">
                      {project.category}
                    </span>

                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>

                    <Link to="/work" className="project-link">
                      View Project <ArrowUpRight size={18} />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="projects-more">
            <Link to="/work" className="hero-btn secondary-btn">
              Explore All Projects <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================
          WHY WORK WITH ME
      ====================================== */}

      <section className="section strengths-section" id="strengths">
        <div className="container">

          <div className="section-heading">
            <span className="section-eyebrow">
              MY APPROACH
            </span>

            <h2>
              Why Work <span className="gradient-text">With Me?</span>
            </h2>

            <p>
              My focus is on combining creativity, quality,
              and continuous improvement.
            </p>
          </div>

          <div className="strengths-grid">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <motion.div
                  className="strength-card"
                  key={strength.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -7 }}
                >
                  <div className="strength-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{strength.title}</h3>
                  <p>{strength.description}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =====================================
          CONTACT SECTION
      ====================================== */}

      <section className="section contact-section" id="contact">
        <div className="container">

          <motion.div
            className="contact-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-glow" />

            <span className="section-eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2>
              Let's Create Something
              <br />
              <span className="gradient-text">
                Amazing Together.
              </span>
            </h2>

            <p>
              Have an idea, opportunity, or just want to
              connect? I'd love to hear from you. Let's start
              a conversation.
            </p>

            <Link to="/contact" className="hero-btn primary-btn">
              Get In Touch <Send size={18} />
            </Link>

            {/* SOCIAL MEDIA LOGOS */}

           <div className="contact-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.name === "GitHub" && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.59 5.21-5.07 5.49.4.35.76 1.02.76 2.06V22c0 .29.2.64.77.53A11.1 11.1 0 0 0 12 .9Z"
                      />
                    </svg>
                  )}

                  {social.name === "LinkedIn" && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.5H4.97V9h2.96v9.5ZM6.45 7.7a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42ZM19 18.5h-2.95v-4.62c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.7H9.8V9h2.83v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.54 1.97 3.54 4.53v5.21Z"
                      />
                    </svg>
                  )}

                  {social.name === "Instagram" && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================
          FOOTER
      ====================================== */}

      <footer className="home-footer">
        <div className="container footer-content">

          <Link to="/" className="footer-logo">
            Harsh<span>.</span>
          </Link>

          <p>
            Designed & Built with <span>♥</span> by Harsh
          </p>

          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <span className="footer-copyright">
            © {new Date().getFullYear()} Harsh. All rights reserved.
          </span>

        </div>
      </footer>

    </main>
  );
};

export default Home;
