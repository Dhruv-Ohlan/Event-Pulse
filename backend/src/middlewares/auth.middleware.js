import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import { asyncHandler } from './async.middleware.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId).select('-password');
      if (!user) {
        res.status(401);
        throw new Error('Not authorized, user not found');
      }
      req.user = user;
      next();
    } catch (err) {
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      res.status(401);
      throw new Error('Not authorized, no user');
    }
    if (!roles.includes(req.user.role)) {
      res.status(403);
      throw new Error('Not authorized to access this route');
    }
    next();
  };
};

export { protect, authorize };
