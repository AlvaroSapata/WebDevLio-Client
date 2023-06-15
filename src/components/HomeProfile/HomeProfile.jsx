import { AuthContext } from "../../context/auth.context";
import { useContext, useEffect, useState } from "react";
import { getUserHomeProfile } from "../../services/homeProfile.services";
import { useParams } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

function HomeProfile() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [isOwner, setIsOwner] = useState(false);

  const [homeProfile, setHomeProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const response = await getUserHomeProfile(user._id);
      console.log(response.data);
      setHomeProfile(response.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <PuffLoader color="#36d7b7" />;
  }

  return (
    <div>
      <h2>Home Profile</h2>
      {isOwner ? <p>true</p> : <p>false</p>}

      <div>
        <h3>Title: {homeProfile.title}</h3>
        <p>Description: {homeProfile.description}</p>
        <p>
          Profile Image:{" "}
          <img src={homeProfile.profileImage} alt="profile" width={"100px"} />
        </p>
        <p>
          Background Image:{" "}
          <img
            src={homeProfile.backgroundImage}
            alt="profile"
            width={"100px"}
          />
        </p>
        <h4>Links:</h4>
        <ul>
          {homeProfile.links &&
            homeProfile.links.map((link, index) => <li key={index}>{link}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default HomeProfile;
