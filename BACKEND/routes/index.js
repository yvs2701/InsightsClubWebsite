const express = require("express");
const router = express.Router();
const { login, signup, resetPassword, reset, verify } = require("../controllers/authController");
const { homePage, getAllEvents, getEventDetails } = require("../controllers/eventsController");
const { createNewEvent, updateEvent, deleteEvent } = require("../controllers/managementController");
const { createBlog, getAllBlogs, getBlog, deleteBlog, updateBlog, likeBlog } = require("../controllers/blogController");
const { getAllVideos, createVideo, deleteVideo } = require("../controllers/videoController");
const verifyUser = require("../middlewares/verifyUser");

router.route("/home").get(homePage);

router.route("/event/all").get(getAllEvents);
router.route("/event/new").post(verifyUser, createNewEvent);
router.route("/event/:id").get(getEventDetails).delete(verifyUser, deleteEvent).put(verifyUser, updateEvent);

router.route("/auth/signin").get(login);
router.route("/auth/signup").post(signup);
router.route("/auth/reset/:id").get(reset);
router.route("/auth/resetPassword").post(resetPassword);
router.route("/auth/verify/:id").get(verify);

router.route("/blog/all").get(getAllBlogs)
router.route("/blog/new").post(verifyUser, createBlog)
router.route("/blog/:id").get(getBlog).delete(verifyUser, deleteBlog).put(verifyUser, updateBlog)
router.route("/blog/:id/like").post(verifyUser, likeBlog)

router.route("/video/all").get(getAllVideos)
router.route("/video/new").post(verifyUser, createVideo);
router.route("/video/:id").delete(verifyUser, deleteVideo);
module.exports = router;