import { useEffect } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import Login from "./Login";
import Browse from "./Browse";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import ErrorPage from "./ErrorPage";

const Body = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      } else {
        dispatch(removeUser());
      }
    });
  }, []);
  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;
