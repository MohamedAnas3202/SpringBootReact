import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/register", {
        userName,
        password,
      });
      console.log(response.data);
      alert("Registration Successful");
    } catch (e) {
      console.error("Registration Error", e);
      alert("Registration Failed");
    }
  }

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br /><br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
