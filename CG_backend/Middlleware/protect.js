import jwt from "jsonwebtoken";
import Access from "../AuthSettings.js";

const protect = (section) => (req, res, next) => {
    let token = req.headers.authorization;

    // Check if token exists and starts with "Bearer"
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Not authorized, token missing or incorrect format" });
    }

    try {
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user data to request
        req.user = decoded;
        // console.log("Decoded User:", decoded);


        // Check role access
        if (!Access[section]?.includes(req.user.role)) {
            return res.status(403).json({ error: "Access denied, insufficient permissions" });
        }

        next();
    } catch (error) {
        console.error("JWT Verification Error:", error);
        res.status(401).json({ error: "Invalid token" });
    }
};

export default protect;
