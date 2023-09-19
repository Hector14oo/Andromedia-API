import { Media } from '../models/media.js';

export class MediaController {
  static async getSearch(req, res) {
    const { search, lang, page } = req.query;
    const data = await Media.getSearch({ search, lang, page });
    res.json(data);
  }

  static async getTrending(req, res) {
    const { timeWindow } = req.query;
    const data = await Media.getTrending(timeWindow);
    res.json(data);
  }

  static async getMediaDetails(req, res) {
    const { id, mediaType } = req.params;
    const { lang } = req.query;
    const data = await Media.getMediaDetails({ lang, id, mediaType });
    res.json(data);
  }
}
