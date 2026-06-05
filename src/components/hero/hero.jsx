import './hero.css'
import im1 from '../../assets/heroimages/im1.png';
import im2 from '../../assets/heroimages/im2.png';
import im3 from '../../assets/heroimages/im3.png';
import im4 from '../../assets/heroimages/im4.png';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const images = [im1, im2, im3, im4];
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
          <button className="btn-primary" onClick={() => navigate('/form')}>Get Involved</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};
export default Hero
