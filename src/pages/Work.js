import React from 'react';
import '../components/Work.css';
import img1 from '../assets/work1.jpg';
import img2 from '../assets/work2.jpg';
import img3 from '../assets/work3.jpg';
import img4 from '../assets/work4.jpg';
import img5 from '../assets/work5.jpg';
import img6 from '../assets/work6.jpg';

const Work = () => {
  const works = [
    {
      img: img1,
      title: 'Gator Library',
      description: 'Red-Black Trees, Binary Min-Heaps',
      link: 'https://github.com/NadimintiSujan/Gator-Library',
    },
    {
      img: img2,
      title: 'COVID-19 Severity Predictor',
      description: 'Scikit-learn, Flask, React, Docker, AWS',
      link: 'https://github.com/NadimintiSujan/covid-predictor',
    },
    {
      img: img3,
      title: 'Real Estate Trend Analyzer',
      description: 'Oracle SQL, React, Node.js, Express.js',
      link: 'https://github.com/NadimintiSujan/Real-Estate-Trend-Analysis',
    },
    {
      img: img4,
      title: 'Concrete Crack Detection',
      description: 'Short description of project 4',
      link: 'https://github.com/NadimintiSujan/Concrete-Crack-Detection',
    },
    {
      img: img5,
      title: 'Personal Budget Tracker',
      description: 'PostgreSQL, Next.js, Tailwind CSS, Prisma ORM',
      link: 'https://github.com/yourusername/budget-tracker',
    },
    {
      img: img6,
      title: 'Live Sign Language Interpretation',
      description: 'TensorFlow, OpenCV, MediaPipe, WebRTC, NLP',
      link: 'https://github.com/NadimintiSujan/Sign-Language-Translation',
    },
  ];

  return (
    <section className="work-container" id="work">
      <h1 className="work-heading">Work</h1>
      <div className="work-grid">
        {works.map((work, index) => (
          <div className="work-card" key={index}>
            <img src={work.img} alt={work.title} className="work-image" />
            <div className="work-content">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
              <a
                href={work.link}
                className="work-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
