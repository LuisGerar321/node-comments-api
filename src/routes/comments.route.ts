import { Router } from "express";
import { CommentsController } from "../controllers/comments.controller";
import { validateBodyMiddleware } from "../middleware";
import { createCommentSchema, updateCommentSchema } from "../validators/comments.validator";

const CommentsRouter = Router();

CommentsRouter.get("/", CommentsController.handleGetAll);
CommentsRouter.post("/", validateBodyMiddleware(createCommentSchema), CommentsController.handleCreate);
CommentsRouter.patch("/:id", validateBodyMiddleware(updateCommentSchema), CommentsController.handleUpdateById);
CommentsRouter.delete("/:id", CommentsController.handleDeleteById);

export default CommentsRouter;
