import "./styles/2022.css";
import { useInView } from "react-intersection-observer";

const Y2022 = () => {
  const [ref, inView] = useInView({
    threshold: 0.8,
  });
  const [ref1, inView1] = useInView({
    threshold: 0.4,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.4,
  });
  return (
    <>
      <div className={`div2022-top ${inView ? "show" : ""}`} ref={ref}>
        <div>
          <h1 className="h2022">2022</h1>
          <span>KEPTA AGENCY, MOTION GRAPHICS DESIGNER</span>
        </div>
      </div>
      <div className={`div2022 ${inView1 ? "show" : ""}`} ref={ref1}>
        <span> CTRL A STUDIO, VOICE ACTOR</span>
      </div>
      <div className={`div2022 ${inView2 ? "show" : ""}`} ref={ref2}>
        <span>
          OFFPOINT MEDIA AGENCY, ANIMATOR AND MOTION GRAPHICS DESIGNER
        </span>
      </div>
    </>
  );
};

export default Y2022;
