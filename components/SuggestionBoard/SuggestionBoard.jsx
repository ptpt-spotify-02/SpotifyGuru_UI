import { Component} from 'react';

import Styles from '/styles/components/SuggestionBoard.module.scss';
import Song from '/common/Song';
import SuggestionContext from '/contexts/SuggestionContext';

import Card from './Card';
import Loading from '../Loading';

export default class SuggestionBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      querySuggestions: [],
      cancelToken     : null,
      loading         : false
    };
  }

  render() {
    return (
      <div className={Styles.container}>
        <div className={Styles.board}>
          <SuggestionContext.Consumer>
            {({ loadingSuggestions }) =>
              <Loading display={loadingSuggestions} styles={{ backgroundColor: 'whitesmoke' }} />}
          </SuggestionContext.Consumer>
          <SuggestionContext.Consumer>
            {({ suggestions }) => {
              if (Array.isArray(suggestions)) {
                return suggestions.map((song) => {
                  if (song instanceof Song)
                    return <Card key={song.spotifyID} song={song} />;

                  return null;
                });
              }

              return null;
            }}
          </SuggestionContext.Consumer>
        </div>
      </div>
    );
  }
}
