import { Op } from "sequelize";
import Comments from "../models/comments.model";
import ErrorResponse from "../utils/Errors";

export const findAllComments = async () => {
  try {
    const comments = await Comments.findAll({
      where: { parentCommentId: { [Op.eq]: null } },
      include: [{ model: Comments, as: "replies" }],
      order: [
        ["createdAt", "DESC"],
        [{ model: Comments, as: "replies" }, "createdAt", "DESC"],
      ],
    });
    return comments;
  } catch (err) {
    throw new ErrorResponse({
      status: 500,
      message: "Error retrieving comments.",
      details: err,
    });
  }
};

export const createAComment = async (email: string, body: string, replyToCommentId: number | null = null): Promise<Comments> => {
  try {
    let newComment: Comments | null = null;

    if (replyToCommentId) {
      const replyToComment: Comments | null = await Comments.findByPk(replyToCommentId);

      if (!replyToComment)
        throw new ErrorResponse({
          status: 404,
          message: "Error creating reply comment, not replyCommentId found.",
          details: {},
        });

      const isReplyToCommentAMainComment = replyToComment.parentCommentId != null;

      if (!isReplyToCommentAMainComment) {
        newComment = await Comments.create({ email, body, parentCommentId: replyToCommentId });
      } else {
        newComment = await Comments.create({ email, body, parentCommentId: replyToComment?.parentCommentId });
      }
      return newComment;
    }

    newComment = await Comments.create({
      email,
      body,
    });
    return newComment;
  } catch (err) {
    console.error("Error creating comment:", err);
    if (err instanceof ErrorResponse) throw err;
    throw new ErrorResponse({
      status: 500,
      message: "Error creating comment.",
      details: err,
    });
  }
};

export const findCommentsById = async () => {
  try {
  } catch (err) {
    throw new ErrorResponse({
      status: 500,
      message: "Error retrieving comments.",
      details: err,
    });
  }
};

export const updateCommentById = async (id: number, payload: Partial<Comments>): Promise<Comments> => {
  try {
    const comment: Comments | null = await Comments.findOne({ where: { id } });
    if (!comment) {
      throw new ErrorResponse({
        status: 404,
        message: `Comment with ID ${id} not found.`,
        details: null,
      });
    }
    await comment.update(payload);
    return comment;
  } catch (err) {
    if (err instanceof ErrorResponse) throw err;
    throw new ErrorResponse({
      status: 500,
      message: "Error updating comment.",
      details: err,
    });
  }
};

export const deleteCommentById = async (id: number): Promise<void> => {
  try {
    const comment: Comments | null = await Comments.findOne({ where: { id } });
    if (!comment) {
      throw new ErrorResponse({
        status: 404,
        message: `Comment with ID ${id} not found.`,
        details: null,
      });
    }
    await comment.destroy();
  } catch (err) {
    if (err instanceof ErrorResponse) throw err;
    throw new ErrorResponse({
      status: 500,
      message: "Error deleting comment.",
      details: err,
    });
  }
};
