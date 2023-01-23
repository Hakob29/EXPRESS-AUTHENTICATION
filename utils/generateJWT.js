import jwt from "jsonwebtoken";

export function generateAccessToken(id, role) {
    const payload = {
        id,
        role
    }

    return jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "24h" })
}