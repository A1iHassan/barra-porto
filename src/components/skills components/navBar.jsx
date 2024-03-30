import "./styles/navBar.css";
import { Link } from "react-router-dom";
import AfterEffect from "../../icons/afterEffect";
import Blender from "../../icons/blender";
import Illustrator from "../../icons/illustrator";
import Premier from "../../icons/premier";
import Photoshop from "../../icons/photoshop";
import Animate from "../../icons/animate";
import Flipaclip from "../../icons/flipaclip";
import PD from "../../icons/pd";
import Moho from "../../icons/moho";
const NavBar = () => {
  return (
    <nav className="icon-nav">
      <div className="clickable ">
        <Link to="/Skills/">
          <AfterEffect />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <Blender />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <Illustrator />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <Premier />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <Photoshop />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <Animate />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <Flipaclip />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <PD />
        </Link>
      </div>
      <div className="clickable ">
        <Link>
          <Moho />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
