import '../components/Home.css';
import profileImg from '../assets/me.jpg';
import resume from '../assets/resume.pdf';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <section className="home-container" id="about">
      <img src={profileImg} alt="Profile" className="profile-img" />

      <div className="about-section">
        <h1>Hi, I’m Sujan.</h1>
        <p>
          I’m Sujan, a software engineer with a Master’s in Computer Science from the University of Florida 
          and 2+ years of experience building scalable full-stack applications and intelligent systems.
        </p>
        <p>
          I’ve worked across healthcare, finance, and research domains, delivering production-ready solutions with Angular, 
          React, Spring Boot, Flask, Node.js, and cloud platforms like AWS and Azure. My projects range from developing healthcare 
          portals and fraud detection systems to creating drone simulation tools and real-time sign language translation apps.
        </p>
        <p>
          I’m skilled in containerization, CI/CD automation, and distributed systems, with hands-on experience using Docker, Jenkins, 
          GitHub Actions, Kafka, and FHIR APIs. On the ML side, I’ve built and deployed deep learning models with PyTorch and TensorFlow, 
          optimized multi-GPU training, and automated large-scale data workflows.
        </p>
        <p>
          Always eager to learn, simplify, and deliver impact. I’m currently seeking opportunities to grow and contribute to innovative 
          teams. Let’s connect!
        </p>

        <div className="icon-row">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-bg"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
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
        action="https://formspree.io/f/xvgqpapd"  // ⬅️ Use your actual endpoint
        method="POST"
        >

          <input type="email" placeholder="Email *" required />
          <textarea placeholder="Message *" rows="4" required />
          <button type="submit">SEND</button>
        </form> */}
        <form
          className="contact-form"
          action="https://formspree.io/f/xvgqpapd"  // ⬅️ Replace with your real Formspree URL
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
