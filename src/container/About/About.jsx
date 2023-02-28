import React from "react";
import "./About.scss";

import { AppWrap } from "../../wrapper";

const About = () => {
  return (
    <div>
      <div className="visionStatement">
        <div className="visionSide">
          <h4>Our Vision</h4>
          {/* <div className="separator" /> */}
          <p>
            To be an Association which delivers innovative and value driven ICT
            products and services with excellence.
          </p>
        </div>
        <div className="separator" />
        <div className="aboutDitaSect">
          <h4>What are we all About ? </h4>
          <p>
            DITA is first of all a community. We learn together and grow
            together. We strive for excellence as upcoming professionals. We are
            quick to embrace new members and introduce them into our culture. We
            are a tech hub. Technology is our surname. In DITA, you matter.
          </p>
        </div>
      </div>

      <div className="missionStatement">
        <div className="missionContent">
          <h3>Our Mission</h3>
          <h6>
            To Empower Daystar Community and Beyond with enough Information
            Technology Skills.
          </h6>
          <a href="mailto:dita@daystar.ac.ke">Contact Us</a>
        </div>
        <div className="imageSide">
          <img
            src="https://www.daystar.ac.ke/student-affairs/assets/images/ihub-student.png"
            alt="pic"
          />
        </div>
      </div>
    </div>
  );
};

// export default About;
export default AppWrap(About, "about");
