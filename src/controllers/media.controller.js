import { Media } from '../models/media.model.js';

export class MediaController {
  static async Search(req, res) {
    const { search, lang, page } = req.query;
    const data = await Media.getSearch({ search, lang, page });
    res.json(data);
  }

  static async Trending(req, res) {
    const { timeWindow, page, lang } = req.query;
    const data = await Media.getTrending({timeWindow, lang, page});
    res.json(data);
  }

  static async MediaDetails(req, res) {
    const { id, mediaType } = req.params;
    const { lang } = req.query;
    const data = await Media.getMediaDetails({ lang, id, mediaType });
    res.json(data);
  }

  static async SeasonDetails(req, res) {
    const { id, seasonNumber } = req.params;
    const { lang } = req.query;
    const data = await Media.getSeasonDetails({ lang, id, seasonNumber });
    res.json(data);
  }
}
