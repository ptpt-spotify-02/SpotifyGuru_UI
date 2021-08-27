import axios from 'axios';
import { Component } from 'react';

import Head from 'next/head';
import Styles from '/styles/Home.module.scss';

import SuggestionContext from '/contexts/SuggestionContext';

import Search from '/components/Search';
import Song from '/common/Song';
import SuggestionBoard from '../components/SuggestionBoard';

export default class Home extends Component {
  constructor(props) {
    super(props);

    let cancelSource = null;
    const updateSuggestions = async (selectedSong) => {
      if (!(selectedSong instanceof Song))
        return;

      if (cancelSource !== null) {
        cancelSource.cancel('New request');
        cancelSource = null;
      }

      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      cancelSource = source;

      try {
        this.setState({ loadingSuggestions: true });
        const res = await axios.get(
          '/api/suggestions',
          {
            cancelToken: cancelSource.token,
            params     : {
              spotifyID: selectedSong.spotifyID
            }
          }
        );

        const songs = res.data.map((data) => new Song(data));
        this.state.setSuggestions(songs);
      } catch (error) {
        if (!axios.isCancel(error))
          throw error;
      } finally {
        this.setState({ loadingSuggestions: false });
      }
    };

    this.state = {
      selectedSong      : props.selectedSong ? new Song(props.selectedSong) : null,
      suggestions       : props.selectedSong ? props.suggestions.map((s) => new Song(s)) : null,
      loadingSuggestions: false,
      setSelectedSong   : async (selectedSong) => {
        if (typeof selectedSong === 'object' && selectedSong !== null) {
          if (typeof selectedSong.stats !== 'object' || selectedSong.stats === null) {
            try {
              this.setState({ loadingSuggestions: true });
              const res = await axios.get('/api/track', { params: { id: selectedSong.spotifyID } });
              selectedSong.stats = res.data.stats;
            } finally {
              this.setState({ loadingSuggestions: false });
            }
          }
        }
        this.setState({ selectedSong });
        updateSuggestions(selectedSong);
      },
      setSuggestions: (suggestions) => {
        this.setState({ suggestions });
      }
    };
  }

  componentDidMount() {
    if (this.state.selectedSong instanceof Song) {
      if (!Array.isArray(this.state.suggestions) || this.state.suggestions.length === 0)
        this.state.setSelectedSong(new Song(this.state.selectedSong));
    }
  }

  componentDidUpdate(props, state) {
    const separator = '|';
    let queryString = '';

    if (state.selectedSong instanceof Song)
      queryString += state.selectedSong.spotifyID;
    if (Array.isArray(state.suggestions) && state.suggestions.length > 0) {
      if (queryString.length > 0)
        queryString += separator;
      queryString += state.suggestions.map((song) => song.spotifyID).join(separator);
    }

    let newURL = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

    if (queryString.length > 0)
      newURL += `?share=${queryString}`;

    window.history.pushState({path: newURL}, '', newURL);
  }

  render() {
    const metas = [];

    if (this.state.selectedSong instanceof Song) {
      const song = this.state.selectedSong;
      metas.push(<meta key={1} property='og:title' content={song.title} />);
      metas.push(<meta key={2} property='og:image' content={song.albumImageLink} />);
      metas.push(<meta key={3} name='twitter:card' content={song.albumImageLink} />);
      let description = `Check out these songs that are similar to ${song.title} by ${song.author}!`;
      if (Array.isArray(this.state.suggestions)) {
        const unique = [...new Set(this.state.suggestions.map((song) => song.author))].filter((author) => author !== song.author);
        if (unique.length > 0) {
          description += ` Includes songs by ${unique.shift()}`;
          if (unique.length > 2)
            description += `, ${unique.shift()}`;
          if (unique.length > 2)
            description += `, ${unique.shift()}`;
          if (unique.length > 1)
            description += ', and more';
          description += '!';
        }
      }
      metas.push(<meta key={4} property='og:description' content={description} />);
    }

    return (
      <div className={Styles.container}>
        <Head>
          <title>Spotify Guru</title>
          <meta name='description' content='Some Spotify thing for Lambda School' />
          {metas}
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={Styles.main}>
          <h1 className={Styles.title}>
            Spotify Guru
          </h1>
          <SuggestionContext.Provider value={this.state}>
            <Search />
            <SuggestionBoard />
          </SuggestionContext.Provider>
        </main>
      </div>
    );
  }
}

export async function getServerSideProps(context) {
  const { share } = context.query;

  let selectedSong = null;
  let suggestions = null;

  if (typeof share === 'string') {
    const tracks = share.split('|');
    if (tracks.length > 0) {
      const res = await axios.post('http://localhost:3000/api/track', { tracks });
      const data = res.data.tracks;
      selectedSong = data.shift();
      suggestions = data;
    }
  }

  return {
    props: {
      selectedSong,
      suggestions
    }
  };
}
