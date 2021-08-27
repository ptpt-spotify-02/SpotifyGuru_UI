import axios from 'axios';
import HttpStatus from 'http-status';

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  if (req.method !== 'GET')
    res.status(HttpStatus.METHOD_NOT_ALLOWED);

  const { spotifyID } = req.query;

  if (spotifyID.length < 6)
    return res.status(HttpStatus.BAD_REQUEST);

  let cancelled = false;
  req.on('close', (_) => {
    cancelled = true;
    res.end();
  });

  await sleep(1000);

  if (!cancelled) {
    const data = (await axios.get(
      `${process.env.API_URI}/suggestions`,
      {
        params: {
          spotifyID,
          number: 10
        }
      }
    )).data;

    console.log('responding....');
    res.status(HttpStatus.OK).json(data);
  }

  return null;
}
