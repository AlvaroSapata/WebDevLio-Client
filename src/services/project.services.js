import service from "./config.services";

// Gets all projects for a user
const getProjectsService = (userId) => {
  return service.get(`/${userId}/projects`);
};

// Creates a new project
const createProjectService = (userId, newProject) => {
  return service.post(`/${userId}/projects`, newProject);
};

// Updates a project
const updateProjectService = (userId, projectId, updatedProject) => {
  return service.put(`/${userId}/projects/${projectId}`, updatedProject);
};

// Deletes a project
const deleteProjectService = (userId, projectId) => {
  return service.delete(`/${userId}/projects/${projectId}`);
};

// Exports all project services
export {
  getProjectsService,
  createProjectService,
  updateProjectService,
  deleteProjectService,
};
