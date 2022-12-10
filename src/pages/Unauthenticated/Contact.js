import DForm from "../../components/UI/Forms/D_contact/DForm";
import Nav from "../../components/Layout/Unauthenticated/Nav";
import Footer from "../../components/Layout/Unauthenticated/Footer";
import Latest from "../../components/UI/Latest/Latest";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Nav />
      <DForm />
      <Latest/>
      <Footer />
    </>
  );
};

export default Contact;
