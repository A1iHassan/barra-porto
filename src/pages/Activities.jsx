import { useEffect } from "react";
import Y2019 from "../components/activities components/2019";
import Y2020 from "../components/activities components/2020";
import Y2022 from "../components/activities components/2022";
import Y2023 from "../components/activities components/2023";

function Activities() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <Y2019 />
      <Y2020 />
      <Y2022 />
      <Y2023 />
    </>
  );
}

export default Activities;
