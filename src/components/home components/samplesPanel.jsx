import HoverVideo from "../videos components/hoverVid";
import "./styles/samplesPanel.css";

const SamplesPanel = () => {
  return (
    <>
      <div className="samples">
        <HoverVideo src="/videos/vidComp1.mp4" />
        <HoverVideo src="/videos/vidComp2.mp4" />
        <HoverVideo src="/videos/vidComp3.mp4" />
        <HoverVideo src="/videos/vidComp4.mp4" />
        <HoverVideo src="/videos/vidComp5.mp4" />
      </div>
    </>
  );
};

export default SamplesPanel;
