import "./styles/2020.css";
import { useInView } from "react-intersection-observer";

const Y2020 = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <div className={`Container-2020 ${inView ? "show" : ""}`} ref={ref}>
      <h2>2020</h2>
      <ul>
        <li>
          <h3>A guest at Quirat TV show in S24 channel:</h3>
          <p>
            {" "}
            After one of my videos went viral at the social media platforms, I
            was invited as a guest at the known Quirat TV show aired live in S24
            channel.
          </p>
        </li>
        <li>
          <h3>Global Game Jam (GGJ): “</h3>
          <p>
            {" "}
            I was a participant in this worldwide reputable competition as well
            as the leader and animator in my own group
          </p>
        </li>
        <li>
          <h3>
            Collaborative YouTube video with the content creator and influencer
            “Mohammed Ali”
          </h3>
          <p>
            Mohammad Ali is one of the best comedeans and voice actors in sudan
            and arabian countries, and I was invited by him to make a
            collaboration video
          </p>
        </li>
        <li>
          <h3>
            Collaborative YouTube video with the content creator and influencer
            “Muaz Osman”
          </h3>
          <p> The video was aimed to raise awareness about the COVID-19</p>
        </li>
      </ul>
    </div>
  );
};

export default Y2020;
