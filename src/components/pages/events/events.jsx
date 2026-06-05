import './events.css';
import { MapPin } from 'lucide-react';
import im1 from '../../../assets/heroimages/im1.png';

const Events = () => {

  const upcomingEvents = [
    {
      id: 1,
      month: 'APR',
      day: '19',
      dateStr: '19 April 2026',
      title: 'we construct our feature protect our nature',
      location: 'පේරාදෙණිය විශ්වවිද්‍යාලය',
      desc: 'Members Only Activity Leads: Alfred Chia, Jamie Chan and Lee Ee Ling from NSS Bird Group Join the NSS Bird Group for a walk at Sungei Buloh...',
      img: im1,
    },

  ];
  return (
    <section id="events" className="events-section">
      <div className="events-header">
        <h2 className="events-title">Past Events</h2>
        <p className="events-subtitle">
          We organise a wide range of events open to members and public every month, from educational talks to birdwatching and rewilding activities. Check out our events and join us today!
        </p>
      </div>
      <div className="events-timeline-container">
        <div className="month-divider">
          <span className="month-text">April 2026</span>
          <div className="month-line"></div>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-row fade-in-up">
              <div className="event-date-box">
                <span className="event-month">{event.month}</span>
                <span className="event-day">{event.day}</span>
              </div>
              <div className="event-content">
                <h3 className="event-date-full">{event.dateStr}</h3>
                <h4 className="event-name">{event.title}</h4>
                <div className="event-location" style={{display:'flex', alignItems:'flex-start', gap:'8px'}}>
                  <MapPin size={20} color="#0d8c3f" style={{marginTop:'2px'}} />
                  <p style={{margin:0, whiteSpace:'pre-line'}}>{event.location}</p>
                </div>
                <p className="event-desc">{event.desc}</p>
                <a href="#" className="find-out-more">Find out more</a>
              </div>
              <div className="event-image-box">
                <img className="project-image" src={event.img} alt={event.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Events;
