import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../features/auth/authLogin";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user));
    navigate("/user");
  };
  return (
    <div className="h-screen w-screen bg-slate-500 flex items-center justify-center">
      <div className="h-[70vh] w-[70vw] bg-slate-200 flex items-center justify-center flex-col">
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleLogin}
        >
          <h1 className="text-4xl font-bold">User Login</h1>
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              className="p-1 outline-none border border-gray-200"
              type="text"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              className="p-1 outline-none border border-gray-200"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button className="px-5 py-2 bg-blue-500 text-white rounded-md text-lg font-semibold">
            Login
          </button>
        </form>

        <div className="mt-8">
          New user?{" "}
          <Link to="/signup" className="font-semibold underline">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
