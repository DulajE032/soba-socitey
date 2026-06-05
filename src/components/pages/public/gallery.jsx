import './gallery.css';
import im1 from '../../../assets/heroimages/im1.png';
import im2 from '../../../assets/heroimages/im2.png';
import im3 from '../../../assets/heroimages/im3.png';
import im4 from '../../../assets/heroimages/im4.png';
import wa1 from '../../../assets/heroimages/WhatsApp Image 2026-04-18 at 14.47.55 (2).jpeg';
import wa2 from '../../../assets/heroimages/WhatsApp Image 2026-04-18 at 14.47.56.jpeg';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Show 4 images per page for a good grid look

  useEffect(() => {
    const data = [
      { itemImageSrc: im1, alt: 'River Cleanup' },
      { itemImageSrc: wa1, alt: 'Forest Drive' },
      { itemImageSrc: im2, alt: 'Community Meetup' },
      { itemImageSrc: wa2, alt: 'Nature Session' },
      { itemImageSrc: im3, alt: 'Green Project' },
      { itemImageSrc: im4, alt: 'Wildlife Observation' }
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
    <section id="gallery" className="gallery-container">
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
