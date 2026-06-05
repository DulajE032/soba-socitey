import './hero.css'
import im0 from '../../assets/heroimages/im0.jpeg';
import im2 from '../../assets/heroimages/im2.png';
import im3 from '../../assets/heroimages/im5.jpeg';
import im4 from '../../assets/heroimages/im4.jpeg';
import im5 from '../../assets/heroimages/im5.jpeg';
import im6 from '../../assets/heroimages/im6.jpeg';
import im7 from '../../assets/heroimages/im7.jpeg';
import im8 from '../../assets/heroimages/im8.jpeg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const images = [im0, im2, im3, im4,im5,im6,im7,im8];
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="hero-container">
      <div className="hero-background" style={{ backgroundImage: `url(${images[currentIndex]})` }}></div>
      <div className="hero-overlay"></div>
      <div className="hero-content fade-in-up">
        <h1 className="hero-title">Protect Nature, Protect Our Future</h1>
        <p className="hero-description">
          Join the Natural Society in our mission for environmental protection, 
          wildlife conservation, and spreading sustainability awareness.
        </p>
        <div className="hero-buttons">
          <a 
            href="https://forms.gle/MsF6qS35KYPhTSKp6" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Get Involved
          </a>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};
export default Hero
