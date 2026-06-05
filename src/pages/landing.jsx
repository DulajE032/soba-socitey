// soba/src/pages/landing.jsx
import Navbar from "../components/navbar/navBar.jsx";
import Hero from "../components/hero/hero.jsx";
import About from "../components/pages/about/about.jsx";
import Mission from "../components/pages/events/mission.jsx";
import Projects from "../components/pages/events/projects.jsx";
import Events from "../components/pages/events/events.jsx";
import UpcomingEvents from "../components/pages/events/UpcomingEvents.jsx";
import Gallery from "../components/pages/public/gallery.jsx";
import Feedback from "../components/pages/public/feedback.jsx";
import Footer from "../components/pages/public/footer.jsx";
import SocialWidget from "../components/pages/public/SocialWidget.jsx";

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Mission />
        <Events />
        <UpcomingEvents />
        <Projects />
        <Gallery />
        <Feedback />
        <SocialWidget />
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;