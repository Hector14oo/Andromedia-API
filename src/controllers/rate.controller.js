import { RateModel } from '../models/rate.model.js';

export class RateController {
  static getRateList = async (req, res) => {
    try {
      const { guestId } = req.params;
      
      const data = await RateModel.getRate({ guestId })

      if (data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static rateMovie = async (req, res) => {
    try {
      const { body } = req;
      const { guestId, id } = req.params;

      const data = await RateModel.addMovieRate({ id, guestId, body });

      if (data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static rateTvShow = async (req, res) => {
    try {
      const { body } = req;
      const { guestId, id } = req.params;
      const data = await RateModel.addTvShowRate({ id, guestId, body });

      if (data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}
