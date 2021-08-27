import axios from 'axios';
import HttpStatus from 'http-status';

// import songList from '/common/songList';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  if (req.method !== 'GET')
    res.status(HttpStatus.METHOD_NOT_ALLOWED);

  const { query } = req.query;

  if (query.length < 3)
    return res.status(HttpStatus.BAD_REQUEST);

  let cancelled = false;
  req.on('close', (_) => {
    cancelled = true;
    res.end();
  });

  if (!cancelled) {
    const data = (await axios.get(
      `${process.env.API_URI}/search`,
      { params: { query } }
    )).data;

    console.log('responding....');
    res.status(HttpStatus.OK).json(data);
  }

  return null;
}
