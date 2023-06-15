import service from "./config.services";

// Gets all projects for a user
const portfolioService = (userId) => {
  return service.get(`/portfolio/${userId}`);
};

// Exports all project services
export { portfolioService };
