import React from "react"
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl font-bold text-center my-7">
      Sign Up
    </h1>
    <form className="flex flex-col gap-4">
    <input type="text" placeholder="Username" id="username"
    className="bg-slate-100 p-3 rounded-lg"/>
    <input type="text" placeholder="Email" id="email"
    className="bg-slate-100 p-3 rounded-lg"/>
    <input type="password" placeholder="Password" id="password"
    className="bg-slate-100 p-3 rounded-lg"/>
    <button className="bg-slate-700 text-white rounded-lg p-3 
    hover:opacity-95 disabled:opacity-50">SIGN UP</button>
    </form>
    <div className="flex gap-2 mt-5">
      <p>Have An Account?</p>
      <Link to={"/sign-in"}>
      <span className="text-indigo-600">Sign In</span></Link>
    </div>
    </div>
  );
}