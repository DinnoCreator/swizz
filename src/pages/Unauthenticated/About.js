import AboutDia from "../../components/UI/Dialogue/AboutDia";
import Nav from "../../components/Layout/Unauthenticated/Nav";
import Footer from "../../components/Layout/Unauthenticated/Footer";
import Latest from "../../components/UI/Latest/Latest";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, []);
    return (
        <>
          <Nav/>
          <AboutDia/>
          <Latest/>
          <Footer/>
        </>
    );
}

export default About;