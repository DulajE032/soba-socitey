import './board.css';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Board = () => {
  const members = [
    { id: 1, name: "Osan Vimesh", role: "President", img: "src/assets/members/secretry.png" },
    { id: 2, name: "Vishwa M. Wanninayaka", role: "Secretary", img: "src/assets/members/secretry.png" },
    { id: 3, name: "Sithmi", role: "Coordinator", img: "src/assets/members/secretry.png" },
    { id: 4, name: "Sarah Lee", role: "Lead Donor", img: "src/assets/members/secretry.png" },
    { id: 5, name: "Michael Brown", role: "Volunteer", img: "src/assets/members/secretry.png" },
    { id: 6, name: "Emma Smith", role: "Volunteer", img: "src/assets/members/secretry.png" },
    { id: 7, name: "John Doe", role: "Volunteer", img: "src/assets/members/secretry.png" },
    { id: 8, name: "Jane Doe", role: "Volunteer", img: "src/assets/members/secretry.png" },
  ];

  const president = members.filter(m => m.role === "President");
  const executives = members.filter(m => ["Secretary", "Coordinator", "Lead Donor"].includes(m.role));
  const volunteers = members.filter(m => m.role === "Volunteer");

  useEffect(() => {
    AOS.init();
  }, []);

  const renderCard = (member, isFeatured = false) => (
    <div key={member.id} className={`card ${isFeatured ? 'featured-card' : ''}`} data-aos="fade-up">
      <div className="card-header">
        <div className="card-image-placeholder">
          <img src={member.img} alt={member.name} className="card-image" />
          <div className="card-description">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="board-container">
      <h2 className="board-title" data-aos="fade-down">Meet Our Board</h2>
      
      {/* President Row */}
      <div className="board-tier tier-1">
        {president.map(m => renderCard(m, true))}
      </div>

      {/* Executives Row */}
      <div className="board-tier tier-2">
        {executives.map(m => renderCard(m))}
      </div>

      <div className="tier-divider" data-aos="fade-in">
        <h3>Our Dedicated Volunteers</h3>
      </div>

      {/* Volunteers Row */}
      <div className="board-tier tier-3">
        {volunteers.map(m => renderCard(m))}
      </div>
    </section>
  );
};

export default Board;