// HomeProfile
import HomeProfile from "../../components/HomeProfile/HomeProfile";
import UpdateHomeProfile from "../../components/HomeProfile/EditHomeProfile";
// Skills
import Skills from "../../components/Skills/Skills";
import AddSkillForm from "../../components/Skills/AddSkillsForm";
import UpdateSkillForm from "../../components/Skills/EditSkills";
// Projects
import Projects from "../../components/Project/Projects";
import AddProjectForm from "../../components/Project/AddProjectForm";
import UpdateProjectForm from "../../components/Project/EditProjectForm";
// Contact
import Contact from "../../components/Contact/Contact";
import UpdateContact from "../../components/Contact/EditContactForm";

import { AuthContext } from "../../context/auth.context";
import { useContext,useEffect } from "react";
import { portfolioService } from "../../services/portfolio.services";
import { useParams } from "react-router-dom";

function LoggedHome() {
  const params = useParams();
  console.log("params", params);
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div>
    <h3>Welcome to your Portfolio</h3>
    <div>
      <HomeProfile/>
    </div>
  </div>
  );
}

export default LoggedHome;
