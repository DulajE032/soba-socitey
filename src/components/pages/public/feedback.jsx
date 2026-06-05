import './feedback.css';
import clip1 from '../../../assets/videoclips/clip1.mp4';

const dummyFeedbacks = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Volunteer",
    message: "The recent river cleanup was incredibly well-organized. It felt great to make a tangible difference in our community!"
  },
  {
    id: 2,
    name: "Mark T.",
    role: "Nature Enthusiast",
    message: "I learned so much during the wildlife observation event. The team is very knowledgeable and passionate."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Community Member",
    message: "A fantastic initiative! Planting those trees made me feel connected to nature again. Highly recommend joining."
  }
];

const Feedback = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formspree.io/f/mqedknde", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("Thank you! Your feedback has been sent.");
        e.target.reset();
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending feedback. Please try again.");
    }
  };

  return (
    <section className="feedback-container fade-in-up">
      <div className="feedback-grid">
        <div className="feedback-content">
          <h2 className="feedback-title">We Value Your Feedback</h2>
          <p className="feedback-subtitle">Let us know how we can improve our activities and initiatives to better serve nature.</p>
          <form className="feedback-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" className="clean-input" required />
            <input type="email" name="email" placeholder="Your Email" className="clean-input" required />
            <textarea name="message" placeholder="Your Feedback..." rows="5" className="clean-input" required></textarea>
            <button type="submit" className="btn-primary" style={{border: 'none', width: 'fit-content'}}>Submit Review</button>
          </form>
        </div>

        <div className="feedback-video-container">
          <h3 className="video-title">Recently Happened Events</h3>
          <div className="video-wrapper">
            <video
              className="feedback-video"
              controls
              playsInline
              preload="metadata"
            >
              <source src={clip1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="video-caption">Past Events of soba society!</p>
        </div>
      </div>

      <div className="feedback-cards-section">
        <h3 className="feedback-cards-title">What People Are Saying</h3>
        <div className="feedback-cards-grid">
          {dummyFeedbacks.map((fb) => (
            <div key={fb.id} className="glass-card">
              <div className="glass-card-header">
                <div className="avatar">{fb.name.charAt(0)}</div>
                <div>
                  <h4 className="user-name">{fb.name}</h4>
                  <p className="user-role">{fb.role}</p>
                </div>
              </div>
              <p className="glass-card-message">"{fb.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
