import classes from "./ImgBack.module.css";

const ImgBack = () => {
  return (
    <div id="caro" class={`carousel slide carousel-fade ${classes.img0}`} data-bs-ride="carousel">
  <div class={`carousel-inner ${classes.img0}`}>
    <div className={`carousel-item active ${classes.img}`}>
      <span>
        <h1 className={`${classes.imgText} ${classes.big}`}>Banking made easy and swift</h1>
        {/* <p className={`${classes.imgText} ${classes.small}`}>
          Using cutting edge technology for swift and stress free transactions
          </p> */}
      </span>
      
    </div>
    <div className={`carousel-item ${classes.img}`} data-bs-interval="4000">
      <span>
        <h1 className={`${classes.imgText} ${classes.big}`}>Safe and secure banking service</h1>
        {/* <p className={`${classes.imgText} ${classes.small}`}>
          Using cutting edge technology for security of client's funds
          </p> */}
      </span>
    </div>
    </div>
  </div>
  
  );
};

export default ImgBack;