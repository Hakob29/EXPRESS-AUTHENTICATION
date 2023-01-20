import { Router } from "express";
import controller from "./controller.js";
import { check } from "express-validator"

const router = new Router();

router.post("/register", [
    check("username", "Username can not be empty").notEmpty(),
    check("password", "Password must be at least 4 characters").isLength({ min: 4, max: 10 })

], controller.register);

router.post("/login", controller.login);

router.get("/users", controller.getUsers)

export default router;