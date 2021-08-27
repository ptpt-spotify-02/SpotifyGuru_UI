export default class Song {
  constructor({
    spotifyID,
    title,
    author,
    album,
    albumImageLink,
    audioLink,
    year,
    stats
  }) {
    this.spotifyID = typeof spotifyID === 'undefined' ? null : spotifyID;
    this.title = typeof title === 'undefined' ? null : title;
    this.author = typeof author === 'undefined' ? null : author;
    this.album = typeof album === 'undefined' ? null : album;
    this.albumImageLink = typeof albumImageLink === 'undefined' ? null : albumImageLink;
    this.audioLink = typeof audioLink === 'undefined' ? null : audioLink;
    this.year = typeof year === 'undefined' ? null : year;
    this.stats = typeof stats === 'undefined' ? null : stats;
  }
}
