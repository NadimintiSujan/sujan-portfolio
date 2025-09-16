import React, { useEffect } from 'react';
import '../components/Resume.css';
import resume from '../assets/Resume_temp.pdf';

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

            <h3>PROGRAMMING LANGUAGES</h3>
            <div className="skill-bar"><span>Java</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>C/C++</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Python</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>JavaScript (ES6+)</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>TypeScript</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>SQL</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>HTML5</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>CSS3</span><div className="bar-fill ninty"></div></div>
            
            <h3>FRONTEND DEVELOPMENT</h3>
            <div className="skill-bar"><span>React</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>Angular</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Next.js</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>NgRx</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Redux</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Tailwind CSS</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Bootstrap</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Chart.js</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Three.js</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>jQuery / AJAX / JSON</span><div className="bar-fill sixty"></div></div>
            
            <h3>BACKEND & API DEVELOPMENT</h3>
            <div className="skill-bar"><span>Spring Boot</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Spring MVC</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Spring Security</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Node.js</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Express.js</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Flask</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Django</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>REST APIs</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>Microservices</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>GraphQL</span><div className="bar-fill sixty"></div></div>
            
            <h3>MACHINE LEARNING / AI</h3>
            <div className="skill-bar"><span>PyTorch</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>PyTorch Lightning</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>TensorFlow</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Keras</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>NumPy</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>Pandas</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Scikit-learn</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Matplotlib</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Seaborn</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Reinforcement Learning</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>LSTMs / seq2seq</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Transformer Models</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>MediaPipe</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>OpenCV</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>NLP (rule-based)</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>SLURM</span><div className="bar-fill sixty"></div></div>
            
            <h3>DATA ENGINEERING & DATABASES</h3>
            <div className="skill-bar"><span>PostgreSQL</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Oracle SQL</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>MySQL</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>MS SQL Server</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>MongoDB</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Apache Kafka</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Spark ETL / Databricks</span><div className="bar-fill seventy"></div></div>
            
            <h3>CLOUD / DEVOPS & DEPLOYMENT</h3>
            <div className="skill-bar"><span>AWS</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>EC2</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>ECS Fargate</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Batch</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>S3</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>CloudWatch / Logs</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Amplify</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Lambda</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Azure VMs / AD / Blob</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Docker</span><div className="bar-fill ninty"></div></div>
            <div className="skill-bar"><span>Kubernetes</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Linux/Unix</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Jenkins</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>GitHub Actions</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Maven</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Git / GitHub</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>CI/CD</span><div className="bar-fill eighty"></div></div>
            
            <h3>TESTING & QA</h3>
            <div className="skill-bar"><span>JUnit</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>PyTest</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Jest</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Karma</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Cypress (E2E)</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Postman / cURL</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Unit Testing</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>Integration Testing</span><div className="bar-fill seventy"></div></div>
            
            <h3>MONITORING & ANALYTICS</h3>
            <div className="skill-bar"><span>Firebase Analytics</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Grafana</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Prometheus</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Tableau</span><div className="bar-fill seventy"></div></div>
            
            <h3>SYSTEM DESIGN & PERFORMANCE</h3>
            <div className="skill-bar"><span>Distributed Systems</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Concurrency / Multithreading</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Synchronization</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Fault Tolerance</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Caching Strategies</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>API Versioning</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Service Decoupling</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Profiling (JProfiler, perf, flamegraphs)</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Performance Tuning</span><div className="bar-fill sixty"></div></div>
            
            <h3>TOOLS & METHODOLOGIES</h3>
            <div className="skill-bar"><span>Agile (Scrum / Kanban)</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>JIRA</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>VS Code</span><div className="bar-fill eighty"></div></div>
            <div className="skill-bar"><span>IntelliJ</span><div className="bar-fill seventy"></div></div>
            <div className="skill-bar"><span>Eclipse</span><div className="bar-fill sixty"></div></div>
            <div className="skill-bar"><span>Jupyter / Colab / Anaconda</span><div className="bar-fill seventy"></div></div>
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
                <strong>Software Engineer</strong>
                <p>Intersect Healthcare Systems Inc.</p>
                <p>- Built and delivered 20+ Angular components for the doctor-facing healthcare portal, including modules for patient details,
                appointment scheduling, reminders, and secure messaging. These enhancements streamlined daily workflows and improved
                provider efficiency by 25%.</p>
                <p>- Improved portal performance by refactoring legacy JavaScript code and applying lazy loading with modular code splitting, which
                reduced the initial page load time by 30%.</p>
                <p>- Integrated FHIR R4/R5 APIs to enable seamless and standardized patient data exchange across healthcare systems. Led the
                frontend upgrade to FHIR R5, reducing integration and compatibility issues by 35%.</p>
                <p>- Developed and maintained unit and integration test suites using Karma and Jest, achieving 80% code coverage. Combined this
                with Jenkins CI/CD pipelines to automate builds and deployments, reducing bugs by 25% and deployment time by 40%.</p>
                <p>- Implemented role-based authentication using Azure Active Directory and OAuth 2.0, ensuring doctors, administrators, and
                support staff had secure access to only the features relevant to their role.</p>
                <p>- Participated in a major database restructure project, where I redesigned query patterns, indexes, and stored procedures. This
                reduced SQL query execution time by 10% and improved data retrieval performance by 20%.</p>
                <p>- Integrated Firebase Analytics into the portal to track application crashes, latency, and performance bottlenecks. Used insights
                from the data to resolve multiple crash issues, resulting in 20% fewer runtime errors and improved platform stability.</p>
                <p>- Designed and implemented state management patterns using NgRx to handle patient records more efficiently. This reduced
                unnecessary component re-renders by 15% and improved the overall responsiveness of the healthcare portal.</p>
              </div>
              <span>05/2025 – Present</span>
            </div>

            <div className="item">
              <div>
                <strong>Software Developer</strong>
                <p>University of Florida</p>
                <p>- Developed a 3D flight visualization tool using React, Flask, and Three.js, allowing researchers to upload datasets and interactively view drone trajectories in 3D. This replaced manual graph plotting workflows and reduced analysis time by 60%.</p>
                <p>- Utilized AWS Batch to automate the scheduling of drone model training jobs. Instead of starting jobs manually, Batch handled job queuing, scaling across nodes, and resource allocation, which allowed experiments to run continuously without developer intervention, reducing manual effort by 60%.</p>
                <p>- Accelerated model training by 70% by training on AWS EC2 instances, equipped with NVIDIA A100 GPUs. Used multi-GPU parallelism with CUDA and PyTorch Lightning’s distributed training features to split large drone trajectory datasets across GPUs, which significantly reduced training time while maintaining accuracy.</p>                
                <p>- Improved monitoring and debugging efficiency by 35% by integrating CloudWatch Logs into the pipeline to track GPU usage, system performance metrics, and training errors in real time. Configured custom log streams and alarms to alert the team of anomalies, reducing downtime by 25% and enabling faster resolution of failed training runs.</p> 
                <p>- Configured AWS Lambda functions to automatically detect and respond when training jobs stopped unexpectedly. The Lambda functions validated logs, retriggered failed jobs, and notified the team, which reduced downtime, eliminated the need for manual restarts, and kept large-scale drone training workflows running smoothly, improving pipeline resilience by 30%.</p>
                <p>- Implemented CI/CD pipelines using GitHub Actions for automated testing and Docker for containerization. This reduced deployment errors by 30% and ensured consistent environments between development and production.</p>                
                <p>- Configured custom Conda environments with pinned versions of CUDA, PyTorch, Scikit-learn, NumPy, and other supporting libraries, preventing compatibility issues across machines. This reduced setup time for team members by 15% and ensured reproducibility of experiments across local and cloud environments.</p>
                <p>- Designed and deployed custom visualization dashboards using Matplotlib and Seaborn that provided interactive plots for monitoring training loss curves, GPU utilization, and model performance metrics. These dashboards helped quickly detect anomalies during experiments.</p>
                <p>- Trained reinforcement learning (RL) controllers on transformer-based adversarial models, designing custom reward functions to improve robustness of drone vision models against occlusions and environmental noise. This work improved stability in real-world drone flight simulations by 30%.</p>
                <p>- Mentored and onboarded 4 graduate engineers by creating detailed technical documentation, coding standards, and workflow guides. Conducted weekly knowledge-sharing sessions, which improved onboarding efficiency and boosted overall team productivity by 30%.</p>
                <p>- Followed Agile Scrum methodologies during the entire software development life cycle (SDLC) by participating in sprint planning, daily standups, sprint reviews, and retrospective sessions. This ensured continuous integration of feedback from advisors and researchers, helping deliver features in shorter cycles and improving research collaboration by 15%.</p>
              </div>
              <span>05/2024 – 05/2025</span>
            </div>

            <div className="item">
              <div>
                <strong>Software Engineer</strong>
                <p>Vellore Institute of Technology</p>
                <p>- Built a real-time video application using Flask that translated sign language gestures into text. The system allowed non-signers to understand conversations more effectively, improving comprehension during live testing scenarios by 50%.</p>
                <p>- Designed and implemented a Python-based data pipeline to handle 25K+ gesture sequences, with features such as checkpoints, early stopping, and custom monitoring scripts. This improved pipeline reliability by 35% and reduced retraining overhead by 40%, saving significant computation time.</p>
                <p>- Developed REST APIs and microservices for ingesting video frames and performing gesture recognition using MediaPipe for keypoint extraction and OpenCV for real-time video processing. These services reduced end-to-end system latency by 40%, making translation faster and smoother.</p>
                <p>- Trained an LSTM-based deep learning model (TensorFlow, Keras) on 25K+ gesture sequences, enabling accurate temporal sequence prediction. The model achieved 98.8% accuracy in translating continuous sign gestures into text, significantly improving real-time translation quality.</p>
                <p>- Created rule-based Natural Language Processing (NLP) modules that dynamically converted raw gesture sequences into grammatically correct text output. This ensured that translated sentences were more natural and context-aware for users.</p>
                <p>- Implemented a responsive React frontend that displayed dynamic caption overlays on video feeds, ensuring that translated text appeared in sync with gestures. This improved readability by 25% and made the interface more accessible for users.</p>
                <p>- Experimented with speech-to-text API to extend the system with live audio captioning, offering a combined accessibility solution for both hearing- and speech-impaired users.</p>
                <p>- Built unit tests with PyTest to validate gesture recognition models and pipeline components, achieving 75% code coverage and catching multiple edge cases before deployment.</p>
                <p>- Conducted usability studies with 20+ participants, including both signers and non-signers, to evaluate system performance and user experience. Gathered structured feedback that directly influenced UI/UX improvements, such as font sizes, overlay placement, and caption timing.</p>
              </div>
              <span>12/2022 – 06/2023</span>
            </div>

            <div className="item">
              <div>
                <strong>Software Development Intern</strong>
                <p>The Sparks Foundation</p>
                <p>- Built a React-based dashboard integrated with Tableau, enabling interactive visualizations of global terrorism datasets. Users could filter, drill down, and analyze large-scale data easily.</p>
                <p>- Automated Python preprocessing scripts to clean and transform raw terrorism datasets before visualization, improving data quality and scalability of the pipeline.</p>
                <p>- Deployed the system using AWS Amplify, achieving 99.9% uptime and reducing manual deployment effort by 70%.</p>
                <p>- Improved the analysis workflow by delivering dashboards that scaled for large data volumes, providing real-time insights into global security trends.</p>
              </div>
              <span>07/2022 – 08/2022</span>
            </div>

            <div className="item">
              <div>
                <strong>Software Development Intern</strong>
                <p>Abbeysoft Technologies</p>
                <p>- Designed and implemented Spring Boot microservices and REST APIs for a financial monitoring system workflows, enabling modular, reusable, and secure data exchange across backend services. This architecture improved maintainability and made it easier for multiple teams to extend features independently.</p>
                <p>- Developed REST APIs to trigger Spark ETL jobs in Databricks, orchestrating ingestion and transformation of raw financial data stored in AWS S3. This automation eliminated repetitive manual processes, cutting data preparation effort by 30% and ensuring more consistent data availability for analytics.</p>
                <p>- Created Kafka consumers to handle real-time fraud alerts, streaming them to frontend dashboards through WebSockets. This architecture delivered sub-2-second latency, improving fraud analyst responsiveness and reducing false negatives by enabling immediate investigation of suspicious activity.</p>
                <p>- Built a MongoDB snapshot store to persist recent transaction logs and event streams, allowing dashboards to reload the latest data instantly after refresh or restart. This not only enhanced the user experience for fraud analysts but also improved backend recovery speed by 30% in failover situations.</p>
                <p>- Wrote unit and integration tests with JUnit, achieving 85% coverage across critical services. This high test coverage significantly reduced regressions and improved confidence during production releases, while speeding up code reviews.</p>
                <p>- Deployed containerized backend services on AWS ECS Fargate using automated CI/CD pipelines, which streamlined deployments across multiple environments. This reduced deployment time by 35% while improving scalability and fault tolerance of the financial system.</p>
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
