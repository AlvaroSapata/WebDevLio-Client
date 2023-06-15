import { AuthContext } from "../../context/auth.context";
import { useContext, useEffect, useState } from "react";
import { getUserHomeProfile } from "../../services/homeProfile.services";
import { useParams } from "react-router-dom";
import PuffLoader from "react-spinners/PuffLoader";

function HomeProfile() {
  const { userId } = useParams();
  const [homeProfile, setHomeProfile] = useState(null); // Cambiado a null en lugar de []
  const [isLoading, setIsLoading] = useState(true);


  const getData = async () => {
    try {
      console.log(userId)
      // const response = await getUserHomeProfile("648ad0f12904a8b8c1a1534c");
      const response = await getUserHomeProfile(userId);
      console.log("Response: ", response);
      setHomeProfile(response.data);
      setIsLoading(false)
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
      <div>
        <h3>Title: {homeProfile.title}</h3>
        <p>Description: {homeProfile.description}</p>
        <p>Profile Image: {homeProfile.profileImage}</p>
        <p>Background Image: {homeProfile.backgroundImage}</p>
        <p>Created At: {homeProfile.createdAt}</p>
        <p>Updated At: {homeProfile.updatedAt}</p>
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
