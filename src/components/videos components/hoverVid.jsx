import { useState, useRef } from "react";
import "../home components/styles/samplesPanel.css";

const HoverVideo = ({ src }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef();
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (ref.current) {
      ref.current.pause();
      ref.current.currentTime -= 10;
    }
  };

  const handlePlay = () => {
    if (ref.current) {
      ref.current.play();
    }
  };

  return (
    <div
      onMouseEnter={handlePlay}
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleHover}
    >
      <video
        ref={ref}
        src={src}
        onMouseEnter={handlePlay}
        onMouseLeave={handleMouseLeave}
        autoPlay={isHovered}
        muted
        loop
        className="vid-comp"
      />
    </div>
  );
};

export default HoverVideo;
