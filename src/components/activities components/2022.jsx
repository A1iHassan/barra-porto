import "./styles/2022.css";
import { useInView } from "react-intersection-observer";

const Y2022 = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className={`container-2022 ${inView ? "show" : ""}`} ref={ref}>
      <h2>2022</h2>
      <ul>
        <li>
          <h3>Orooma job festival:</h3>
          <p>I was one of Break Logic company team to represent the company</p>
        </li>
        <li>
          <h3>Sudanese European film festival:</h3>
          <p>
            {" "}
            I was one of Break Logic company team to cover the film festival at
            Khartoum international fair.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Y2022;
