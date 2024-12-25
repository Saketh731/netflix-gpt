import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="z-10 absolute w-screen px-4 md:px-8 py-2 bg-gradient-to-b from-black flex justify-between">
      <img className="w-20 md:w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 items-center">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="absolute md:static text-xs md:text-base left-2 -bottom-10 p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANGUAGES?.map((lang) => {
                return (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                );
              })}
            </select>
          )}
          <button
            onClick={handleGptSearchClick}
            className="text-xs md:text-base font-bold py-2 px-4 m-2 bg-red-700 rounded-lg text-white"
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img
            className="w-8 h-8 md:w-10 md:h-10 ml-2"
            src="https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABbDdrpeZOAMJgDuzD5581AFTiw4_pFFINZT81G61PDjkN2d4-kO6cfqu1gWzA_CHiiCPbCP3fTv0yUIRARgjzBQX5k5YWAU.png?r=98e"
            alt="userIcon"
          />
          <button
            onClick={handleSignOut}
            className="text-xs md:text-base font-bold text-white cursor-pointer ml-2"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
