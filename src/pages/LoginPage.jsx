import { loginUser } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Email</p>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          value={form["email"]}
          placeholder="Enter email..."
        />
      </label>
      <label>
        <p>Password</p>
        <input
          onChange={handleChange}
          type="text"
          name="password"
          value={form["password"]}
          placeholder="Enter password..."
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
