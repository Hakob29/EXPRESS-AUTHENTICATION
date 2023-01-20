import { Router } from "express";
import controller from "./controller.js";

const router = new Router();

router.post("/register", controller.register);

router.post("/login", controller.login);

router.get("/users", controller.getUsers)

export default router;