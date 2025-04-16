import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    alert("Hai effettuato il logout");
    navigate("/");
  }

  return (
    <div>
      <Link to="profile"> Profilo</Link> |{" "}
      <Link to="settings"> Impostazioni</Link>
      <h2>Dashboard</h2>
      <Outlet />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
