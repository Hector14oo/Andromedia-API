import { Media } from '../models/media.model.js';

export class MediaController {
  static async Search(req, res) {
    const { search, lang, page } = req.query;
    const data = await Media.getSearch({ search, lang, page });
    res.json(data);
  }

  static async Trending(req, res) {
    const { timeWindow } = req.query;
    const data = await Media.getTrending(timeWindow);
    res.json(data);
  }

  static async MediaDetails(req, res) {
    const { id, mediaType } = req.params;
    const { lang } = req.query;
    const data = await Media.getMediaDetails({ lang, id, mediaType });
    res.json(data);
  }
}
