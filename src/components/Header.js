import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && (
        <div className="flex p-2 items-center">
          <img
            className="w-10 h-10"
            src="https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbDdrpeZOAMJgDuzD5581AFTiw4_pFFINZT81G61PDjkN2d4-kO6cfqu1gWzA_CHiiCPbCP3fTv0yUIRARgjzBQX5k5YWAU.png?r=98e"
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white cursor-pointer ml-2"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
