import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../features/auth/newUser";

const Signup = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="h-screen w-screen bg-slate-500 flex items-center justify-center">
      <div className="h-[70vh] w-[70vw] bg-slate-200 flex items-center justify-center flex-col">
        <form
          className="flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold">User Signup</h1>
          <div className="flex flex-col gap-1">
            <label>Username</label>
            <input
              className="p-1 outline-none border border-gray-200"
              type="text"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              className="p-1 outline-none border border-gray-200"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Password</label>
            <input
              className="p-1 outline-none border border-gray-200"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <button className="px-5 py-2 bg-blue-500 text-white rounded-md text-lg font-semibold">
            Signup
          </button>
        </form>

        <div className="mt-8">
          Existing user?{" "}
          <Link to="/" className="font-semibold underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
