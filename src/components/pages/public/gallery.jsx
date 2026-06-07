import './gallery.css';
import { useState, useEffect } from 'react';

// Import images from assets
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

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Show 8 images per page for a better grid

  useEffect(() => {
    const data = [
      { itemImageSrc: hero, alt: 'Natural Landscape' },
      { itemImageSrc: im0, alt: 'Forest Conservation' },
      { itemImageSrc: im2, alt: 'Community Engagement' },
      { itemImageSrc: im4, alt: 'Wildlife Observation' },
      { itemImageSrc: im5, alt: 'Environmental Project' },
      { itemImageSrc: im6, alt: 'Eco Awareness' },
      { itemImageSrc: im7, alt: 'Nature Protection' },
      { itemImageSrc: im8, alt: 'Biodiversity Research' },
      { itemImageSrc: im9, alt: 'Sustainable Future' },
      { itemImageSrc: im10, alt: 'Green Initiative' }
    ];
    setImages(data);
  }, []);

  const openModal = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Pagination Logic
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentImages = images.slice(indexOfFirstItem, indexOfLastItem);

  const scrollToGallery = () => {
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      scrollToGallery();
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToGallery();
    }
  };

  return (
    <section id="g" className="gallery-container">
      <h2 className="section-title">Gallery</h2>
      
      <div className="gallery-grid">
        {currentImages.map((img, index) => (
          <div key={index} className="gallery-item" onClick={() => openModal(img)}>
            <img 
              src={img.itemImageSrc} 
              alt={img.alt} 
              className="gallery-image" 
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span>{img.alt}</span>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn" 
            onClick={goToPrevPage} 
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="pagination-info">Page {currentPage} of {totalPages}</span>
          <button 
            className="pagination-btn" 
            onClick={goToNextPage} 
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <img src={selectedImage.itemImageSrc} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
