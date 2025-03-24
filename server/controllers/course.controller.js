import { Course } from "../models/course.model.js";
import {deleteMediaFromCloudinary} from "../utils/Cloudinary.js"

export const createCourse = async (req, res) => {
  try {
    const { courseTitle, category } = req.body;
    if (!courseTitle || !category) {
      return req.status(400).json({
        message: "Course title and category are required",
      });
    }

    const course = await Course.create({
      courseTitle,
      category,
      creator: req.id,
    });

    return res.status(201).json({
      course,
      message: "Course Created",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to create course",
    });
  }
};

export const getCreatorCourses = async (req,res) => {
    try {
        const userId = req.id;
        const courses = await Course.find({creator:userId});
        if(!courses){
            return res.status(404).json({
                courses:[],
                message:"Course not found"
            })
        };
        return res.status(200).json({
            courses,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Failed to create course"
        })
    }
}

export const editCourse = async (req,res) => {
  try {
    const {courseTitle,subTitle,description,category,courseLevel, coursePrice} =req.body;
    const thumbnail = req.file;
    const courseId = req.params.courseId;
    let course = await Course.findById(courrseId)
    if(!course){
      return res.status(404).json({
        message:"Course not found!"
      })
    }
    let courseThumbnail;
    if(!thumbnail){
      if(course.courseThumbnail){
        const publicId = course.courseThumbnail.split("/").pop().split(".")[0];
        await deleteMediaFromCloudinary(publicId);
      }
    }

    // upload a thumbnail on cloudinary


    // 
    const updateData = {courseTitle, subTitle,description,category,courseLevel, coursePrice, courseThumbnail}
  } catch (error) {
    return res.status(500).json({
      message:"Failed to create course"
  })
  }
}