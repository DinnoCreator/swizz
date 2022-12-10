import classes from "./ImgBack.module.css";
import { useEffect, useCallback } from "react";
import { useState } from "react";

const ImgBack = () => {
  const names = [
    "Safe and secure banking service",
    "Banking made easy and swift",
  ];
  const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * names.length);
    setnewName(names[index]);
  }, [names]);

  useEffect(() => {
    const intervalID = setInterval(shuffle, 4000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  return (
    <>
      <div
        id="caro"
        class={`${classes.caro} carousel slide carousel-fade`}
        data-bs-ride="carousel"
      >
        <div class={`carousel-inner`}>
          <div
            className={`carousel-item active ${classes.img1}`}
            data-bs-interval="6000"
          >
            <span>
              <h1 className={`${classes.imgText} ${classes.big}`}>
                Banking made easy and swift
              </h1>
              {/* <p className={`${classes.imgText} ${classes.small}`}>
          Using cutting edge technology for swift and stress free transactions
          </p> */}
            </span>
          </div>
          <div
            className={`carousel-item ${classes.img12}`}
            data-bs-interval="4000"
          >
            <span>
              <h1 className={`${classes.imgText} ${classes.big}`}>
                Safe and secure banking service
              </h1>
              {/* <p className={`${classes.imgText} ${classes.small}`}>
          Using cutting edge technology for security of client's funds
          </p> */}
            </span>
          </div>
        </div>
      </div>

      <div className={` ${classes.img} ${classes.carol}`}>
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
  );
};

export default ImgBack;
