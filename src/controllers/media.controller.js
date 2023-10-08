import { Media } from '../models/media.model.js';

export class MediaController {
  static async Search(req, res) {
    try {
      const { search, lang, page } = req.query;
      const data = await Media.getSearch({ search, lang, page });

      if(data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.json(500, error.message);
    }
  }

  static async Trending(req, res) {
    try {
      const { timeWindow, page, lang } = req.query;
      const data = await Media.getTrending({ timeWindow, lang, page });

      if(data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.json(500, error.message);
    }
  }

  static async MediaDetails(req, res) {
    try {
      const { id, mediaType } = req.params;
      const { lang } = req.query;
      const data = await Media.getMediaDetails({ lang, id, mediaType });

      if(data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }

  static async SeasonDetails(req, res) {
    try {
      const { id, seasonNumber } = req.params;
      const { lang } = req.query;
      const data = await Media.getSeasonDetails({ lang, id, seasonNumber });

      if(data.success === false) return res.status(data.status).json(data);

      res.json(data);
    } catch (error) {
      res.status(500).json(error.message);
    }
  }
}
