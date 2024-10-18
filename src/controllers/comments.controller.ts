import { Request, Response } from "express";
import { createAComment, deleteCommentById, findAllComments, updateCommentById } from "../services/comments.service";
import ErrorResponse from "../utils/Errors";

export class CommentsController {
  public static async handleGetAll(req: Request, res: Response) {
    try {
      const comments = await findAllComments();
      res.status(200).send(comments);
    } catch (error) {
      CommentsController.handleError(res, error);
    }
  }

  public static async handleCreate(req: Request, res: Response) {
    try {
      const { email, body, replyToId } = req.body;
      const comments = await createAComment(email, body, replyToId);
      res.status(201).send(comments);
    } catch (error) {
      CommentsController.handleError(res, error);
    }
  }

  public static async handleUpdateById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const payload = req.body;
      const comments = await updateCommentById(Number(id), payload);
      res.status(200).send(comments);
    } catch (error) {
      CommentsController.handleError(res, error);
    }
  }

  public static async handleDeleteById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await deleteCommentById(Number(id));
      res.status(204).send({});
    } catch (error) {
      CommentsController.handleError(res, error);
    }
  }

  private static handleError(res: Response, error: any) {
    if (error instanceof ErrorResponse) {
      const { status, message, details } = error;
      return res.status(status).json({
        message,
        details: details || "No additional details.",
      });
    }

    return res.status(500).send({
      message: "Internal Server Error",
      details: error.message || "No details available.",
    });
  }
}
