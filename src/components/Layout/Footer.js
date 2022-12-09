import "./Footer.module.css";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={classes.st}>
    <footer>
      <div className="container ">
        <h1 className={classes.headr}>SWIZZ</h1>
        <div className="row">
        <div className="col-12 col-md-4 centerMid">
          <Link to="/" className={`${classes.cursor}`}>Home</Link>
          <Link to="/about" className={`${classes.cursor}`}>About</Link>
          <a href="/notalink" className={`${classes.cursor}`}
          onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("#latestStories");
          }}>News</a>
          <Link to="/login" className={`${classes.cursor}`}>E-Banking</Link>
          <Link to="/login" className={`${classes.cursor}`}>Contact Us</Link>
        </div>
         <div className={`col-12 col-md-4 ${classes.alice}`}>
        ©2022 Copyright <strong>SWIZZ WORLD BANK </strong>
        </div>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
