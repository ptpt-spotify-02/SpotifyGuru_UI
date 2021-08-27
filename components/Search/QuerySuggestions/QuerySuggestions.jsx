import Styles from '/styles/components/Search.module.scss';
import SuggestionContext from '/contexts/SuggestionContext';

import QuerySuggestion from './QuerySuggestion';
import Loading from '../../Loading';

const QuerySuggestions = (props) => {
  if (!Array.isArray(props.querySuggestions))
    return null;

  const children = props.querySuggestions.map((song) => (
    <SuggestionContext.Consumer key={song.spotifyID}>
      {({ setSelectedSong }) => (
        <QuerySuggestion
          song={song}
          onClick={(event) => {
            const selectedSong = props.querySuggestions.find((s) => s.spotifyID === song.spotifyID);
            setSelectedSong(selectedSong);
          }}
        />
      )}
    </SuggestionContext.Consumer>
  ));

  return (
    <div className={Styles.dropdown}>
      <Loading display={props.loading} style={props.querySuggestions.length > 0 ? {} : { backgroundColor: 'whitesmoke'}} />
      {children}
    </div>
  );
};

export default QuerySuggestions;
