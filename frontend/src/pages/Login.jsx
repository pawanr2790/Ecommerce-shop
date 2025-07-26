import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      currentState === "SignUp" &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-[90%] max-w-md m-auto mt-14 gap-5 p-6 "
    >
      <h2 className="text-3xl font-semibold text-gray-700 mb-4 border-b pb-2 prata-regular">
        {currentState}
      </h2>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="border w-full px-4 py-2  focus:outline-none  "
        required
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="border w-full px-4 py-2  focus:outline-none  "
        required
      />

      {currentState === "SignUp" && (
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="border w-full px-4 py-2 focus:outline-none  "
          required
        />
      )}

      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded-md transition"
      >
        {currentState}
      </button>
      <p className="text-sm text-gray-600">Forgot your password?</p>

      <p className="text-sm text-gray-600">
        {currentState === "Login"
          ? "Don't have an account?"
          : "Already have an account?"}{" "}
        <span
          className="hover:underline cursor-pointer"
          onClick={() =>
            setCurrentState(currentState === "Login" ? "SignUp" : "Login")
          }
        >
          {currentState === "Login" ? "Sign Up" : "Login"}
        </span>
      </p>
    </form>
  );
};

export default Login;
