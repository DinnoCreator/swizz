// import classes from "./Dash1.module.css";
// import { useState } from "react";


// const DashTwo = (props) => {
//   const [cashVisibility, setCashVisibility] = useState(true);
//   // const name= props.accounts.rows[0].account_name;
//   const HandleVisibility = () => {
//     cashVisibility === false
//       ? setCashVisibility(true)
//       : setCashVisibility(false);
//   };
//   // States for carousel
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   // Modal visibility
//   const [show, setShow] = useState(false);

//   // Modal visibility handler
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const listAccounts = props.accounts.map((account) => {
//     return (
//       <Carousel.Item interval={60000}>
//         <h2 className={`${classes.amount}`}>
//           {cashVisibility ? (
//             <>
//               ${Number(account.account_bal).toLocaleString()}
//               <span className={`${classes.eye}`} onClick={HandleVisibility}>
//                 &nbsp;&nbsp;
//                 <i className="fa-regular fa-eye-slash"></i>
//               </span>
//             </>
//           ) : (
//             <>
//               ___&nbsp;___&nbsp;___
//               <span className={`${classes.eye}`} onClick={HandleVisibility}>
//                 &nbsp;&nbsp;
//                 <i className="fa-regular fa-eye"></i>
//               </span>
//             </>
//           )}
//         </h2>
//         <strong>
//           <em className={`${classes.fonte}`}>{account.account_name}</em>
//         </strong>
//         <br />
//         <em>Acc No: {account.account_no}</em>
//         <br />
//         <em>Acc type: {account.account_type}</em>
//         <br />
//         <br />
//         <div className={`container ${classes.hold} roborobo`}>
//           <div className="container text-center roborobo">
//             <div className="row">
//               <div
//                 className={`${classes.lR} roborobo col-4 shadowB`}
//                 onClick={handleShow}
//               >
//                 <span>Cash Transfer</span>
//                 &nbsp;<i className="fa-solid fa-arrow-right"></i>
//               </div>
//               <div
//                 className={`${classes.lR} roborobo col-4 shadowB`}
//                 onClick={handleShow}
//               >
//                 <span>Receive Cash</span>
//                 &nbsp;<i className="fa-solid fa-arrow-left"></i>
//               </div>
//               <div
//                 className={`${classes.lR} roborobo col-4 shadowB`}
//                 onClick={handleShow}
//               >
//                 <span>Bills Payment</span>
//                 &nbsp;<i className="fa-solid fa-clipboard"></i>
//               </div>
//               <div
//                 className={`${classes.lR} ${classes.padder} mt-2 roborobo col-12 shadowB`}
//                 onClick={handleShow}
//               >
//                 <span>History</span>
//                 &nbsp;<i className="fa-solid fa-clock"></i>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Carousel.Item>
//     );
//   });

//   return (
//     <>
//       <div className={`carousel-inner ${classes.dash}`}>
//         <Carousel activeIndex={index} onSelect={handleSelect}>
//           {listAccounts}
//         </Carousel>
//         {/* Handles transaction confrimation */}
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title><span style={{color: "red"}}>Account Deactivated</span></Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <h4>
//               Dear Customer, due to the inactivity of your bank account for more
//               than 5 years your account has been deactivated. You would be
//               unable to receive or transfer funds, contact us via our email
//               address: swizzworldbank@gmail.com to reactivate your account, Thank
//               you.
//             </h4>
//           </Modal.Body>
//           <Modal.Footer></Modal.Footer>
//         </Modal>
//       </div>
//     </>
//   );
// };

// export default DashTwo;
