import classes from "./Perk.module.css";
import { Link } from "react-router-dom";

function Perk() {
  return (
    <section className={classes.features}>
      <div className="row">
        <h1>What do we offer?</h1>
        <div className={`${classes.featureBox} col-lg-4`}>
          <Link to="/about-us">
            <i className={`fa-solid fa-lock ${classes.icon}`}></i>
          </Link>
          <h3 className={classes.featuresHeading}>Secure Banking</h3>
          <p>
            Your data and funds would be securely protected.
          </p>
        </div>
        <div className={`${classes.featureBox} col-lg-4`}>
          <Link to="/about-us">
            <i className={`fa-solid fa-chart-pie ${classes.icon}`}></i>
          </Link>
          <h3 className={classes.featuresHeading}>Investment</h3>
          <p>
            We offer you the best and safest investment options.
          </p>
        </div>
        <div className={`${classes.featureBox} col-lg-4`}>
          <Link to="/about-us">
            <i className={`fa-solid fa-boxes-stacked ${classes.icon}`}></i>
          </Link>
          <h3 className={classes.featuresHeading}>Multiple Methods</h3>
          <p>
            A good number of ways for you to bank.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Perk;