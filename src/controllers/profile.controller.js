import User from '../schemas/user.schema.js';
import Favorite from '../schemas/favorite.schema.js';

export class ProfileController {
  static getProfile = async (req, res) => {
    try {
      const { id } = req.user;
      const data = await User.findById(id).select(['-password', '-__v']);

      res.json({ user: data });
    } catch (error) {
      res.status(500).json({ status: 'Failure', message: error.message });
    }
  };

  static updateProfile = async (req, res) => {
    try {
      if(!Object.keys(req.body).length) return res.status(400).json({ status: 'Failure', message: 'Please enter at least one propertie to update the profile' });
      const { username, email, password, fullname, gender, picture } = req.body;

      const updatedUser = await User.findByIdAndUpdate(
        req.user.id,
        { username, email, password, fullname, gender, picture },
        { new: true }
      );

      res.json({
        status: 'success',
        message: 'User updated',
        updatedUser: {
          id: updatedUser._id,
          username: updatedUser.username,
          email: updatedUser.email,
          APIkey: updatedUser.APIkey,
          fullname: updatedUser.fullname,
          gender: updatedUser.gender,
          picture: updatedUser.picture,
          createdAt: updatedUser.createdAt,
          updatedAt: updatedUser.updatedAt,
        },
      });
    } catch (error) {
      res.status(500).json({ status: 'Failure', message: error.message });
    }
  };

  static deleteProfile = async (req, res) => {
    try {
      const { id } = req.user;

      const userDeleted = await User.findByIdAndDelete(id);
      if (!userDeleted)
        return res
          .status(404)
          .json({ status: 'Failure', message: 'User not found' });

      await Favorite.deleteMany({ userId: id });

      res.status(204).json({ status: 'Success', message: 'User deleted' });
    } catch (error) {
      res.status(500).json({ status: 'Failure', message: error.message });
    }
  };
}
