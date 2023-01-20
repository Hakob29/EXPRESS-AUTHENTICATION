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

    getUsers(req, res) {
        try {
            res.send("Hello world")
        } catch (err) {
            console.log(err);
        }
    }
}

export default new Controller();