import './board.css';
import {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import images
import presidentImg from "../assets/members/president.jpeg";
import juniorImg from "../assets/members/jeditor.jpeg";
import webmaster from "../assets/members/pro.png";
import seniorEditorImg from "../assets/members/senior-editor.jpeg";
import seniorAdvisorImg from "../assets/members/seniorteshero.jpeg";
import vicePresidentImg from "../assets/members/vice-president.jpeg";
import viceSecretaryImg from "../assets/members/vice_sec.png";
import juniorTexure from "../assets/members/junior-te.jpeg";
import secretaryImg from "../assets/members/secretry.png";


const Board = () => {
  const members = [
    {
      id: 1,
      name: "Senior Professor Tilak Bandara",
      role: "Senior Advisor and Senior Treasurer",
      faculty: "University of Peradeniya",
      img: seniorAdvisorImg
    },
    {
      id: 2,
      name: "Oshan Vimesh",
      role: "President",
      faculty: "Faculty of Arts",
      batch: "22 batch",
      phone: "070 168 8327",
      img: presidentImg
    },
    {
      id: 3,
      name: "Imanthi Poornima Pieris",
      role: "Vice President",
      faculty: "Faculty of Arts",
      batch: "22 batch",
      phone: "074 318 5284",
      img: vicePresidentImg
    },
    {
      id: 4,
      name: "Vishwa M. Wanninayaka",
      role: "Secretary",
      faculty: "Faculty of Arts",
      batch: "22 Batch",
      phone: "077 238 7846",
      img: secretaryImg
    },
    {
      id: 5,
      name: "Senith Gangabada Arachchi",
      role: "Treasurer",
      faculty: "Faculty of Arts",
      batch: "22 batch",
      phone: "077 907 6653",
      img: juniorTexure // Using secretaryImg as placeholder
    },
    {
      id: 6,
      name: "Heshan Godellawaththa",
      role: "Senior Editor",
      faculty: "Faculty of Agriculture",
      batch: "22 Batch",
      phone: "071 194 9071",
      img: seniorEditorImg
    },
    {
      id: 7,
      name: "Sithmi Jayasinghe",
      role: "Vice Secretary",
      faculty: "Faculty of Agriculture",
      batch: "21 Batch",
      phone: "071 653 7134",
      img: viceSecretaryImg
    },
    {
      id: 8,
      name: "Charuka Mevan Liyanagunawardana",
      role: "Junior Editor",
      faculty: "Faculty of Engineering",
      batch: "23 batch",
      phone: "071 653 7134",
      img: juniorImg // Using secretaryImg as placeholder
    },
    {
      id: 9,
      name: "K Dulaj Ashen",
      role: "WEB MASTER",
      faculty: "Faculty of Engineering",
      batch: "22 batch",
      phone: "077 412 6871",
      img: webmaster // Using secretaryImg as placeholder
    }
  ];

  const advisors = members.filter(m => m.role.includes("Advisor"));
  const president = members.filter(m => m.role === "President");
  const executives = members.filter(m => ["Vice President", "Secretary", "Treasurer"].includes(m.role));
  const juniorBoard = members.filter(m => ["Senior Editor", "Junior Editor", "Vice Secretary", "Caption Writer","WEB MASTER"].includes(m.role));

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
            <p className="role">{member.role}</p>
            <p className="faculty">{member.faculty}</p>
            {member.batch && <p className="batch">{member.batch}</p>}
            {member.phone && <p className="phone">{member.phone}</p>}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="board-container">
      <h2 className="board-title" data-aos="fade-down">Meet Our Board</h2>
      
      {/* Advisor Row */}
      <div className="board-tier tier-1">
        {advisors.map(m => renderCard(m, true))}
      </div>

      {/* President Row */}
      <div className="board-tier tier-1">
        {president.map(m => renderCard(m, false))}
      </div>

      <div className="tier-divider" data-aos="fade-in">
        <h3>Executive Board</h3>
      </div>

      {/* Executives Row */}
      <div className="board-tier tier-2">
        {executives.map(m => renderCard(m))}
      </div>

      <div className="tier-divider" data-aos="fade-in">
        <h3>Editorial & Support Team</h3>
      </div>

      {/* Junior Board Row */}
      <div className="board-tier tier-3">
        {juniorBoard.map(m => renderCard(m))}
      </div>
    </section>
  );
};

export default Board;