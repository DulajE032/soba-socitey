import React from "react";
import Navbar from "../components/navbar/navBar.jsx";
import Footer from "../components/pages/public/footer.jsx";
import "./AboutUs.css";
import Board from "../pages/board.jsx";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="about-page-container">
        <div className="about-content-wrapper">

          <h1 className="about-page-title fade-in-up">
            About Soba Society
          </h1>

          <p className="about-page-subtitle fade-in-up">
            We are an officially recognized student society focused on nature conservation,
            biodiversity protection, and environmental responsibility.
          </p>

          {/* Section 1 */}
          <div className="section fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2>🌿 Our Background</h2>
            <p>
              Since our foundation at the University of Peradeniya, the Soba Society has
              worked to bridge the gap between human activities and environmental preservation.
            </p>
          </div>

          {/* Section 2 */}
          <div className="section fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2>🌪 Environmental Challenge</h2>
            <p>
              In December 2025, the Ditwa Cyclone caused severe damage to the university’s
              environment, resulting in soil erosion, destruction of trees, and loss of greenery.
            </p>
          </div>

          {/* Section 3 */}
          <div className="section fade-in-up" style={{ animationDelay: "0.4s" }}>
            <h2>🌱 The Green Project</h2>
            <p>
              In response, the Soba Society launched “Revive the Green, Restore the Pera”
              as a reforestation initiative for 2026/27.
            </p>
          </div>

          {/* Section 4 */}
          <div className="section fade-in-up" style={{ animationDelay: "0.5s" }}>
            <h2>🤝 Community Effort</h2>
            <p>
              Nearly 60 students from multiple faculties joined together on March 28
              to plant saplings along the Mahaweli riverbank.
            </p>
          </div>

          {/* Section 5 */}
          <div className="section fade-in-up" style={{ animationDelay: "0.6s" }}>
            <h2>🌳 Impact & Future</h2>
            <p>
              Beyond planting trees, the project created awareness, responsibility,
              and long-term commitment to environmental sustainability.
            </p>
          </div>

        </div>
      </div>

      <Board />
      <Footer />
    </>
  );
};

export default AboutUs;