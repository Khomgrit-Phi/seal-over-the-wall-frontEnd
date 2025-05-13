import React from 'react';
import Carousel from '../components/Carousel';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';
import { loginUser } from "../services/authService";


import shirt from "../assets/images/login-shirt.svg";
import bag from "../assets/images/login-bag.svg";
import cup from "../assets/images/login-cup.svg";

const slides = [
    shirt,bag,cup
]

export default function Login() {


  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(email, password);
      setUser(data.user);
      console.log(data);
      navigate("/home");
    } catch (err) {
      console.error(err);
      setError(
        err?.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="flex items-center justify-center">
        <div className="w-[1440px] h-[1024px] grid grid-cols-2 shadow-xl my-[50px]">
            {/* Left Side */}
            <div className="flex col-span-1 w-full h-full items-center justify-center">
                <div className="flex flex-col items-center w-[430px] mt-[48px]">
                    <img src="src\assets\images\custommike-navbar-logo.svg" className="w-[139px] h-[18px] mb-[185px]"/>
                    <div className="flex flex-col items-center mb-[48px]">
                        <h3 className="text-4xl font-bold">Welcome Back</h3>
                        <p className="mt-[12px]">Enter your email and password to access your account</p>
                    </div>

                    {error && (
                    <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-center">
                        {error}
                    </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div className="grid grid-cols-2 w-full">
                            <label htmlFor="email" className="text-start mb-[8px]">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="col-span-2 rounded-lg border-1 border-secondary-light-gray-300 py-[14px] px-[16px] mb-[24px]"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoFocus
                                placeholder="Enter your email"
                            />

                            <label htmlFor="password" className="text-start mb-[8px]">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="col-span-2 rounded-lg border-1 border-secondary-light-gray-300 py-[14px] px-[16px]"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter your password"
                            />
                        </div>
                    </form>
                    <div className="flex justify-between w-full mt-[12px]">
                        <div className="flex">
                            <input type="checkbox" className="border-secondary-light-gray-300 rounded-lg"/>
                            <p className="ml-[8px]">
                                Remember me
                            </p>
                        </div>
                        <p className="flex text-end">
                            Forgot Password
                        </p>
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`bg-[#202020] mt-[40px] w-full h-auto rounded-lg flex py-2 justify-center hover:scale-105 duration-300 text-[#FFFFFF] text-2xl hover:cursor-pointer`}>
                        Sign In
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <div className="flex gap-[8px]">
                        <button className="flex w-[211px] h-[48px] rounded-lg border-1 border-secondary-light-gray-300 items-center justify-center gap-[8px] mt-[12px] hover:scale-105 duration-300 hover:cursor-pointer">
                            <img src="src\assets\images\google-color-svgrepo-com.svg" className="w-[24px] h-[24px]"/>
                            <p>Google</p>
                        </button>
                        <button className="flex w-[211px] h-[48px] rounded-lg border-1 border-secondary-light-gray-300 items-center justify-center gap-[8px] mt-[12px] hover:scale-105 duration-300 hover:cursor-pointer">
                            <img src="src\assets\images\facebook-svgrepo-com.svg" className="w-[24px] h-[24px]"/>
                            <p>Facebook</p>
                        </button>
                    </div>
                    <p className="mt-[185px]">Don't have an account? <Link to="/signup" className="font-semibold">Sign Up</Link></p>
                </div>
            </div>


            {/* Right Side */}
            <div className="col-span-1 w-full h-full">
                <Carousel autoSlide={true} autoSlideInterval={5000}>
                    {slides.map((s) => (
                        <img src={s} />
                    ))}
                </Carousel>
            </div>
        </div>
    </div>
  )
}
