import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute  bg-opacity-80 ">
        <img className=" brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/US-en-20250106-TRIFECTA-perspective_65e335d4-6f1e-4d03-8daa-e439fbaaa340_large.jpg"
          alt="netflix_banner"
        />
      </div>
      <form className=" rounded-md absolute bg-black w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 ">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm &&  <input
          type="text"
          placeholder="Full Name"
          className=" rounded-lg w-full p-4 mx-1 my-3 bg-black bg-opacity-30 border border-white-500"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className=" rounded-lg w-full p-4 mx-1 my-3 bg-black bg-opacity-30 border border-white-500"
        />
       
        <input
          type="password"
          placeholder="Enter password"
          className=" rounded-lg w-full p-4 mx-1 my-3 bg-black bg-opacity-30 border border-white-500"
        />
        <button className="bg-red-600 w-full p-4 mx-1 my-3 rounded-lg">
        {isSignInForm ? "Sign In" : "Sign Up"}        </button>
        <p onClick={toggleSignUpForm} className="py-4 hover:cursor-pointer">
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered?Sign up now"}
          </p>
      </form>
    </div>
  );
};

export default Login;
