import User from '../models/user.model.js';
import { asyncHandler } from '../middlewares/async.middleware.js';
import jwt from 'jsonwebtoken';

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error('Please provide username, email and password');
  }

  const existing = await User.findOne({ $or: [{ username }, { email }] });
  if (existing) {
    res.status(400);
    throw new Error('User already exists with that username or email');
  }

  const user = await User.create({ username, email, password, role: role || 'user' });

  if (!user) {
    res.status(400);
    throw new Error('Invalid user data');
  }

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    data: {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
});

// Login user and return token
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Please provide email and password');
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error('Invalid credentials');
  }

  if (!process.env.JWT_SECRET) {
    res.status(500);
    throw new Error('Server configuration error: JWT_SECRET is not set');
  }

  const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    data: {
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    },
  });
});

export { registerUser, loginUser };
