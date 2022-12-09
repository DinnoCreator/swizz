import DForm from "../components/UI/Forms/D_contact/DForm";
import NavMain from "../components/Layout/Nav";
import Footer from "../components/Layout/Footer";
import Latest from "../components/UI/Latest/Latest";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <NavMain />
      <DForm />
      <Latest/>
      <Footer />
    </>
  );
};

export default Contact;
