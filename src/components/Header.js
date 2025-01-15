import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
const user = useSelector(store => store.user)
console.log(user)

const handleSignOut = () =>{
signOut(auth).then(() => {
navigate("/")
dispatch(removeUser())
}).catch((error) => {
  navigate("/error")

})
}

  return (
    <div className=" w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
      className="w-40"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="flex p-3">
        <img className="w-11 h-11 " src={user?.photoURL} alt="user_logo" />
        <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  (Sign Out)
</button>

      </div>}
    </div>
  );
};

export default Header;
