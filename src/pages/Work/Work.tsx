
import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  Lightbulb,
  LockKeyhole,
  Monitor,
  Ruler,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./Work.css";

const projects = [
  {
    id: "prettyfingers",
    number: "01",
    name: "PrettyFingers",
    category: "Full-Stack Web Application",
    status: "Completed",
    statusType: "completed",
    tagline: "Beauty meets technology.",
    description:
      "PrettyFingers is a modern nail salon platform designed to make discovering nail services, exploring designs, and booking appointments simple and convenient.",
    longDescription:
      "The platform brings together a customer-facing salon website and an administration experience. Customers can explore salon services, browse nail designs, discover artists and offers, create accounts, and manage their appointments. The admin panel supports managing the salon's day-to-day website operations.",
    features: [
      "User registration and login",
      "Service and pricing exploration",
      "Nail designs and gallery",
      "Artist and offer sections",
      "Appointment booking and history",
      "Admin dashboard and management",
      "Customer and service management",
      "Responsive luxury UI",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "CSS",
      "Axios",
      "JWT",
    ],
    icon: Sparkles,
    theme: "pink",
    previewType: "beauty",
    previewLabel: "NAIL SALON EXPERIENCE",
    previewTitle: "PrettyFingers",
    previewSubtitle: "Your beauty, your style.",
    previewMetric: "BEAUTY STUDIO",
  },
  {
    id: "cft-calculator",
    number: "02",
    name: "CFT Calculator",
    category: "Utility / Calculator Application",
    status: "Completed",
    statusType: "completed",
    tagline: "Measurements made simple.",
    description:
      "A calculator project created to make cubic feet calculations easier, faster, and more convenient through a straightforward calculation interface.",
    longDescription:
      "The CFT Calculator focuses on simplifying volume calculations. It presents a dedicated calculator experience where dimensions can be entered and used to calculate cubic feet. The project emphasizes a clear interface and a practical calculation workflow.",
    features: [
      "Dimension input interface",
      "Cubic feet calculation",
      "Quick calculation workflow",
      "Clear result presentation",
      "Simple and user-friendly layout",
      "Responsive interface",
    ],
    technologies: [
      "Calculator Logic",
      "Input Validation",
      "Responsive UI",
    ],
    icon: Ruler,
    theme: "blue",
    previewType: "calculator",
    previewLabel: "SMART CALCULATION TOOL",
    previewTitle: "CFT Calculator",
    previewSubtitle: "Calculate volume with ease.",
    previewMetric: "VOLUME CALCULATOR",
  },
];

