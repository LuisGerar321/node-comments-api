import { Request, Response } from "express";
import { findAllStudents } from "../services/student.service";

export class StudentController {
  public static async handleGetAll(req: Request, res: Response) {
    try {
      const students = await findAllStudents();
      res.status(200).send(students);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
