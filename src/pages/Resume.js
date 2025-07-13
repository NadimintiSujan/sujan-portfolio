import React, { useEffect } from 'react';
import '../components/Resume.css';
import resume from '../assets/resume.pdf';

const Resume = () => {
  useEffect(() => {
    const bars = document.querySelectorAll('.bar-fill');
    setTimeout(() => {
      bars.forEach(bar => {
        bar.classList.add('animate');
      });
    }, 200);
  }, []);

  return (
    <>
      <div className="resume-download-center">
        <a href={resume} className="download-outline" download>
          Download Resume
        </a>
      </div>

      <section className="resume-container" id="resume">
        <div className="resume-left">
          <div className="block-left">
            <h3>CONTACTS</h3>
            <p>sujan.imp123@gmail.com</p>
            <p>+1 (352) 721-4521</p>

            <h3>PROGRAMMING LANGUAGES</h3>
            <div className="skill-bar"><span>Java</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>C++</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Python</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>JavaScript</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>C#</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>SQL</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>HTML</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>CSS</span><div className="bar-fill ninty"></div></div>

            <h3>TECHNOLOGIES</h3>
            <div className="skill-bar"><span>Node.js</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Spring Boot</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Flask</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Django</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>React</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>Angular</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>PyTorch</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>TensorFlow</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>OpenCV</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Pandas</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>NumPy</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>Scikit-learn</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Apache Kafka</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Apache Spark</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>MySQL</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>PostgreSQL</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>MongoDB</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>AWS</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Docker</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>Kubernetes</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>CI/CD</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Tableau</span><div className="bar-fill seventy"></div></div>
          </div>
        </div>

        <div className="resume-right">
          <div className="block-right">
            <h3>EDUCATION</h3>
            <div className="item">
              <div>
                <strong>University of Florida, Gainesville</strong>
                <p>Master of Science - Computer and Information Science</p>
                <p>CGPA: 3.66/4.0</p>
              </div>
              <span>08/2023 – 05/2025</span>
            </div>
            <div className="item">
              <div>
                <strong>Vellore Institute of Technology, Vellore</strong>
                <p>Bachelor of Technology - Electronics and Communication Engineering</p>
                <p>CGPA: 8.33/10.0</p>
              </div>
              <span>07/2019 – 05/2023</span>
            </div>
          </div>

          <div className="block-right">
            <h3>EXPERIENCE</h3>
            <div className="item">
              <div>
                <strong>Software Developer</strong>
                <p>Intersect Healthcare Systems Inc.</p>
              </div>
              <span>06/2025 – Present</span>
            </div>

            <div className="item">
              <div>
                <strong>Graduate Research Assistant</strong>
                <p>University of Florida</p>
                <p>- Built LSTM-based drone trajectory prediction model (2000+ timesteps), achieving 70% faster training with multi-GPU CUDA.</p>
                <p>- Automated SLURM jobs for 100K+ records daily.</p>
                <p>- Developed React + Flask web interface, Dockerized for consistent deployment</p>
              </div>
              <span>01/2025 – 05/2025</span>
            </div>

            <div className="item">
              <div>
                <strong>Software Engineer Intern</strong>
                <p>Vellore Institute of Technology</p>
                <p>- Developed a real-time sign language translator using LSTM with 98.81% accuracy.</p>
                <p>- Built gesture keypoint extraction with OpenCV, MediaPipe.</p>
                <p>- Integrated WebRTC and speech-to-text for live multimodal interaction.</p>
              </div>
              <span>12/2022 – 06/2023</span>
            </div>

            <div className="item">
              <div>
                <strong>Software Development Intern</strong>
                <p>The Sparks Foundation</p>
                <p>- Built React dashboards with Tableau for terrorism data.</p>
                <p>- Automated data preprocessing with Python, reducing manual effort by 70%.</p>
                <p>- Streamlined the SDLC with AWS Amplify, ensuring 99.9% uptime.</p>
              </div>
              <span>07/2022 – 10/2022</span>
            </div>

            <div className="item">
              <div>
                <strong>Software Development Intern</strong>
                <p>Abbeysoft Technologies</p>
                <p>- Built microservices and Restful APIs for a financial monitoring platform using Spring Boot.</p>
                <p>- Automated Spark ETL workflows to ingest AWS S3 data, boosting report speed by 30%.</p>
                <p>- Integrated Kafka and WebSockets to deliver fraud alerts to the frontend in real-time.</p>
                <p>- Deployed fault-tolerant services on AWS EC2 via CI/CD, reducing deployment time by 35%.</p>
              </div>
              <span>01/2022 – 07/2022</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
