import service from "./config.services";

// Uploads an image to cloud storage (cloudinary)
const uploadImageService = (imageFile) => {
  return service.post("/upload/image", imageFile);
};

// Exports the upload service
export { uploadImageService };
