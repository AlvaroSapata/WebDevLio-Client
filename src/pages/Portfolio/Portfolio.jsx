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

function Portfolio() {
  return (
    <div>
    <h3>Welcome to your Portfolio</h3>
    <div>
      <h4>Home Profile</h4>
      <HomeProfile />
      <UpdateHomeProfile />

      <h4>Skills</h4>
      <Skills />
      <AddSkillForm />
      <UpdateSkillForm />

      <h4>Projects</h4>
      <Projects />
      <AddProjectForm />
      <UpdateProjectForm />

      <h4>Contact</h4>
      <Contact />
      <UpdateContact />
    </div>
  </div>
  );
}

export default Portfolio;
