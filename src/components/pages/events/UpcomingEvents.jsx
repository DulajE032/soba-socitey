import './UpcomingEvents.css';
import { MapPin, Calendar, Clock } from 'lucide-react';
import eventvideo from './eventVideo/new.mp4'

const UpcomingEvents = () => {
  return (
    <section id="upcoming-events" className="events-section upcoming-events-section">
      <div className="events-header">
        <h2 className="events-title">Upcoming Events</h2>
        <p className="events-subtitle">
          Don't miss out on our upcoming activities. Join us to make a difference in our environment and community.
        </p>
      </div>

      <div className="events-timeline-container">
        <div className="month-divider">
          <span className="month-text">June 2026</span>
          <div className="month-line"></div>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          <div className="event-row fade-in-up">
            <div className="event-date-box">
              <span className="event-month">JUN</span>
              <span className="event-day">08</span>
            </div>

            <div className="event-content">
              <h3 className="event-date-full">Monday, 08 June 2026</h3>
              <h4 className="event-name">BE THE LIGHT NATURE NEEDS ✨ (Project GLOWARA)</h4>
              
              <div className="event-info-grid">
                <div className="event-info-item">
                  <Clock size={18} color="#0d8c3f" />
                  <span>05:00 PM onwards</span>
                </div>
                <div className="event-location">
                  <MapPin size={18} color="#0d8c3f" />
                  <p>Department of Geography, University of Peradeniya</p>
                </div>
              </div>

              <div className="event-desc">
                <p>Are you ready to restore the fading light of fireflies from our university premises?</p>
                <p>The Soba Society warmly invites you to the official launch and expert panel discussion of Project GLOWARA, a unique environmental initiative dedicated to protecting our firefly population. Join us today to preserve this beautiful heritage of nature for generations to come! 🍃</p>
              </div>
              
              <a 
                href="https://forms.gle/MsF6qS35KYPhTSKp6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="register-btn-timeline"
              >
                Register Now
              </a>
            </div>

            <div className="event-video-box">
              <video 
                className="event-video-timeline"
                src={eventvideo}
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
