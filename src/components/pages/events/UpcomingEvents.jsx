import './UpcomingEvents.css';

const UpcomingEvents = () => {
  return (
    <section className="upcoming-events-container">
      <h2 className="section-title">Upcoming Events</h2>
      
      <div className="coming-soon-wrapper">
        <div className="coming-soon-badge">Coming Soon</div>
        <p className="coming-soon-text">
          We are planning exciting new activities! Stay tuned for more updates on our next cleanups, tree planting drives, and community meetups.
        </p>
      </div>
    </section>
  );
};

export default UpcomingEvents;
