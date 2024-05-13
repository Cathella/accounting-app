import { Link } from "react-router-dom";
import TopNav from "../components/TopNav";

function Dashboard() {
  return (
    <div className="content">
      <TopNav />
      <div>
        <h1>Dashboard</h1>
        <p>This is the Dashboard</p>
      </div>
    </div>
  );
}

export default Dashboard;
