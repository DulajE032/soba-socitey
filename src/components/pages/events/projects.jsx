import './projects.css';
import im1 from '../../../assets/heroimages/hero.jpeg';
import im2 from '../../../assets/heroimages/im2.png';
import im3 from '../../../assets/heroimages/im5.jpeg';
import im4 from '../../../assets/heroimages/im4.jpeg';

const Projects = () => {
  const projectsList = [
    { title: 'planting', img: im1 },
    { title: 'Reforestation Drive', img: im2 },
    { title: 'Renewable Energy', img: im3 },
    { title: 'Community Gardening', img: im4 },
  ];

  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Active Projects</h2>
      <div className="projects-grid">
        {projectsList.map((proj, idx) => (
          <div key={idx} className="project-card">
            <img src={proj.img} alt={proj.title} className="project-image" />
            <div className="project-info">
              <h3>{proj.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
