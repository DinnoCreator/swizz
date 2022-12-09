import AboutDia from "../components/UI/Dialogue/AboutDia";
import NavMain from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import Latest from "../components/UI/Latest/Latest";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <>
          <NavMain/>
          <AboutDia/>
          <Latest/>
          <Footer/>
        </>
    );
}

export default About;