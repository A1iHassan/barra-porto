import "../home components/styles/aboutMe.css";

const AboutVid = () => {
  return (
    <video className="aboutVid" autoPlay muted loop>
      <source src="/videos/1.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AboutVid;
