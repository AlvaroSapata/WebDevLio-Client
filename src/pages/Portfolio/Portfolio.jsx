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
import { useContext } from "react";

function Portfolio() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
    <h3>Welcome to your Portfolio</h3>

    <h2>{user.username}</h2>
    <h2>{user.name} {user.lastName}</h2>
    <div>
      <HomeProfile/>
    </div>
  </div>
  );
}

export default Portfolio;
