import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function AdminLogin(){

  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if(password === "admin1234"){
      localStorage.setItem("isAdmin","true");
      navigate("/admin-products");
    }else{
      alert("Invalid password");
    }
  }

  return(
    <div>
      <Navbar />
      <h2>Admin Login</h2>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

    </div>
  )
}
