import "./styles/header.css";
import { useInView } from "react-intersection-observer";
const Header = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  return (
    <div className="pageHeader">
      <div>
        <p className={`headerContent name ${inView1 ? "show" : ""}`} ref={ref1}>
          Barra Tahir
        </p>
        <div className="header-line"></div>
        <p
          className={`headerContent proffession ${inView2 ? "show" : ""}`}
          ref={ref2}
        >
          Animator, Motion Graphic Designer, And Voice Actor
        </p>

        <svg className="circle-top" height="5.5rem" width="6rem">
          <circle
            r="1.7rem"
            cx="0.8rem"
            cy="0.4rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
          <circle
            r="2.7rem"
            cx="0.8rem"
            cy="0.4rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
          <circle
            r="3.7rem"
            cx="0.8rem"
            cy="0.4rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
          <circle
            r="4.7rem"
            cx="0.8rem"
            cy="0.4rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
        </svg>
        <svg className="circle-bottom" height="5.5rem" width="6rem">
          <circle
            r="1.7rem"
            cx="5.5rem"
            cy="5rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
          <svg></svg>
          <circle
            r="2.7rem"
            cx="5.5rem"
            cy="5rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
          <circle
            r="3.7rem"
            cx="5.5rem"
            cy="5rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
          <circle
            r="4.7rem"
            cx="5.5rem"
            cy="5rem"
            fill="#00000000"
            stroke="#ffffff"
            strokeWidth="0.1rem"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
