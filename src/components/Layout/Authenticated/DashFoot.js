import "./DashFoot.module.css";
import classes from "./DashFoot.module.css";
import { Link } from "react-router-dom";
const DashFooter = () => {
  return (
    <div className={classes.st}>
      <footer>
        <div className="container ">
          <h1 className={classes.headr}>SWIZZ</h1>
          <div className="row">
            <div className="col-12 col-md-4 centerMid">
              <Link to="/dashboard" className={`${classes.cursor}`}>
                Home
              </Link>
              <Link to="/about" className={`${classes.cursor}`}>
                About
              </Link>
              <a
                href="/notalink"
                className={`${classes.cursor}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("#latestStories");
                }}
              >
                News
              </a>
              <Link to="/login" className={`${classes.cursor}`}>
                E-Banking
              </Link>
              <Link to="/contact" className={`${classes.cursor}`}>
                Contact Us
              </Link>
            </div>
            <div className={`col-12 col-md-4 ${classes.alice}`}>
              <span className="sub">
                <span className={`${classes.dara}`}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://facebook.com"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </span>
                <span className={`${classes.dara}`}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://twitter.com"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </span>
                <span className={`${classes.dara}`}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://instagram.com"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </span>
                <span className={`${classes.dara}`}>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://mail.google.com"
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </span>{" "}
                <br></br>
              </span>
              ©2022 Copyright <strong>SWIZZ WORLD BANK </strong>
            </div>
            <div className={`col-12 col-md-4 ${classes.jayden} subber`}>
              <span className={`${classes.dara}`}>
                <a rel="noreferrer" target="_blank" href="https://facebook.com">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </span>
              <span className={`${classes.dara}`}>
                <a rel="noreferrer" target="_blank" href="https://twitter.com">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </span>
              <span className={`${classes.dara}`}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://instagram.com"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </span>
              <span className={`${classes.dara}`}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://mail.google.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashFooter;
