import express from "express";
const router = express.Router();
import { createCourse, editCourse, getCreatorCourses } from "../controllers/course.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import upload from "../utils/multer.js";

router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourses);
router.route("/").put(isAuthenticated,upload.single("courseThumbnail"),editCourse);

export default router;