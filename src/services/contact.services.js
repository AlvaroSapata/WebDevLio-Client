import service from "./config.services";

const getAllContactsService = (userId) => {
    return service.get(`/${userId}/contacts`)
}

const createContactsService = (userId,newContact) => {
    return service.post(`/${userId}/contacts`, newContact)
};

const editContactsService = (userId,updatedContact, contactId) => {
    return service.put(`/${userId}/contacts/${contactId}`, updatedContact)
};


export {getAllContactsService, createContactsService, editContactsService}