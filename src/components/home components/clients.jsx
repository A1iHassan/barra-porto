import "./styles/clients.css";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

function Clients() {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  return (
    <div className={`clients ${inView ? "show" : ""}`} ref={ref}>
      <div className="clientsDiv">
        <span>Clients whom I've worked with before</span>
        <ul>
          <li>MY APPLE STORE, MOTION GRAPHIC</li>
          <li>ICON FOR DIGITAL MARKETING, MOTION GRAPHIC.</li>
          <li>DELALA.COM, MOTION GRAPHIC.</li>
          <li>
            MINSISTRY OF HIGHER EDUCATION “SD”, ANIMATION AND MOTION GRAPHICS.
          </li>
          <li>XCMG, ANIMATION AND MOTION GRAPHIC.</li>
          <li>AUTOCARE, MOTION GRAPHIC.</li>
          <li>ALWAHA TEA, LOGO ANIMATION AND MOTION GRAPHIC.</li>
          <li>NIDAL ALMISMARY, LOGO ANIMATION.</li>
          <li>AMIN CRYPTOCURRENCY TRADING PLATFORM, MOTION GRAPHIC.</li>
          <li>AFRAA ALNAEMY, MOTION GRAPHIC INTRO</li>
          <li>MECC QATAR, MOTION GRAPHICS POSTER.</li>
        </ul>
        <Link to="/WorkExperience">See more of my past experiences ...</Link>
        <Link to="/Activities">See other activities I participated in ...</Link>
      </div>
    </div>
  );
}

export default Clients;
