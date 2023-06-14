import service from "./config.services";

// Gets the user's home profile
const getUserHomeProfile = (userId) => {
  return service.get(`/${userId}/homeProfile`);
};

// Creates a new user's home profile
const createUserHomeProfile = (userId, newHomeProfile) => {
  return service.post(`/${userId}/homeProfile`, newHomeProfile);
};

// Updates a user's home profile
const updateUserHomeProfile = (userId, updatedHomeProfile) => {
  return service.put(`/${userId}/homeProfile`, updatedHomeProfile);
};

// Exports the user's services
export { getUserHomeProfile, createUserHomeProfile, updateUserHomeProfile };