const comingSoonFeatures = [
  "A fresh real-world idea",
  "Modern user experience",
  "Powerful functionality",
  "Built with attention to detail",
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const Work = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="work-page">
      {/* HERO */}
      <section className="work-hero">
        <div className="work-hero-glow work-glow-one" />
        <div className="work-hero-glow work-glow-two" />

        <div className="work-container work-hero-content">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } },
            }}
          >
            <motion.div className="work-eyebrow" variants={fadeUp}>
              <span className="work-eyebrow-dot" />
              MY CREATIVE SPACE
            </motion.div>

            <motion.h1 variants={fadeUp}>
              Turning Ideas
              <br />
              Into <span className="work-gradient">Reality.</span>
            </motion.h1>

            <motion.p
              className="work-hero-description"
              variants={fadeUp}
            >
              Every project is a new opportunity to learn, experiment,
              solve problems, and create something meaningful.
              Explore the applications I've built and the ideas
              I'm bringing to life.
            </motion.p>

            <motion.div className="work-hero-actions" variants={fadeUp}>
              <a href="#projects" className="work-primary-btn">
                Explore Projects
                <ArrowDown size={18} />
              </a>

              <Link to="/contact" className="work-secondary-btn">
                Start a Conversation
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="work-hero-orbit"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="work-hero-ring ring-one"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="work-hero-ring ring-two"
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className="work-hero-center"
              animate={reduceMotion ? {} : { y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Code2 size={62} strokeWidth={1.3} />
              <span>BUILD. CREATE. REPEAT.</span>
            </motion.div>
            <span className="work-orbit-star star-one">✦</span>
            <span className="work-orbit-star star-two">✧</span>
          </motion.div>
        </div>

        <div className="work-hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="work-scroll-line" />
          <span>2026 — PRESENT</span>
        </div>
      </section>

      {/* PROJECT INTRO */}
      <section className="work-intro" id="projects">
        <div className="work-container">
          <motion.div
            className="work-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="work-section-label">
              01 / SELECTED PROJECTS
            </span>

            <h2>
              Things I've
              <span className="work-gradient"> Created.</span>
            </h2>

            <p>
              A collection of completed work, practical experiments,
              and what's coming next.
            </p>
          </motion.div>

          <div className="work-project-count">
            <div>
              <strong>02</strong>
              <span>COMPLETED PROJECTS</span>
            </div>
            <div className="work-count-divider" />
            <div>
              <strong>01</strong>
              <span>UPCOMING PROJECT</span>
            </div>
            <div className="work-count-note">
              <Sparkles size={16} />
              Always creating something new
            </div>
          </div>

          {/* PROJECT CARDS */}
          <div className="work-project-list">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;

              return (
                <motion.article
                  className={`work-project-card ${project.theme}`}
                  key={project.id}
                  initial={{ opacity: 0, y: 70 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                  }}
                >
                  <div className="work-project-visual">
                    <div className="work-visual-topbar">
                      <div className="work-window-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span>PROJECT PREVIEW / {project.number}</span>
                      <ProjectIcon size={18} />
                    </div>

                    {project.previewType === "beauty" ? (
                      <div className="beauty-preview">
                        <div className="beauty-preview-decoration decoration-one" />
                        <div className="beauty-preview-decoration decoration-two" />

                        <div className="beauty-preview-nav">
                          <span>PF.</span>
                          <div>
                            <i />
                            <i />
                            <i />
                          </div>
                        </div>

                        <div className="beauty-preview-content">
                          <span>NAIL ART & BEAUTY</span>
                          <h3>
                            Your Nails.
                            <br />
                            Your <em>Statement.</em>
                          </h3>
                          <p>
                            Discover your signature style.
                          </p>
                          <div className="beauty-preview-button">
                            EXPLORE COLLECTION
                            <ArrowUpRight size={13} />
                          </div>
                        </div>

                        <div className="beauty-preview-art">
                          <div className="beauty-hand">
                            <div className="beauty-finger finger-one">
                              <i />
                            </div>
                            <div className="beauty-finger finger-two">
                              <i />
                            </div>
                            <div className="beauty-finger finger-three">
                              <i />
                            </div>
                            <div className="beauty-finger finger-four">
                              <i />
                            </div>
                            <div className="beauty-thumb">
                              <i />
                            </div>
                          </div>
                          <Sparkles className="beauty-sparkle" size={27} />
                        </div>

                        <span className="beauty-preview-footer">
                          PRETTYFINGERS · BEAUTY EXPERIENCE
                        </span>
                      </div>
                    ) : (
                      <div className="cft-preview">
                        <div className="cft-preview-glow" />
                        <div className="cft-preview-header">
                          <div className="cft-preview-logo">
                            <Ruler size={19} />
                          </div>
                          <div>
                            <strong>CFT CALCULATOR</strong>
                            <span>VOLUME MADE SIMPLE</span>
                          </div>
                          <span className="cft-preview-badge">
                            TOOL
                          </span>
                        </div>

                        <div className="cft-preview-body">
                          <div className="cft-preview-title">
                            <span>CALCULATE YOUR VOLUME</span>
                            <h3>
                              Cubic Feet
                              <br />
                              <em>Calculator.</em>
                            </h3>
                          </div>

                          <div className="cft-calc-window">
                            <div className="cft-calc-heading">
                              <span>DIMENSIONS</span>
                              <span>INPUT VALUES</span>
                            </div>

                            <div className="cft-input-row">
                              <span>Length</span>
                              <strong>10.00</strong>
                            </div>
                            <div className="cft-input-row">
                              <span>Width</span>
                              <strong>8.00</strong>
                            </div>
                            <div className="cft-input-row">
                              <span>Height</span>
                              <strong>6.00</strong>
                            </div>

                            <div className="cft-result">
                              <span>CALCULATED VOLUME</span>
                              <strong>480.00 <small>FT³</small></strong>
                            </div>
                          </div>
                        </div>

                        <div className="cft-preview-footer">
                          <span>SMART CALCULATION</span>
                          <span>ACCURATE · SIMPLE · FAST</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="work-project-info">
                    <div className="work-project-topline">
                      <span className="work-project-number">
                        PROJECT {project.number}
                      </span>
                      <span className="work-status">
                        <CheckCircle2 size={14} />
                        {project.status}
                      </span>
                    </div>

                    <span className="work-project-category">
                      {project.category}
                    </span>

                    <h3>{project.name}</h3>
                    <h4>{project.tagline}</h4>

                    <p className="work-project-description">
                      {project.description}
                    </p>

                    <div className="work-project-detail">
                      <span>ABOUT THE PROJECT</span>
                      <p>{project.longDescription}</p>
                    </div>

                    <div className="work-feature-block">
                      <span>KEY FEATURES</span>
                      <div className="work-feature-grid">
                        {project.features.map((feature) => (
                          <div key={feature}>
                            <CheckCircle2 size={15} />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="work-tech-block">
                      <span>TECHNOLOGIES & CONCEPTS</span>
                      <div className="work-tech-list">
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    </div>

                    <div className="work-project-footer">
                      <div>
                        <ProjectIcon size={18} />
                        <span>{project.previewMetric}</span>
                      </div>
                      <span className="work-completed-label">
                        <CheckCircle2 size={15} />
                        PROJECT COMPLETED
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="work-coming-section">
        <div className="work-container">
          <motion.div
            className="work-coming-card"
            initial={{ opacity: 0, y: 65 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="work-coming-glow" />

            <div className="work-coming-visual">
              <motion.div
                className="coming-orbit coming-orbit-one"
                animate={reduceMotion ? {} : { rotate: 360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span />
              </motion.div>

              <motion.div
                className="coming-orbit coming-orbit-two"
                animate={reduceMotion ? {} : { rotate: -360 }}
                transition={{
                  duration: 19,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span />
              </motion.div>

              <motion.div
                className="coming-center"
                animate={reduceMotion ? {} : { scale: [1, 1.07, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={52} />
                <span>01</span>
              </motion.div>

              <span className="coming-floating-text">
                SOMETHING NEW
              </span>
            </div>

            <div className="work-coming-info">
              <span className="work-section-label">
                02 / THE NEXT CHAPTER
              </span>

              <div className="work-coming-badge">
                <span />
                IN DEVELOPMENT
              </div>

              <h2>
                Something
                <br />
                <span className="work-gradient">Amazing</span> Is
                Coming.
              </h2>

              <p>
                Great ideas deserve to become reality. I'm preparing
                my next project with a fresh concept, modern
                technology, and a focus on creating something
                genuinely useful.
              </p>

              <div className="work-coming-features">
                {comingSoonFeatures.map((feature) => (
                  <div key={feature}>
                    <Star size={15} />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="work-coming-footer">
                <span>THE NEXT PROJECT IS ON ITS WAY</span>
                <Sparkles size={20} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="work-process-section">
        <div className="work-container">
          <motion.div
            className="work-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="work-section-label">
              03 / MY APPROACH
            </span>
            <h2>
              From Idea to
              <span className="work-gradient"> Execution.</span>
            </h2>
            <p>
              My approach to turning a concept into a working project.
            </p>
          </motion.div>

          <div className="work-process-grid">
            {[
              {
                number: "01",
                icon: Lightbulb,
                title: "Discover",
                description:
                  "Understand the idea, identify the problem, and plan the experience.",
              },
              {
                number: "02",
                icon: Layers3,
                title: "Design",
                description:
                  "Create a clean, modern, and responsive interface.",
              },
              {
                number: "03",
                icon: Code2,
                title: "Develop",
                description:
                  "Build functionality with a focus on structure and usability.",
              },
              {
                number: "04",
                icon: Zap,
                title: "Improve",
                description:
                  "Test, refine, and keep improving the final experience.",
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.article
                  className="work-process-card"
                  key={step.number}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                >
                  <span className="work-process-number">
                    {step.number}
                  </span>
                  <div className="work-process-icon">
                    <Icon size={27} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="work-cta-section">
        <div className="work-container">
          <motion.div
            className="work-cta-card"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="work-cta-decoration">
              <Monitor size={90} />
            </div>

            <span className="work-section-label">
              HAVE AN IDEA?
            </span>

            <h2>
              Let's Build Something
              <span className="work-gradient"> Great.</span>
            </h2>

            <p>
              Have a project in mind or want to collaborate?
              I'd love to hear from you.
            </p>

            <Link to="/contact" className="work-primary-btn">
              Let's Talk
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Work;
