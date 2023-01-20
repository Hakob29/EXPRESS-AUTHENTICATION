import Role from "./models/Role.js";
import User from "./models/User.js"
import bcrypt from "bcrypt";

class Controller {

    async register(req, res) {
        try {
            const { username, password } = req.body;
            const candidate = await User.findOne({ where: { username: username } });
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