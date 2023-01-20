import Role from "./models/Role.js";
import User from "./models/User.js"

class Controller {

    register(req, res) {
        try {

        } catch (err) {
            console.log(err);
        }
    }
    login(req, res) {
        try {

        } catch (err) {
            console.log(err);
        }
    }

    async getUsers(req, res) {
        try {
            const userRole = new Role();
            const adminRole = new Role({ value: "ADMIN" })

            await userRole.save();
            await adminRole.save();

            res.send("Hello world")
        } catch (err) {
            console.log(err);
        }
    }
}

export default new Controller();