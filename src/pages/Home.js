import '../components/Home.css';
import profileImg from '../assets/me.jpg';
import resume from '../assets/Resume_temp.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home-container" id="about">
      <img src={profileImg} alt="Profile" className="profile-img" />

      <div className="about-section">
        

        <h1>Software Engineer</h1>
        <p>
          I’m <strong>Sujan Nadiminti</strong>, a Software Engineer with 2+ years of experience and a Master’s in Computer Science
          from the University of Florida. I specialize in building scalable full-stack applications and 
          AI-driven systems that deliver measurable impact.
        </p>
      
        <h2>What I Do</h2>
        <ul>
          <li>
            <strong>Full-Stack Engineering:</strong> Develop responsive, production-grade apps with 
            React, Angular, Spring Boot, Node.js, and Flask, integrating REST APIs 
            and microservices that power real-world platforms.
          </li>
          <li>
            <strong>Cloud & DevOps:</strong> Automate deployments using AWS, Azure, 
            Docker, Kubernetes, and CI/CD pipelines (Jenkins, GitHub Actions) — improving speed, 
            reliability, and scalability.
          </li>
          <li>
            <strong>AI & Data Systems:</strong> Build optimized ML pipelines with 
            PyTorch, TensorFlow, and CUDA, enabling faster training and 
            intelligent automation.
          </li>
        </ul>
      
        <h2>Highlights</h2>
        <p>
            - Improved healthcare platform efficiency by 35% through Angular component 
            reusability and Jenkins CI/CD automation.
        </p>
        <p>
            - Accelerated ML workflows by 70% using PyTorch Lightning + AWS Batch, and 
            reduced manual preprocessing by 60% with automated 3D visualization tools.
        </p>
        <p>
            - Enhanced user experience by 50% in real-time video translation apps through 
            optimized Flask microservices and TensorFlow inference pipelines.
        </p>
        <p>
            - Delivered critical alerts 60% faster via Kafka-driven Spring Boot 
            microservices deployed on AWS Fargate.
        </p>
      
        <h2>What Drives Me</h2>
        <p>
          I love turning complex ideas into reliable, impactful software. 
          Whether it’s scaling backend systems, optimizing ML pipelines, or designing seamless UI flows — 
          my goal is to build technology that truly helps people.
        </p>

        <div className="icon-row">
          <a
            href="https://github.com/NadimintiSujan"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-bg"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sujann21/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-bg"
          >
            <FaLinkedin className="social-icon" />
          </a>
          <a href={resume} className="download-outline" download>
            Download Resume
          </a>
        </div>

        {/* <form
        className="contact-form"
        action="https://formspree.io/f/xvgqpapd"  //endpoint
        method="POST"
        >

          <input type="email" placeholder="Email *" required />
          <textarea placeholder="Message *" rows="4" required />
          <button type="submit">SEND</button>
        </form> */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xvgqpapd"  //️ Formspree URL
          method="POST"
        >
          <input
            type="email"
            name="email"
            placeholder="Email *"
            required
          />
          <textarea
            name="message"
            placeholder="Message *"
            rows="4"
            required
          />
          <button type="submit">SEND</button>
        </form>

      </div>
    </section>
  );
};

export default Home;
