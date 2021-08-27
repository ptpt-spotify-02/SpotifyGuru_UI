import Song from './Song';

// URLS:
// https://api.spotify.com/v1/search?q=   &type=track
// https://api.spotify.com/v1/audio-features?ids=,,,

const songs = [
  new Song({
    spotifyID     : '6RUhbFEhrvGISaQ8u2j2JN',
    title         : 'Dangerous Woman',
    author        : 'Ariana Grande',
    album         : 'Dangerous Woman',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b273628d506d5bddb09099db242c',
    audioLink     : 'https://api.spotify.com/v1/tracks/6RUhbFEhrvGISaQ8u2j2JN',
    year          : '2016',
    stats         : {
      acousticness    : 0.0529,
      danceability    : 0.664,
      energy          : 0.602,
      instrumentalness: 0,
      key             : 4,
      liveness        : 0.356,
      loudness        : -5.369,
      mode            : 0,
      speechiness     : 0.0412,
      tempo           : 134.049,
      valence         : 0.289
    }
  }),
  new Song({
    spotifyID     : '0ADG9OgdVTL7fgREP75BrZ',
    title         : "Ain't My Fault",
    author        : 'Zara Larsson',
    album         : 'So Good',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b2739e1683774b22648f4f178ed3',
    audioLink     : 'https://api.spotify.com/v1/tracks/0ADG9OgdVTL7fgREP75BrZ',
    year          : '2016',
    stats         : {
      acousticness    : 0.00778,
      danceability    : 0.576,
      energy          : 0.782,
      instrumentalness: 0,
      key             : 6,
      liveness        : 0.285,
      loudness        : -4.825,
      mode            : 0,
      speechiness     : 0.0296,
      tempo           : 141.153,
      valence         : 0.355
    }
  }),
  new Song({
    spotifyID     : '0OwX5aROoW1Iip8FV51Efg',
    title         : 'Alarm',
    author        : 'Anne-Marie',
    album         : 'Speak Your Mind',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b273cc79eb11514c20ac210d0151',
    audioLink     : 'https://api.spotify.com/v1/tracks/0OwX5aROoW1Iip8FV51Efg',
    year          : '2016',
    stats         : {
      acousticness    : 0.0812,
      danceability    : 0.756,
      energy          : 0.589,
      instrumentalness: 0,
      key             : 0,
      liveness        : 0.176,
      loudness        : -5.093,
      mode            : 1,
      speechiness     : 0.232,
      tempo           : 146.928,
      valence         : 0.811
    }
  }),
  new Song({
    spotifyID     : '6tsojOQ5wHaIjKqIryLZK6',
    title         : 'All My Life',
    author        : 'Foo Fighters',
    album         : 'One by One',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b273b00ee453b3496535eaa6e4b3',
    audioLink     : 'https://api.spotify.com/v1/tracks/6tsojOQ5wHaIjKqIryLZK6',
    year          : '2002',
    stats         : {
      acousticness    : 0.000218,
      danceability    : 0.577,
      energy          : 0.604,
      instrumentalness: 0.000579,
      key             : 5,
      liveness        : 0.477,
      loudness        : -5.703,
      mode            : 1,
      speechiness     : 0.0495,
      tempo           : 167.719,
      valence         : 0.637
    }
  }),
  new Song({
    spotifyID     : '3U4isOIWM3VvDubwSI3y7a',
    title         : 'All of Me',
    author        : 'John Legend',
    album         : 'Love in the Future',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b27394c9217a398f5174757c0c78',
    audioLink     : 'https://api.spotify.com/v1/tracks/3U4isOIWM3VvDubwSI3y7a',
    year          : '2013',
    stats         : {
      acousticness    : 0.922,
      danceability    : 0.422,
      energy          : 0.264,
      instrumentalness: 0,
      key             : 8,
      liveness        : 0.132,
      loudness        : -7.064,
      mode            : 1,
      speechiness     : 0.0322,
      tempo           : 119.930,
      valence         : 0.331
    }
  }),
  new Song({
    spotifyID     : '2m1hi0nfMR9vdGC8UcrnwU',
    title         : 'All the Small Things',
    author        : 'Blink 182',
    album         : 'Enema of the State',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b2736da502e35a7a3e48de2b0f74',
    audioLink     : 'https://api.spotify.com/v1/tracks/2m1hi0nfMR9vdGC8UcrnwU',
    year          : '2000',
    stats         : {
      acousticness    : 0.0103,
      danceability    : 0.434,
      energy          : 0.897,
      instrumentalness: 0,
      key             : 0,
      liveness        : 0.612,
      loudness        : -4.918,
      mode            : 1,
      speechiness     : 0.0488,
      tempo           : 148.726,
      valence         : 0.684
    }
  }),
  new Song({
    spotifyID     : '6FSM511TqUHUD09nRua1Go',
    title         : 'All You Are Is History',
    author        : 'State Champs',
    album         : 'Around the World and Back',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b2735cbe09a15ba88cc9456ede40',
    audioLink     : 'https://api.spotify.com/v1/tracks/6FSM511TqUHUD09nRua1Go',
    year          : '2015',
    stats         : {
      acousticness    : 0.0000537,
      danceability    : 0.373,
      energy          : 0.970,
      instrumentalness: 0,
      key             : 8,
      liveness        : 0.363,
      loudness        : -3.379,
      mode            : 1,
      speechiness     : 0.248,
      tempo           : 195.083,
      valence         : 0.667
    }
  }),
  new Song({
    spotifyID     : '6nTiIhLmQ3FWhvrGafw2zj',
    title         : 'American Idiot',
    author        : 'Green Day',
    album         : 'American Idiot',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b27308a1b1e0674086d3f1995e1b',
    audioLink     : 'https://api.spotify.com/v1/tracks/6nTiIhLmQ3FWhvrGafw2zj',
    year          : '2004',
    stats         : {
      acousticness    : 0.0000264,
      danceability    : 0.380,
      energy          : 0.988,
      instrumentalness: 0.0000786,
      key             : 1,
      liveness        : 0.368,
      loudness        : -2.042,
      mode            : 1,
      speechiness     : 0.0639,
      tempo           : 186.113,
      valence         : 0.769
    }
  }),
  new Song({
    spotifyID     : '08mG3Y1vljYA6bvDt4Wqkj',
    title         : 'Back in Black',
    author        : 'AC/DC',
    album         : 'Back in Black',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b2730b51f8d91f3a21e8426361ae',
    audioLink     : 'https://api.spotify.com/v1/tracks/08mG3Y1vljYA6bvDt4Wqkj',
    year          : '1980',
    stats         : {
      acousticness    : 0.0110,
      danceability    : 0.310,
      energy          : 0.700,
      instrumentalness: 0.00965,
      key             : 9,
      liveness        : 0.0828,
      loudness        : -5.678,
      mode            : 1,
      speechiness     : 0.0470,
      tempo           : 188.386,
      valence         : 0.763
    }
  }),
  new Song({
    spotifyID     : '0puf9yIluy9W0vpMEUoAnN',
    title         : 'Bang Bang',
    author        : 'Jessie J, Ariana Grande & Nicki Minaj',
    album         : 'Sweet Talker (Deluxe Version)',
    albumImageLink: 'https://i.scdn.co/image/ab67616d0000b273930f686fe89425c7b6bf9a7d',
    audioLink     : 'https://api.spotify.com/v1/tracks/0puf9yIluy9W0vpMEUoAnN',
    year          : '2014',
    stats         : {
      acousticness    : 0.260,
      danceability    : 0.706,
      energy          : 0.786,
      instrumentalness: 0,
      key             : 0,
      liveness        : 0.380,
      loudness        : -3.417,
      mode            : 0,
      speechiness     : 0.0910,
      tempo           : 150.028,
      valence         : 0.751
    }
  })
];

export default songs;
