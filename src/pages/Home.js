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
          I'm a software developer with a Master’s in Computer 
          Science from the University of Florida. I enjoy building full-stack applications and solving real-world problems with code.
        </p>
        <p>
          I have 1.5 years of experience working with React, Angular, Spring Boot, Node.js, and Flask. I’m also familiar with AWS,
          Docker, CI/CD, and machine learning tools like PyTorch and TensorFlow.
        </p>
        <p>
          I'm always eager to learn and currently looking for new opportunities to grow. Feel free to reach out — I'd love to connect!
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
