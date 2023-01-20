import Role from "./models/Role.js";
import User from "./models/User.js"
import bcrypt from "bcrypt";
import { validationResult } from "express-validator"
import { generateAccessToken } from "./utils/generateJWT.js"

class Controller {

    async register(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({ message: "Registration Error", errors });
            const { username, password } = req.body;
            const candidate = await User.findOne({ username: username });
            if (candidate) return res.status(400).json("User with this username exist...");
            const userRole = await Role.findOne({ value: 'USER' });
            const user = User.create({
                username: username,
                password: await bcrypt.hash(password, 10),
                roles: [userRole.value]
            });
            await user.save;
            return res.status(200).json("Server created successfully...")
        } catch (err) {
            console.log(err);
        }
    }
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username: username });
            if (!user) return res.status(404).json("User Not Found...");
            const userPassword = await bcrypt.compare(password, user.password);
            if (!userPassword) return res.status(400).json("Password not valid...");

            const jwtToken = generateAccessToken(user.id, user.roles);
            return res.json(jwtToken);
        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Registration error!" })
        }
    }

    async getUsers(req, res) {
        try {

        } catch (err) {
            console.log(err);
            res.status(400).json({ message: "Login error!" })
        }
    }
}

export default new Controller();