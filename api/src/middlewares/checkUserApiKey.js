import { fetchAPI } from '../libs/fetchAPI.js';
import { options } from '../config.js';
import User from '../schemas/user.schema.js'

export async function checkUserApiKey(req, res, next) {
  const { APIkey } = await User.findById(req.user.id);
  if(APIkey) {
    req.user.APIkey = APIkey;
    return next ()
  };

  const { guest_session_id } = await fetchAPI(`https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${globalThis.process.env.API_KEY}`, options);
  await User.findByIdAndUpdate(req.user.id, { APIkey: guest_session_id });
  req.user.APIkey = guest_session_id;
  next();
}


