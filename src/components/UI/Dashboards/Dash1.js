// import { Link } from "react-router-dom";
// import classes from "./Dash1.module.css";
// import { useState } from "react";

// const DashOne = (props) => {
//   const [ cashVisibility, setCashVisibility ] = useState(false);
//   const HandleVisibility = () => {
//     cashVisibility === false ? 
//      setCashVisibility(true) :
//      setCashVisibility(false)
//   }
//   const listAccounts = props.accounts.map((account) => {
//     return (
//       <div
//         id="testimonialcarousels"
//         className="carousel slide"
//         data-bs-touch="true"
//       >
//         <div className={`carousel-inner ${classes.dash}`}>
//           <div className="carousel-item active">
//             <h2 className={`${classes.amount}`}>
              
//               {cashVisibility ? (
//                 <>
//                   ${Number(account.account_bal).toLocaleString()} 
//               <span className={`${classes.eye}`} onClick={HandleVisibility}>
//               &nbsp;&nbsp;
//                 <i className="fa-regular fa-eye-slash"></i>
//               </span>
//                 </>
//               ) : (
//                 <>
//                 ___&nbsp;___&nbsp;___
//               <span className={`${classes.eye}`} onClick={HandleVisibility}>
//               &nbsp;&nbsp;
//                 <i className="fa-regular fa-eye"></i>
//               </span>
//                 </>
//               )}
//             </h2>
//             <strong>
//               <em className={`${classes.fonte}`}>{account.account_name}</em>
//             </strong>
//             <br />
//             <em>Acc No: {account.account_no}</em>
//             <br />
//             <em>Acc type: {account.account_type}</em>
//             <br />
//             <br />
//             <div
//               className="container roborobo"
//               style={{
//                 paddingTop: "5%",
//                 paddingBottom: "5%",
//               }}
//             >
//               <div className="container text-center roborobo">
//                 <div className="row">
//                   <div className={`${classes.lR} roborobo col-4 shadowB`}>
//                     <Link
//                       to="/transfer"
//                       state={{
//                         accName: account.account_name,
//                         accNo: account.account_no,
//                         accType: account.account_type,
//                       }}
//                     >
//                       <span className="dash">Cash Transfer</span>
//                       &nbsp;<i className="fa-solid fa-arrow-right"></i>
//                     </Link>
//                   </div>
//                   <div className={`${classes.lR} roborobo col-4 shadowB`}>
//                     <Link
//                       to="/transfer"
//                       state={{
//                         accName: account.account_name,
//                         accNo: account.account_no,
//                         accType: account.account_type,
//                       }}
//                     >
//                       <span className="dash">Receive Cash</span>
//                       &nbsp;<i className="fa-solid fa-arrow-left"></i>
//                     </Link>
//                   </div>
//                   <div className={`${classes.lR} roborobo col-4 shadowB`}>
//                     <Link
//                       to="/transfer"
//                       state={{
//                         accName: account.account_name,
//                         accNo: account.account_no,
//                         accType: account.account_type,
//                       }}
//                     >
//                       <span className="dash">Bills Payment</span>
//                       &nbsp;<i className="fa-solid fa-clipboard"></i>
//                     </Link>
//                   </div>
//                   <div className={`${classes.lR} ${classes.padder} mt-2 roborobo col-12 shadowB`}>
//                     <Link to="/transactions" state={account.account_no}>
//                       <span className="dash">History</span>
//                       &nbsp;<i className="fa-solid fa-clock"></i>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   });

//   return <>{listAccounts}</>;
// };

// export default DashOne;
