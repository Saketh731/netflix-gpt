useRef - lets you reference a value that's not needed for rendering.
**NOTE:** If we create a <button/> inside the <form/> then on click of button it will refresh the page because on click of button the 'onSubmit' function of the <form/> will be called which will automatically refresh the page. To stop this you need to do - <form onSubmit={(e) => e.preventDefault()}/></form> on 'form' tag

Steps for deploying project in Firebase
.......................................

1. npm install -g firebase-tools - To install firebase CLI
2. firebase login - to login to firebase
3. firebase init - to initialize firebase by selecting hosting
4. firebase deploy - to deploy firebase

Note: To navigate to a different route, you can use 'useNavigate' hook from react-router-dom;
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
navigate("/browser")

With <React.StrictMode> every call will happen twice, because react does some additional steps to check for inconsistencies. This happens only in local . So you can keep this. It's good for development

<React.StrictMode>
<App />
</React.StrictMode>
