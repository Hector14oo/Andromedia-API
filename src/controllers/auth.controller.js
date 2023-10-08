import User from '../schemas/user.schema.js';
import Favorite from '../schemas/favorite.schema.js'
import bcrypt from 'bcryptjs';
import { createJWT } from '../libs/jwt.js';
import { fetchAPI } from '../libs/fetchAPI.js';
import { options } from '../config.js';


export class AuthController {
  static Register = async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const APIkey = await fetchAPI('https://api.themoviedb.org/3/authentication/guest_session/new', options)
      const newUser = new User({ username, email, password: await bcrypt.hash(password, 10), APIkey: APIkey.guest_session_id });

      const savedUser = await newUser.save();
      const token = await createJWT({ id: savedUser._id });

      res.cookie('token', token);
      res.status(201).json({ status: 'Sucess', message: 'The user has been registered', user: { id: savedUser._id, username: savedUser.username, email: savedUser.email, APIkey: savedUser.APIkey } });
    } catch (error) {
      res.status(409).json({ status: 'Failure', message: 'The user is already registered' });
    }
  };

  static Login = async (req, res) => {
    try {
      const { email, password } = req.body;
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

  static DeleteAccount = async (req, res) => {
    try {
      const { id } = req.params
      await User.findByIdAndDelete({ _id: id})
      await Favorite.deleteMany({ userId: id })
      res.status(204).json({ status: 'Success', message: 'User deleted' })
    } catch (error) {
      res.status(400).json({ status: 'Failure', message: 'User not found' });
    }
  }
}
