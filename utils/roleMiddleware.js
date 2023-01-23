import jwt from "jsonwebtoken";

export function roleMiddleware(roles) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) return res.status(400).json({ message: "Unauthorized user!!!" });
            const userRole = jwt.verify(token, process.env.JWT_KEY).role;
            roles.forEach((role) => {
                if (!(role === userRole[0])) return res.status(400).json({ message: "You don't have access!" });
                next();
            })
        } catch (err) {
            console.log(err);
            return res.status(400).json({ message: "Unauthorized user!" });
        }
    }
}