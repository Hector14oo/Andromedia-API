import User from '../schemas/user.schema.js';

export class ProfileController {
  static getProfile = async (req, res) => {
    try {
      const { id } = req.user;
      const data = await User.findById(id);

      res.json({ user: data });
    } catch (error) {
      res.status(500).json({ status: 'Failure', message: error.message });
    }
  }

  static updateProfile = async (req, res) => {
    try {
      const { _id, username, email, APIkey, fullname, gender, picture, createdAt, updatedAt } = await User.findByIdAndUpdate(req.user.id, req.body, { new: true });
      const updatedUser = { id: _id, username, email, APIkey, createdAt, updatedAt};

      res.json({ status: 'success', message: 'User updated', updatedUser });
    } catch (error) {
      res.status(500).json({ status: 'Failure', message: error.message });
    }
  }
  
  static deleteProfile = async (req, res) => {
    try {
      const { id } = req.params

      const userDeleted = await User.findByIdAndDelete({ _id: id})
      if(!userDeleted) return res.status(404).json({ status: 'Failure', message: 'User not found' });

      await Favorite.deleteMany({ userId: id })

      res.status(204).json({ status: 'Success', message: 'User deleted' })
    } catch (error) {
      res.status(500).json({ status: 'Failure', message: error.message });
    }
  }
}