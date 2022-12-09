import "./Why.module.css";
import classes from "./Why.module.css";
const Why = () => {
  return (
    <div className={`container ${classes.drop}`}>
      <div className={`${classes.why}`}>
        <h1>Why Swizz?</h1>
        <h3 className={classes.headr31}>
          Swizz is the bank for everyone who believes in secure and swift banking.
          All our policies are made with our clients in mind and also the security
          of their finances. We are a reliable global bank and are invested in our
          clients satisfaction and speedy transactions.
        </h3>
      </div>
    </div>
  );
};

export default Why;
