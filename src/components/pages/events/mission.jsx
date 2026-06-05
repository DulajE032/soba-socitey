import './mission.css';
import { Leaf, Droplet, Sun } from 'lucide-react';

const Mission = () => {
  const missions = [
    { icon: <Leaf size={40}/>, title: 'Conservation', desc: 'Protecting fragile ecosystems and restoring natural habitats across the globe.' },
    { icon: <Droplet size={40}/>, title: 'Awareness', desc: 'Educating communities on the importance of clean water and sustainable practices.' },
    { icon: <Sun size={40}/>, title: 'Sustainability', desc: 'Promoting eco-friendly living to ensure a greener, healthier future for generations.' }
  ];

  return (
    <section className="mission-container">
      <h2 className="section-title">Our Core Missions</h2>
      <div className="mission-grid">
        {missions.map((item, index) => (
          <div key={index} className="mission-card">
            <div className="mission-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;
