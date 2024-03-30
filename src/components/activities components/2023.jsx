import "./styles/2023.css";
import { useInView } from "react-intersection-observer";

const Y2023 = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className={`container-2023 ${inView ? "show" : ""}`} ref={ref}>
      <h2>2023</h2>
      <ul>
        <li>
          <h3>A headline at Sabah alarabia TV show in Alarabia channel:</h3>
          <p>
            After the publishing of “TVs the awakening” game on steam platform
            that was developed by CTRL A studio, it went viral al over the
            globe. The game was aired live on “sabah alarabia” TV show, and I
            was one of CTRL A studio team that been shown up on the TV program.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Y2023;
