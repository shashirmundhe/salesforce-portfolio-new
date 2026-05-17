import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>DEVELOPER</h3>
              <h4>Description</h4>
              <p>
                Hands-on experience in developing custom applications using the Salesforce Platform and Lightning Web Components.
Skilled in creating responsive UI components, Apex classes, triggers, SOQL queries, and automation processes.
Knowledge of Sales Cloud, Service Cloud, workflow rules, validation rules, process builder, and flows.
Experience integrating front-end technologies like HTML, CSS, JavaScript, and React concepts with Salesforce development.
Familiar with REST APIs, data management, security models, profiles, roles, and permission sets in Salesforce.
Strong understanding of SDLC, debugging, deployment, and version control using Git and VS Code.
Ability to develop scalable and user-friendly CRM solutions based on business requirements.
Passionate about learning new Salesforce technologies and building real-time cloud-based applications.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                  <div className="what-tags">Salesforce Admin</div>
  <div className="what-tags">Sales Cloud</div>
  <div className="what-tags">Service Cloud</div>
  <div className="what-tags">Lightning Web Components</div>
  <div className="what-tags">Apex</div>
  <div className="what-tags">SOQL</div>
  <div className="what-tags">SOSL</div>
  <div className="what-tags">Flows & Automation</div>
  <div className="what-tags">Validation Rules</div>
  <div className="what-tags">Reports & Dashboards</div>
  <div className="what-tags">HTML</div>
  <div className="what-tags">CSS</div>
  <div className="what-tags">JavaScript</div>
  <div className="what-tags">Git & GitHub</div>
  <div className="what-tags">VS Code</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>ADMIN</h3>
              <h4>Description</h4>
              <p>
                Good knowledge of Salesforce Platform Administration, including user management, security settings, and data management.
Skilled in configuring profiles, roles, permission sets, sharing rules, and organization-wide defaults.
Experience working with Sales Cloud and Service Cloud applications in Salesforce.
Knowledge of creating reports, dashboards, workflow rules, validation rules, approval processes, and flows.
Familiar with data import/export tools like Data Loader and data management operations.
Ability to customize objects, fields, page layouts, record types, and Lightning apps based on business requirements.
Understanding of CRM processes, customer lifecycle management, and automation within Salesforce.
Hands-on experience with Lightning Web Components basics and Salesforce customization.
Strong problem-solving, communication, and teamwork skills with a passion for continuous learning in Salesforce technologies.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Blender</div>
                <div className="what-tags">Zbrush</div>
                <div className="what-tags">UI Design</div>
                <div className="what-tags">Motion</div>
                <div className="what-tags">Rigging</div>
                <div className="what-tags">3D Animation</div>
                <div className="what-tags">Character Design</div>
                <div className="what-tags">Modelling</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
