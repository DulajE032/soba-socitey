import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './TechCapsuleCarousel.css';

import hero from '../../../assets/heroimages/hero.jpeg';
import im0 from '../../../assets/heroimages/im0.jpeg';
import im2 from '../../../assets/heroimages/im2.png';
import im4 from '../../../assets/heroimages/im4.jpeg';
import im5 from '../../../assets/heroimages/im5.jpeg';
import im6 from '../../../assets/heroimages/im6.jpeg';
import im7 from '../../../assets/heroimages/im7.jpeg';
import im8 from '../../../assets/heroimages/im8.jpeg';
import im9 from '../../../assets/heroimages/im9.jpeg';
import im10 from '../../../assets/heroimages/im10.jpeg';

const galleryItems = [
  { id: 1, image: hero, title: 'Natural Landscape', desc: 'Preserving our natural heritage.' },
  { id: 2, image: im0, title: 'Forest Conservation', desc: 'Protecting vital forest ecosystems.' },
  { id: 3, image: im2, title: 'Community Engagement', desc: 'Building strong local relationships.' },
  { id: 4, image: im4, title: 'Wildlife Observation', desc: 'Monitoring local wildlife species.' },
  { id: 5, image: im5, title: 'Environmental Project', desc: 'Sustainable solutions for nature.' },
  { id: 6, image: im6, title: 'Eco Awareness', desc: 'Raising awareness for the planet.' },
  { id: 7, image: im7, title: 'Nature Protection', desc: 'Safeguarding natural resources.' },
  { id: 8, image: im8, title: 'Biodiversity Research', desc: 'Understanding species diversity.' },
  { id: 9, image: im9, title: 'Sustainable Future', desc: 'Working towards a green future.' },
  { id: 10, image: im10, title: 'Green Initiative', desc: 'Leading in green practices.' }
];

const TechCapsuleCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = (index) => {
    setActiveIndex(index);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const getCardClass = (index) => {
    const diff = (index - activeIndex + galleryItems.length) % galleryItems.length;
    
    if (diff === 0) return 'active';
    if (diff === 1) return 'right';
    if (diff === 2) return 'right-2';
    if (diff === galleryItems.length - 1) return 'left';
    if (diff === galleryItems.length - 2) return 'left-2';
    
    return 'hidden';
  };

  return (
    <div id ='gallery' className="tech-capsule-container">
      <div className='title'>Our Gallery</div>
      
      <div className="carousel-wrapper">
        <div className="nav-controls-mobile">
          <button className="nav-btn" onClick={handlePrev} aria-label="Previous">
            <FiChevronLeft size={24} />
          </button>
        </div>
        
        <div className="tech-capsule-track">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`tech-card ${getCardClass(index)}`}
              onClick={() => handleCardClick(index)}
            >
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <h3 className="gallery-title">{item.title}</h3>
                  <p className="gallery-desc">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="nav-controls-mobile">
          <button className="nav-btn" onClick={handleNext} aria-label="Next">
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="pagination">
        {galleryItems.map((_, idx) => (
          <div 
            key={idx} 
            className={`dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => handleCardClick(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TechCapsuleCarousel;
