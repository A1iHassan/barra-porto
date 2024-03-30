import "./styles/2020.css";
import { useInView } from "react-intersection-observer";

const Y2020 = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
  });
  return (
    <div className={`container-2020 ${inView ? "show" : ""}`} ref={ref}>
      <h1 className="h2020">2020</h1>
      <span>designed a logo for digital marketing</span>
    </div>
  );
};

export default Y2020;
