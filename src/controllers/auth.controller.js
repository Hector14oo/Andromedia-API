import bcrypt from 'bcryptjs';
import User from '../schemas/user.schema.js';
import { createJWT } from '../libs/jwt.js';

export class AuthController {
  static Register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const newUser = new User({ username, email, password: await bcrypt.hash(password, 10) });

      const { _id, ...data } = await newUser.save();
      const token = await createJWT({ id: _id });

      res.cookie('token', token);
      res.status(201).json({ status: 'Sucess', message: 'The user has been registered', user: { id: _id, ...data } });
    } catch (error) {
      res.status(409).json({ status: 'Failure', message: 'The user is already registered' });
    }
  };

  static Login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const userFound = await User.findOne({ email });
      if (!userFound) return res.status(400).json({ message: 'User not found' });

      const isMatch = await bcrypt.compare(password, userFound.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

      const token = await createJWT({ id: userFound._id });

      res.cookie('token', token);
      res.status(201).json({
        status: 'Sucess',
        message: 'The user has been loged',
        user: {
          id: userFound._id,
          username: userFound.username,
          email: userFound.email,
          createdAt: userFound.createdAt,
          updatedAt: userFound.updatedAt,
        },
      });
    } catch (error) {
      res.status(500).json({ status: 'Failure', error });
    }
  };

  static Logout = (req, res) => {
    res.cookie('token', '', { expires: new Date(0) });
    res.sendStatus(200);
  };

  static Profile = async (req, res) => {
    try {
      const { username, email, createdAt, updatedAt } = await User.findOne({ _id: req.user.id });

      res.json({ user: { username, email, createdAt, updatedAt } });
    } catch (error) {
      res.status(400).json({ status: 'Failure', message: 'User not found' });
    }
  };
}
