import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {

    if (req.method === "OPTIONS") {
        next();
    }

    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) return res.status(400).json({ message: "Unauthorized user!!!" });
        const decodeJWT = jwt.verify(token, process.env.JWT_KEY);
        req.user = decodeJWT;
        next();
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Unauthorized user!" });
    }
}