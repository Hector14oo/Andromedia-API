import { RateModel } from '../models/rate.model.js';

export class RateController {
  static getRateList = async (req, res) => {
    try {
      const { APIkey } = req.user;
      const { lang } = req.query;
      const data = await RateModel.getRate({ guestId: APIkey, lang })

      if (data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  static addRate = async (req, res) => {
    try {
      const { body } = req;
      const { APIkey } = req.user;
      const { mediaType, id } = req.params;

      if (!mediaType || !id) return res.status(422).json({ success: false, message: 'Invalid parameters' });

      const { success, status, message } = await RateModel.addRate({ mediaType, id, guestId: APIkey, body });

      if (success === false) return res.status(status).json({ success, message });

      res.status(status).json({ success, message });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };

  static removeRate = async (req, res) => {
    try {
      const { body } = req;
      const { APIkey } = req.user;
      const { mediaType, id } = req.params;

      if (!mediaType || !id) return res.status(400).json({ success: false, message: 'Invalid parameters' });

      const { success, status, message } = await RateModel.removeRate({ mediaType, id, guestId: APIkey, body });

      if (!success) return res.status(status).json({ success, message });

      res.status(status).json({ success, message });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
}
