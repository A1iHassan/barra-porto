import { useInView } from "react-intersection-observer";
import AboutVid from "../videos components/aboutMeVid";

import "./styles/aboutMe.css";

const AboutMe = () => {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView({
    threshold: 0.7,
  });
  return (
    <div className="about-me-container">
      <div className={`aboutMe ${inView ? "show" : ""}`} ref={ref}>
        <h2>Who is Al-Barra..?</h2>
      </div>
      <div className={`panel ${inView2 ? "show" : ""}`} ref={ref2}>
        <span className="panel-text">Want to see more ?</span>
        <AboutVid />
      </div>
    </div>
  );
};

export default AboutMe;
