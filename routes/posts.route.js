const router = require("express").Router;
const {
  createPost,
  deletePost,
  getPosts,
  getPost,
  updatePost,
} = require("../controllers/posts.controller");

const postRouter = router();

postRouter.route("/").post(createPost).get(getPosts);
postRouter
  .route("/:postId/:userId/:key")
  .get(getPost)
  .patch(updatePost)
  .delete(deletePost);

module.exports = postRouter;
