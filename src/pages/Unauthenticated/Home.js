import Nav from "../../components/Layout/Unauthenticated/Nav";
import ImgBack from "../../components/UI/Background_image/ImgBack";
import Why from "../../components/UI/Why/Why";
import Perk from "../../components/UI/Perks/Perk";
import Latest from "../../components/UI/Latest/Latest";
import Footer from "../../components/Layout/Unauthenticated/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Nav />
      <ImgBack />
      <Why />
      <Perk />
      <Latest />
      <Footer />
    </>
  );
};

export default Home;
