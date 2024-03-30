import "../icons/footer.css";
import Facebook from "../icons/facebook";
import Gmail from "../icons/gmail";
import Instagram from "../icons/instagram";
import Whatsapp from "../icons/whatsapp";
import Youtube from "../icons/youtube";
function Footer() {
  return (
    <div className="container">
      <div className="line"></div>
      <h1>contact me</h1>
      <div className="contacts">
        <Gmail />
        <Youtube />
        <Instagram />
        <Facebook />
        <Whatsapp />
      </div>
    </div>
  );
}

export default Footer;
