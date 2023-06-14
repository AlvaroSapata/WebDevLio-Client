import { createContext, useEffect, useState } from "react";
import { verifyService } from "../services/auth.services";
import { useParams } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

const AuthContext = createContext();

function AuthWrapper(props) {
  // State to know if is User Logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to know who is logged in
  const [user, setUser] = useState(null);

  // State to make the app start validating the token
  const [isLoading, setIsLoading] = useState(true);

  // State to know if the logged user is the same as the user from params
  const [isOwner, setIsOwner] = useState(false);

  // Gets the user id from the URL
  // const { userId} = useParams();

  useEffect(() => {
    authenticateUser();
  }, []);

  // Invokes the verify service to check if the token is valid
  const authenticateUser = async (userId) => {
    try {
      const response = await verifyService();
      // Gets email,name, last name, username and ID from the response
      console.log("token checked", response);

      // From this point the user is logged in
      setIsLoggedIn(true);

      // Gets the user data from the payload
      setUser(response.data._id);

      // Stop Loading
      setIsLoading(false);

      // Checks if the logged user is the same as the user from URL params
      //todo Pensar si esto va aqui o no
      // console.log(response.data._id);
      // console.log(userId);
      if (response.data._id === userId) {
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }
    } catch (error) {
      // Updates app state
      setIsLoggedIn(false);
      setUser(null);
      setIsLoading(false);
      setIsOwner(false);
    }
  };
  // Context to pass to the child components
  const passedContext = {
    isLoggedIn,
    user,
    authenticateUser,
    isOwner,
  };

  if (isLoading) {
    return <PuffLoader color="#36d7b7" />;

    // Renders app with the passed context
  }
  return (
    <AuthContext.Provider value={passedContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

//* wrap app in index.js

export { AuthContext, AuthWrapper };
