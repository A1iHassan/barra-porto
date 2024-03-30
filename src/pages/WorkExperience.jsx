import Y2020 from "../components/work components/2020";
import Y2021 from "../components/work components/2021";
import Y2022 from "../components/work components/2022";
import Headr from "../components/work components/header";
import { useEffect } from "react";

function WorkExperience() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <Headr />
      <Y2020 />
      <Y2021 />
      <Y2022 />
    </>
  );
}

export default WorkExperience;
