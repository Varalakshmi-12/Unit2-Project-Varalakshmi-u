import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AdminLogin(){

  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {

    if(password === "admin123"){
      localStorage.setItem("isAdmin","true");
      navigate("/admin-products");
    }else{
      alert("Invalid password");
    }
  }

  return(
    <div>

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
