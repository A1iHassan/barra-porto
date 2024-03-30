import "./styles/2021.css";
import { useInView } from "react-intersection-observer";

const Y2021 = () => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.4,
  });
  return (
    <>
      <div className={`div2021-top ${inView ? "show" : ""}`} ref={ref}>
        <div>
          <h1 className="h2021">2021</h1>
          <span>
            BREAK LOGIC ART AND MEDIA PRODUCTION, ANIMATOR MOTION GRAPHICS
            DESIGNER AND VOICE ACTOR.
          </span>
        </div>
      </div>
      <div className={`div2021 ${inView2 ? "show" : ""}`} ref={ref2}>
        <span>
          MINSISTRY OF HIGHER EDUCATION, ANIMATOR AND MOTION GRAPHICS DESIGNER
        </span>
      </div>
    </>
  );
};

export default Y2021;
