import Blog from "./components/Blog";
import Experts from "./components/Experts";
import Participants from "./components/Participants";
import Partners from "./components/Partners";
import Sales from "./components/Sales";
import Services from "./components/Services";
import Slider from "./components/Slider";

export default function Home() {
  return (
    <>
      <Slider />

      <Services />

      <Participants />

      <Experts />

      <Blog />

      <Sales />

      <Partners />
    </>
  );
}
