import Nav from "../components/Layout/Nav";
import ImgBack from "../components/UI/Background_image/ImgBack";
import Why from "../components/UI/Why/Why";
import Perk from "../components/UI/Perks/Perk";
import Latest from "../components/UI/Latest/Latest";
import Footer from "../components/Layout/Footer";

const Home = () => {
    return (
        <>
        <Nav/>
        <ImgBack/>
        <Why/>
        <Perk/>
        <Latest/>
        <Footer/>
        </>
    );
}

export default Home;