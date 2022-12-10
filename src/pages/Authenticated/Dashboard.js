// import DashOne from "../../components/UI/Dashboards/Dash1";
import DashTwo from "../../components/UI/Dashboards/Dash2";
import DashNav from "../../components/Layout/Authenticated/DashNav";
import DashFooter from "../../components/Layout/Authenticated/DashFoot";

const Dashboard = () => {
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
  return (
    <>
      <DashNav />
      <DashTwo accounts={details} />
      <DashFooter />
    </>
  );
};

export default Dashboard;
