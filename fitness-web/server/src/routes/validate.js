
//validate thata the user is logged in and has a valid token
export const validateToken = (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) {
        // Unauthorized
        return res.status(401).json({ message: "Access denied, no token provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
    }
