
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  CheckCircle2,
  Code2,
  Database,
  GraduationCap,
  Lightbulb,
  Monitor,
  Palette,
  Rocket,
  Smartphone,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

import "./About.css";

const education = [
  {
    id: "bca",
    year: "2025",
    level: "Bachelor's Degree",
    degree: "Bachelor of Computer Applications",
    shortName: "BCA",
    college: "Atmiya University",
    description:
      "Built my foundation in computer applications, programming concepts, and the fundamentals of software development.",
    status: "Completed",
    icon: GraduationCap,
  },
  {
    id: "mca",
    year: "2027",
    level: "Master's Degree",
    degree: "Master of Computer Applications",
    shortName: "MCA",
    college: "Atmiya University",
    description:
      "Continuing my academic journey to deepen my knowledge of software development, modern technologies, and problem-solving.",
    status: "Expected 2027",
    icon: Rocket,
  },
];

const skills = [
  { name: "React.js", icon: Code2 },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: Code2 },
  { name: "Node.js", icon: Zap },
  { name: "Express.js", icon: Monitor },
  { name: "MongoDB", icon: Database },
  { name: "HTML5", icon: Code2 },
  { name: "CSS3", icon: Palette },
  { name: "Tailwind CSS", icon: Palette },
  { name: "Android", icon: Smartphone },
  { name: "Kotlin", icon: Code2 },
  { name: "Java", icon: Braces },
];

