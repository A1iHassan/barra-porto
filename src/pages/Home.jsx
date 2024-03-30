import AboutMe from "../components/home components/aboutMe";
import Active from "../components/home components/activities";
import Clients from "../components/home components/clients";
import Header from "../components/home components/header";
import SamplesPanel from "../components/home components/samplesPanel";
import SkillsPrograms from "../components/home components/skills";
import Work from "../components/home components/work";

function Home() {
  return (
    <>
      <Header />
      <AboutMe />
      <SamplesPanel />
      <Work />
      <SkillsPrograms />
      <Active />
      <Clients />
    </>
  );
}

export default Home;
