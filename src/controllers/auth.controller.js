import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import { createJWT } from '../libs/jwt.js';

export class AuthController {
  static Register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const newUser = new User({
        username,
        email,
        password: await bcrypt.hash(password, 10),
      });

      const savedUser = await newUser.save();
      const token = await createJWT({ id: savedUser._id });

      res.cookie('token', token);
      res.status(201).json({
        status: 'Sucess',
        message: 'The user has been registered',
        user: {
          id: savedUser._id,
          username: savedUser.username,
          email: savedUser.email,
          createdAt: savedUser.createdAt,
          updatedAt: savedUser.updatedAt,
        },
      });
    } catch (error) {
      res.status(409).json({ status: 'Failure', message: 'The user is already registered' });
    }
  };

  static Login = (req, res) => {
    res.json({ message: 'SING IN', body: { ...req.body } });
  };
}
