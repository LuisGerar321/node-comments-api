import { Router } from "express";
import { StudentController } from "../controllers/students.controller";

const StudentsRoutes = Router();

StudentsRoutes.get("/", StudentController.handleGetAll);

export default StudentsRoutes;
