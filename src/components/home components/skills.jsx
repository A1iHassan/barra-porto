import "./styles/skills.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import AfterEffect from "../../icons/afterEffect";
import Blender from "../../icons/blender";
import Illustrator from "../../icons/illustrator";
import Premier from "../../icons/premier";
import Photoshop from "../../icons/photoshop";
import Animate from "../../icons/animate";
import Flipaclip from "../../icons/flipaclip";
function SkillsPrograms() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <div className="skillsContainer">
      <div className={`skills skills-left ${inView ? "show" : ""}`} ref={ref}>
        <h2>Skill Set</h2>
        <span>
          a designer's tool bag is his first and last weapon that he trusts in
          the face of any hard task he faces ...
        </span>
        <Link to="/Skills">See more</Link>
      </div>
      <div
        className={`skills skills-right ${inView2 ? "show-light" : ""}`}
        ref={ref2}
      >
        <div className="icon-container">
          <AfterEffect />
          <Blender />
          <Illustrator />
          <Premier />
          <Photoshop />
          <Animate />
          <Flipaclip />
        </div>
      </div>
    </div>
  );
}

export default SkillsPrograms;
