import User from '../schemas/user.schema.js';
import bcrypt from 'bcryptjs';
import { createJWT } from '../libs/jwt.js';

const userObj = ({ _id, username, email, APIkey, fullname, gender, picture }) => {
  return { id: _id, username, email, APIkey, fullname, gender, picture }
}

export class AuthController {
  static Register = async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = new User({ 
        username: null, 
        email, 
        password: await bcrypt.hash(password, 10), 
        APIkey: null, 
        fullname: null, 
        gender: null, 
        picture: null 
      });

      const savedUser = await newUser.save();
      const token = await createJWT({ id: savedUser._id });

      res.cookie('token', token);
      res.status(201).json({ success: true, message: 'The user has been registered', user: userObj(savedUser)  });
    } catch (error) {
      if(error.code === 11000) return res.status(409).json({ success: false, message: 'The user is already registered' });
      res.status(500).json({ success: false, error });
    }
  };

  static Login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const userFound = await User.findOne({ email });
      if (!userFound) return res.status(400).json({ success: false, message: 'Invalid user' });

      const isMatch = await bcrypt.compare(password, userFound.password);
      if (!isMatch) return res.status(400).json({ success: false, message: 'Invalid password' });

      const token = await createJWT({ id: userFound._id });

      res.cookie('token', token);
      res.status(201).json({ success: true, message: 'The user has been loged', user: userObj(userFound) });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  };

  static Logout = (req, res) => {
    res.cookie('token', '', { expires: new Date(0) });
    res.sendStatus(204);
  };
}
