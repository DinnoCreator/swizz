// import DashOne from "./Dash1";
import DashTwo from "./Dash2";
// import { useState } from "react";
const View = () => {
  // const [ no, setNo ] = useState(1);

  const details = [
    {
      account_bal: "358944660",
      account_name: "Prosper Dylan",
      account_type: "Checkings",
      account_no: "3027564830",
    },
    {
      account_bal: "186564000",
      account_name: "Prosper Dylan",
      account_type: "Savings",
      account_no: "3202856830",
    },
  ];

  return <DashTwo accounts={details} />;
};

export default View;
