import "./styles/activity.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Active() {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  return (
    <div className="activityContainer">
      <div
        className={`activity activity-right ${inView ? "show-light" : ""}`}
        ref={ref}
      >
        content
      </div>
      <div
        className={`activity activity-left ${inView2 ? "show" : ""}`}
        ref={ref2}
      >
        activities
        <Link to="/Activities">got to</Link>
      </div>
    </div>
  );
}

export default Active;
