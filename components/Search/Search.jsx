import axios from 'axios';
import debounce from 'debounce';

import { Component} from 'react';

import Styles from '/styles/components/Search.module.scss';
import Song from '/common/Song';
import SuggestionContext from '/contexts/SuggestionContext';

import QuerySuggestions, { QuerySuggestion } from './QuerySuggestions';

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInput       : false,
      querySuggestions: [],
      cancelToken     : null,
      loading         : false
    };
    this.handleKeyPress = debounce(this.handleKeyPress.bind(this), 500);
  }

  componentDidUpdate() {
    if (this.searchInput)
      this.searchInput.focus();
  }

  async handleKeyPress(event) {
    if (!this.searchInput)
      return;

    if (this.state.loading) {
      console.debug('Cancelling old request and sending new one...');
      this.state.cancelToken.cancel('New request');
    } else {
      console.debug('Sending search suggestion request...');
    }

    const text = this.searchInput.value;

    if (text.length < 3) {
      this.setState({ querySuggestions: [] });

      return;
    }

    let cancelled = false;
    try {
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();
      this.setState({ loading: true, cancelToken: source });

      const res = await axios.get(
        '/api/search',
        {
          cancelToken: source.token,
          params     : { query: text }
        }
      );

      this.setState({ querySuggestions: res.data.map((data) => new Song(data))});
    } catch (error) {
      if (axios.isCancel(error)) {
        cancelled = true;

        return;
      } else {
        throw error;
      }
    } finally {
      if (!cancelled)
        this.setState({ loading: false });
    }

    console.debug('Done...');
  }

  render() {
    return (
      <div className={Styles.container}>
        <SuggestionContext.Consumer>
          {({ selectedSong }) => {
            if (selectedSong instanceof Song && !this.state.showInput) {
              return (
                <QuerySuggestion
                  song={selectedSong}
                  onClick={(event) => {
                    this.setState({ showInput: true, querySuggestions: [] });
                  }}
                />
              );
            }

            return (
              <>
                <input
                  ref={(input) => { this.searchInput = input }}
                  type='search'
                  placeholder='Enter a song...'
                  onChange={this.handleKeyPress}
                  onBlur={() => { setTimeout(() => this.setState({ showInput: false }), 300) }}
                />
                <QuerySuggestions
                  loading={this.state.loading}
                  querySuggestions={this.state.querySuggestions}
                />
              </>
            );
          }}
        </SuggestionContext.Consumer>
      </div>
    );
  }
}
