import axios from 'axios';
import HttpStatus from 'http-status';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  if (req.method !== 'POST' && req.method !== 'GET') {
    res.status(HttpStatus.METHOD_NOT_ALLOWED);

    return;
  }

  const tracks = req.method === 'GET' ? [req.query.id] : req.body.tracks;

  const data = (await axios.post(
    `${process.env.API_URI}/track`,
    { tracks }
  )).data;

  if (req.method === 'POST')
    res.status(HttpStatus.OK).json(data);
  else
    res.status(HttpStatus.OK).json(data.tracks[0]);
}
