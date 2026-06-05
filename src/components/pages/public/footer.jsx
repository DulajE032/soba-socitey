import { Mail, Phone, Leaf } from "lucide-react";
import './footer.css'

const Footer = () => {
  return (
    <footer className="glass-footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h3 className="logo">
            <Leaf size={20} /> Soba Society
          </h3>
          <p>Protecting nature for future generations 🌿</p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/">Home</a>

        </div>

        {/* Tech Support */}
        <div className="footer-section">
          <h4>Tech Support</h4>
          <p>Dulaj Ashen</p>
          <p><Phone size={14}/> +94 77 412 6871</p>
          <p><Mail size={14}/> dulajashennew2002@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Soba Society. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;