import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidationData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BANNER_IMG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handelButtonclick = () => {
    const message = checkValidationData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {


      // sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: USER_AVATAR
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser
            dispatch(addUser({
              uid : uid,
              email:email,
              displayName:displayName,
              photoURL:photoURL
            })
              
            )
            navigate("/browse")
          }).catch((error) => {
           setErrorMessage(error.message)
          });
        })
        .catch((error) => {
          const errCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errCode , errorMessage)
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        navigate("/browse")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        setErrorMessage(errorCode, errorMessage)
        navigate("/")
      })

    }
  };
  return (
    <div>
      <Header />
      <div className="absolute  bg-opacity-80 ">
        <img
          className="h-screen w-screen object-cover brightness-50"
          src={BANNER_IMG}
          alt="netflix_banner"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" rounded-md absolute bg-black md:w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-70 "
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name"
            className=" rounded-lg w-full p-4 mx-1 my-3 bg-black bg-opacity-30 border border-white-500"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" rounded-lg w-full p-4 mx-1 my-3 bg-black bg-opacity-30 border border-white-500"
        />

        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className=" rounded-lg w-full p-4 mx-1 my-3 bg-black bg-opacity-30 border border-white-500"
        />
        <p className="text-red-500 font-bold text-lg">{errMessage}</p>
        <button
          onClick={handelButtonclick}
          className="bg-red-600 w-full p-4 mx-1 my-3 rounded-lg"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </button>
        <p onClick={toggleSignUpForm} className="py-4 hover:cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered?Sign up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
