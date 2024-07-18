import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <main>
      <p className="bg-red-500" onClick={() => navigate("/")}>
        Home
      </p>
      <p onClick={() => navigate("/login")}>Login</p>
      <p onClick={() => navigate("/list")}>List</p>
      <p onClick={() => navigate("/create")}>Creat</p>
    </main>
  );
}

export default App;
