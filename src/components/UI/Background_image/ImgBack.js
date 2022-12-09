import classes from "./ImgBack.module.css";
import { useEffect, useCallback } from "react";
import { useState } from "react";

const ImgBack = () => {
  
  const names = ['Safe and secure banking service', 'Banking made easy and swift']
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setnewName(names[index]);
  }, [names]);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 4000);
      return () => clearInterval(intervalID);
  }, [shuffle])

  return (
  //   <div id="caro" class={`carousel slide carousel-fade ${classes.img0}`} data-bs-ride="carousel">
  // <div class={`carousel-inner ${classes.img0}`}>
  <>
    <div className={` ${classes.img}`}>
      <span>
        <h1 className={`${classes.imgText} ${classes.big}`}>
          {newName === "" ? names[1] : newName}
          
          </h1>
        {/* <p className={`${classes.imgText} ${classes.small}`}>
          Using cutting edge technology for swift and stress free transactions
          </p> */}
      </span>
      
    </div>
    
    </>
  //   </div>
  // </div>
  
  );
};

export default ImgBack;