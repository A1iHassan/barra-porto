import "./styles/work.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
function Work() {
  const [ref, inview] = useInView({
    threshold: 0.7,
  });
  const [ref2, inview2] = useInView({
    threshold: 0.5,
  });
  return (
    <div className="workContainer">
      <div
        className={`work work-left ${inview2 ? "show-light" : ""}`}
        ref={ref2}
      >
        content
      </div>
      <div className={`work work-right  ${inview ? "show" : ""}`} ref={ref}>
        <h2>Work Experience</h2>
        <span>
          Throughout my career, I had worked with for multiple people and
          companies since 2019 and up to this day ...
        </span>
        <Link to="/WorkExperience">See more </Link>
      </div>
    </div>
  );
}

export default Work;
