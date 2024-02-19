import { set } from "mongoose";
import React, { useState } from "react"
import { Link } from "react-router-dom";

export default function SignUp() {

// Setting all into one data
const [formData, setFormData] = useState({});
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);


const handleChange = (e) => {
setFormData({ ...formData, [e.target.id]: e.target.value });
}

// Function to handle the submit of form
const handleSubmit = async (e) => {
// Prevent from reloading the page
  e.preventDefault(); 

  try {
    setLoading(true);  // Set loading true when user is submitting the form
    setError(false);               // Hide any previous errors
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // Data sent to server
    });
    
    const data = await res.json();
    setLoading(false);
    if (data.success === false); {   // If there is an error then show it on screen
      setError(true);
      return;
    }
    console.log(data); {message: "User created!"};
  } catch (error) {
    setLoading(false);
    setError(true);
  }

};



  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl font-bold text-center my-7">
      Sign Up
    </h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
    <input 
    type="text" 
    placeholder="Username" 
    id="username"
    className="bg-slate-100 p-3 rounded-lg"
    onChange={handleChange}
    />

    <input 
    type="text" 
    placeholder="Email" 
    id="email"
    className="bg-slate-100 p-3 rounded-lg"
    onChange={handleChange}
    />

    <input 
    type="password" 
    placeholder="Password" 
    id="password"
    className="bg-slate-100 p-3 rounded-lg"
    onChange={handleChange}
    />

    <button disabled={loading} className="bg-slate-700 text-white rounded-lg p-3 
    hover:opacity-95 disabled:opacity-50 uppercase">
    {loading ? 'Loading...' : 'Sign Up'}
    </button>
    </form>
    <div className="flex gap-2 mt-5">
      <p>Have An Account?</p>
      <Link to={"/sign-in"}>
      <span className="text-indigo-600">Sign In</span></Link>
    </div>
    <p className="text-red-700 mt-5 flex justify-center">{error && 'Something Went Wrong!'}</p>
    </div>
  );
}