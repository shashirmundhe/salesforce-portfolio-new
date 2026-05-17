import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Hero Fincorp Car Loan (UCL & NCL)",
    category: "Salesforce Development",
    tools: "Apex, LWC, Flows, REST API, Salesforce",
    description:
      "Worked on Salesforce implementation for New Car Loan & Used Car Loan LOBs at Hero FinCorp. Developed Apex classes, Lightning Web Components, Flows, and integration services for underwriting, RC validation, dealer processes, and customer verification. Automated multiple loan lifecycle steps to reduce manual effort and improve loan processing turnaround time.",
  },

  {
    title: "Advanced Planning & Scheduling System",
    category: "Salesforce + SAP Integration",
    tools: "Salesforce, SAP, Apex, Integration",
    description:
      "Worked on an Advanced Planning and Scheduling System for JSW Steel. Integrated SAP Order Management with Salesforce to streamline Enquiry Management, Contract Management, Order Processing, and Scheduling processes.",
  },

  {
    title: "Point of Sales System (POS)",
    category: "CRM & Loan Automation",
    tools: "Salesforce, Flow Automation, Apex",
    description:
      "Developed a Point of Sales System to manage customer payments and sales tracking. Automated loan approval processes based on CIBIL score, employment details, and earnings. Maintained records of customers, loans, schemes, and purchases.",
  },

  {
    title: "EcoPulse Energy Solutions Platform",
    category: "Salesforce Administration",
    tools: "Flows, Reports, Dashboards, Security",
    description:
      "Designed a custom enterprise Salesforce schema using Master-Detail relationships, Roll-Up Summaries, and Cross-Object formulas to monitor renewable energy assets and telemetry data. Built automated Record-Triggered Flows, implemented OWD, Permission Sets, Validation Rules, Dynamic Forms, and executive dashboards for operational insights.",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");

      if (!box.length) return;

      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;

      const rect = box[0].getBoundingClientRect();

      const parentWidth =
        box[0].parentElement!.getBoundingClientRect().width;

      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;

      translateX =
        rect.width * box.length -
        (rectLeft + parentWidth) +
        padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>

                <h4>Tools & Features</h4>
                <p>{project.tools}</p>

                <p className="work-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;