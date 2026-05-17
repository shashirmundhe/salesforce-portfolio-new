import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications</h4>
                <h5>Savitribai Phule Pune University </h5>
                <h5>Trinity Academy of Engineering</h5>
              </div>
              <h3>2022- 2024</h3>
            </div>

            <p>
  Completed Master of Computer Applications (MCA) post-graduation with
  focus on software development, programming concepts, database
  management, and web technologies.
</p>
          </div>

          {/* Salesforce Training */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Salesforce Developer & Admin Training</h4>
                <h5>Self Learning & Projects</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>

            <p>
              Gained hands-on experience in Salesforce Administration, Apex,
              Lightning Web Components (LWC), Flows, Validation Rules, Reports,
              Dashboards, and CRM customization.
            </p>
          </div>

          {/* Current Status */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Aspiring Salesforce Developer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Building real-time Salesforce projects and improving development
              skills in Apex, LWC, integrations, and cloud-based application
              development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;