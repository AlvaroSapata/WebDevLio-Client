import service from "./config.services";


const getAllSkillsListService = (userId) => {
    return service.get(`/${userId}/skillsList`)
}

const createSkillsListService = (userId,newSkill) => {
    return service.post(`/${userId}/skillsList`, newSkill)
};

const editSkillsListService = (userId,updatedSkill, skillId) => {
    return service.put(`/${userId}/skillsList/${skillId}`, updatedSkill)
};


const deleteSkillsListService = (userId, skillId) => {
    return service.delete(`/${userId}/skillsList/${skillId}`)
}


export {getAllSkillsListService, createSkillsListService, editSkillsListService,deleteSkillsListService}