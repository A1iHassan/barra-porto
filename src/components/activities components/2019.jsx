import "./styles/2019.css";
import { useInView } from "react-intersection-observer";

const Y2019 = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <div className={`container-2019 ${inView ? "show" : ""}`} ref={ref}>
      <h2>2019</h2>
      <ul>
        <li>
          <h3>KOMIKA: Comics, cartoon, graphic novels.</h3>
          <p>
            (Goethe institut) “2019” I was one of the content creators in this
            event. Some of my artworks were used as an example in the animation
            industry.
          </p>
        </li>
        <li>
          <h3>Workshop and the reopening of AlSafia Youth Club “SD”:</h3>
          <p>
            ” The workshop was dedicated to teach people how to be one of the
            content creators on YouTube. I was one of the examples used in this
            event.
          </p>
        </li>
        <li>
          <h3>A headline at Aljazeera Hashtag TV show:</h3>
          <p>
            One of my videos hit the headline of “Hashtag” TV show in Aljazeera
            news channel.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Y2019;
