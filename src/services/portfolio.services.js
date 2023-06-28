import service from "./config.services";

// Gets all projects for a user
const portfolioService = (userName) => {
  return service.get(`/portfolio/${userName}`);
};

// Exports all project services
export { portfolioService };
