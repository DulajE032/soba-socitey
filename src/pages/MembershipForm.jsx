import React, { useState } from 'react';
import Navbar from '../components/navbar/navBar.jsx';
import Footer from '../components/pages/public/footer.jsx';
import './MembershipForm.css';

const MembershipForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real scenario, this would post to a Google Apps Script Web AppURL
    alert('Notice: To save files directly to your personal Google Drive, we recommend using your existing Google Form link, or configuring a Google Apps Script backend to handle the image upload.');
    // Example: fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', { method: 'POST', body: new FormData(e.target) })
  };

  return (
    <>
      <Navbar />
      <div className="form-page-container">
        <div className="form-card">
          <h1 className="form-title">Membership Form | Soba Society 25/26 Term</h1>
          <p className="form-subtitle">
            The Soba Society of the University of Peradeniya is an officially recognized student society dedicated to nature conservation, biodiversity protection, and the promotion of environmental responsibility.
          </p>
          <div className="contact-info">
            <p><strong>Further Information:</strong></p>
            <p>Oshan Vimesh Janaranjana - 070 168 8327</p>
            <p>Imanthi Poornima Pieris - 074 318 5284</p>
          </div>

          <form onSubmit={handleSubmit} className="membership-form">
            <div className="form-group">
              <label>Full Name *</label>
              <input type="text" name="fullName" required placeholder="Dulaj" className="form-input"/>
            </div>

            <div className="form-group">
              <label>University Registration Number *</label>
              <input type="text" name="regNumber" required className="form-input"/>
            </div>

            <div className="form-group">
              <label>Home Address *</label>
              <textarea name="address" required rows="3" className="form-input"></textarea>
            </div>

            <div className="form-group">
              <label>Birthday *</label>
              <input type="date" name="birthday" required className="form-input"/>
            </div>

            <div className="form-group">
              <label>Contact Number (WhatsApp Preferred) *</label>
              <input type="tel" name="contact" required className="form-input"/>
            </div>

            <div className="form-group">
              <label>Faculty *</label>
              <select name="faculty" required className="form-input">
                <option value="">Select Faculty...</option>
                <option value="Arts">Faculty of Arts</option>
                <option value="Agriculture">Faculty of Agriculture</option>
                <option value="Allied Health Sciences">Faculty of Allied Health Sciences</option>
                <option value="Dental Science">Faculty of Dental Science</option>
                <option value="Engineering">Faculty of Engineering</option>
                <option value="Management">Faculty of Management</option>
                <option value="Medicine">Faculty of Medicine</option>
                <option value="Science">Faculty of Science</option>
                <option value="Veterinary">Faculty of Veterinary Medicine and Animal Science</option>
              </select>
            </div>

            <div className="form-group">
              <label>Batch *</label>
              <select name="batch" required className="form-input">
                <option value="">Select Batch...</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
              </select>
            </div>

            <div className="form-group">
              <label>Why do you want to be a part of the Soba Society of University of Peradeniya? *</label>
              <textarea name="reason" required rows="4" className="form-input"></textarea>
            </div>

            <div className="form-group">
              <label>Are you willing to actively participate in society activities and events? *</label>
              <div className="radio-group">
                <label><input type="radio" name="participate" value="Yes" required/> Yes</label>
                <label><input type="radio" name="participate" value="No" required/> No</label>
              </div>
            </div>

            <div className="form-group">
              <label>Do you have any suggestions or ideas for activities, projects, or initiatives that could be conducted or further developed through the Soba Society? *</label>
              <textarea name="suggestions" required rows="4" className="form-input"></textarea>
            </div>

            <div className="form-group">
              <label>Upload a Clear Photograph of you * <br/><small>(Max 10 MB. Name: Amal De Silva.jpg)</small></label>
              <input type="file" name="photograph" accept="image/*" required className="form-input"/>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MembershipForm;
