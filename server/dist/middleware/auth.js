import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user; // Attach the user to the request
        return next(); // Make sure to return after calling next()
    }
    catch (error) {
        return res.status(400).json({ message: 'Invalid token' });
    }
};
export default authMiddleware;