const interests = [
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "I enjoy understanding challenges, thinking logically, and finding practical solutions.",
  },
  {
    icon: BookOpen,
    title: "Book Reading",
    description:
      "Reading helps me explore new ideas, gain knowledge, and keep learning beyond technology.",
  },
  {
    icon: Code2,
    title: "Building Projects",
    description:
      "I love turning ideas into real applications and learning through hands-on development.",
  },
  {
    icon: Sparkles,
    title: "Exploring Technology",
    description:
      "I enjoy discovering modern tools, technologies, and creative ways to build better experiences.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-container about-hero-grid">
          <motion.div
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } },
            }}
          >
            <motion.span className="about-eyebrow" variants={fadeUp}>
              <span className="about-eyebrow-dot" />
              GET TO KNOW ME
            </motion.span>

            <motion.h1 variants={fadeUp}>
              The Person Behind
              <br />
              The <span className="about-gradient">Code.</span>
            </motion.h1>

            <motion.p
              className="about-hero-description"
              variants={fadeUp}
            >
              Hello, I'm Harsh — a passionate developer, lifelong
              learner, and creative problem solver. I enjoy
              building meaningful digital experiences and turning
              ideas into reality through technology.
            </motion.p>

            <motion.div
              className="about-hero-actions"
              variants={fadeUp}
            >
              <a href="#education" className="about-primary-btn">
                Explore My Journey
                <ArrowRight size={18} />
              </a>

              <Link to="/contact" className="about-secondary-btn">
                Let's Connect
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>

            <motion.div
              className="about-hero-tags"
              variants={fadeUp}
            >
              <span>Creative Thinker</span>
              <span>Problem Solver</span>
              <span>Tech Enthusiast</span>
            </motion.div>
          </motion.div>

          {/* ANIMATED ORBIT */}
          <motion.div
            className="about-orbit-area"
            initial={
              reduceMotion ? false : { opacity: 0, scale: 0.75 }
            }
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="about-orbit-glow" />

            <motion.div
              className="about-orbit orbit-outer"
              animate={reduceMotion ? {} : { rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="orbit-dot orbit-dot-one" />
              <span className="orbit-dot orbit-dot-two" />
            </motion.div>

            <motion.div
              className="about-orbit orbit-inner"
              animate={reduceMotion ? {} : { rotate: -360 }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <span className="orbit-small-dot" />
            </motion.div>

            <motion.div
              className="about-orbit-center"
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="about-avatar-icon">
                <Code2 size={62} strokeWidth={1.4} />
              </div>
              <span className="about-avatar-name">HARSH.</span>
              <span className="about-avatar-role">
                DEVELOPER & LEARNER
              </span>
            </motion.div>

            <div className="about-orbit-label orbit-label-top">
              <Sparkles size={16} />
              Creativity
            </div>

            <div className="about-orbit-label orbit-label-bottom">
              <Code2 size={16} />
              Technology
            </div>
          </motion.div>
        </div>

        <div className="about-hero-bottom">
          <span>SCROLL TO DISCOVER</span>
          <span className="about-scroll-line" />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-section about-intro-section">
        <div className="about-container">
          <motion.div
            className="about-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <span className="about-section-label">
              01 / INTRODUCTION
            </span>
            <h2>
              A Little More
              <span className="about-gradient"> About Me.</span>
            </h2>
            <p>
              More than writing code, I enjoy learning, creating,
              and solving problems.
            </p>
          </motion.div>

          <div className="about-intro-grid">
            <motion.div
              className="about-intro-main"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="about-card-icon">
                <Sparkles size={25} />
              </div>

              <span className="about-card-kicker">MY STORY</span>

              <h3>
                Curious Mind.
                <br />
                Creative Vision.
                <br />
                <span className="about-gradient">
                  Developer Mindset.
                </span>
              </h3>

              <p>
                I'm Harsh, a developer with an interest in creating
                modern, user-friendly, and responsive web
                applications. My journey started with learning
                computer applications and gradually grew into a
                passion for software development.
              </p>

              <p>
                I believe every challenge is an opportunity to
                learn something new. I enjoy exploring technologies,
                building practical projects, and improving my
                problem-solving abilities.
              </p>

              <p>
                My goal is to keep growing as a developer and
                contribute to projects that make a meaningful
                difference.
              </p>
            </motion.div>

            <motion.div
              className="about-intro-side"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="about-side-top">
                <Target size={30} />
                <span>MY FOCUS</span>
              </div>

              <h3>
                Learn today.
                <br />
                Build tomorrow.
              </h3>

              <p>
                I focus on continuous learning, clean development,
                creative thinking, and building better digital
                experiences.
              </p>

              <div className="about-focus-list">
                <div>
                  <CheckCircle2 size={18} />
                  Continuous Learning
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  Logical Thinking
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  Creative Development
                </div>
                <div>
                  <CheckCircle2 size={18} />
                  Growth Mindset
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EDUCATION JOURNEY */}
      <section
        className="about-section about-education-section"
        id="education"
      >
        <div className="about-container">
          <motion.div
            className="about-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <span className="about-section-label">
              02 / EDUCATION JOURNEY
            </span>

            <h2>
              My Learning
              <span className="about-gradient"> Journey.</span>
            </h2>

            <p>
              Every step in education brings me closer to my goals.
            </p>
          </motion.div>

          <div className="about-education-layout">
            <div className="about-timeline">
              <motion.div
                className="about-timeline-line"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {education.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    className={`about-education-item ${
                      index === 1 ? "education-item-second" : ""
                    }`}
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? -35 : 35,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                  >
                    <motion.div
                      className="about-timeline-marker"
                      animate={
                        reduceMotion
                          ? {}
                          : {
                              boxShadow: [
                                "0 0 0 0 rgba(154, 107, 255, 0.12)",
                                "0 0 0 13px rgba(154, 107, 255, 0)",
                              ],
                            }
                      }
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Icon size={23} />
                    </motion.div>

                    <div className="about-education-card">
                      <div className="about-education-top">
                        <span className="about-education-year">
                          {item.year}
                        </span>
                        <span className="about-education-status">
                          {item.status}
                        </span>
                      </div>

                      <span className="about-education-level">
                        {item.level}
                      </span>

                      <h3>{item.shortName}</h3>

                      <h4>{item.degree}</h4>

                      <div className="about-college">
                        <GraduationCap size={18} />
                        {item.college}
                      </div>

                      <p>{item.description}</p>

                      <div className="about-education-footer">
                        <span>
                          <CheckCircle2 size={16} />
                          Academic Journey
                        </span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              className="about-education-note"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="about-note-icon">
                <GraduationCap size={35} />
              </div>

              <span>NEVER STOP LEARNING</span>

              <h3>
                Education is a journey,
                <span className="about-gradient">
                  {" "}not a destination.
                </span>
              </h3>

              <p>
                From BCA to MCA, each stage of my academic journey
                helps me strengthen my understanding of technology
                and software development.
              </p>

              <div className="about-note-decoration">
                <span>LEARN</span>
                <ArrowRight size={16} />
                <span>BUILD</span>
                <ArrowRight size={16} />
                <span>GROW</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SKILLS */}
      <section className="about-section about-skills-section">
        <div className="about-container">
          <motion.div
            className="about-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="about-section-label">
              03 / TECHNOLOGY
            </span>

            <h2>
              Technologies I
              <span className="about-gradient"> Explore.</span>
            </h2>

            <p>
              Tools and technologies I work with and continue to learn.
            </p>
          </motion.div>

          <div className="about-skills-grid">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  className="about-skill-card"
                  key={skill.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.045 }}
                  whileHover={{ y: -7, scale: 1.025 }}
                >
                  <div className="about-skill-icon">
                    <Icon size={25} />
                  </div>
                  <span>{skill.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PERSONAL INTERESTS */}
      <section className="about-section about-interests-section">
        <div className="about-container">
          <motion.div
            className="about-section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="about-section-label">
              04 / BEYOND THE CODE
            </span>

            <h2>
              What Makes Me
              <span className="about-gradient"> Me.</span>
            </h2>

            <p>
              The interests and mindset that shape the way I learn
              and grow.
            </p>
          </motion.div>

          <div className="about-interests-grid">
            {interests.map((interest, index) => {
              const Icon = interest.icon;

              return (
                <motion.article
                  className="about-interest-card"
                  key={interest.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="about-interest-icon">
                    <Icon size={27} />
                  </div>

                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* GOAL */}
      <section className="about-section about-goal-section">
        <div className="about-container">
          <motion.div
            className="about-goal-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-goal-glow" />

            <div className="about-goal-icon">
              <Rocket size={32} />
            </div>

            <span className="about-section-label">
              05 / MY VISION
            </span>

            <h2>
              Always Learning.
              <br />
              Always <span className="about-gradient">Building.</span>
            </h2>

            <p>
              My ambition is to grow as a skilled software developer,
              work on meaningful projects, solve real-world problems,
              and create digital experiences that people love to use.
            </p>

            <Link to="/work" className="about-primary-btn">
              Explore My Projects
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
