import express from "express";
const router = express.Router();
import { createCourse, getCreatorCourses } from "../controllers/course.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";


router.route("/").post(isAuthenticated,createCourse);
router.route("/").get(isAuthenticated,getCreatorCourses);


export default router;