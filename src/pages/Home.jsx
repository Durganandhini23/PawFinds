import HomeLandingContainer from "../components/HomeLandingContainer";
import CardBelowHome from "../components/CardBelowHome";
import PlanningToAdoptAPet from "../components/PlanningToAdoptAPet";
import "../css/home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login"); // redirect after logout
  };

  return (
    <div>
      <HomeLandingContainer />
      <CardBelowHome />
      <PlanningToAdoptAPet />
      {/* <button
        onClick={handleLogout}
        style={{ margin: "20px", padding: "10px", cursor: "pointer" }}
      >
        Logout
      </button> */}
    </div>
  );
}

export default Home;
