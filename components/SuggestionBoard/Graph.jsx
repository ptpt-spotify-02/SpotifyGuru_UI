import { useContext } from 'react';
import {
  FlexibleXYPlot,
  XAxis,
  VerticalBarSeries
} from 'react-vis';

import SuggestionContext from '/contexts/SuggestionContext';

import * as ICONS from '/common/graph/Icons';

const getData = (song) => {
  const data = [
    { x: ICONS.ACOUSTICNESS, y: song.stats.acousticness },
    { x: ICONS.DANCEABILITY, y: song.stats.danceability },
    { x: ICONS.ENERGY, y: song.stats.energy },
    { x: ICONS.INSTRUMENTALNESS, y: song.stats.instrumentalness },
    { x: ICONS.KEY, y: song.stats.key },
    { x: ICONS.LIVENESS, y: song.stats.liveness },
    { x: ICONS.LOUDNESS, y: song.stats.loudness },
    { x: ICONS.MODE, y: song.stats.mode },
    { x: ICONS.SPEECHINESS, y: song.stats.speechiness },
    { x: ICONS.TEMPO, y: song.stats.tempo },
    { x: ICONS.VALENCE, y: song.stats.valence }
  ];

  return data;
};

const normalizeData = (data1, data2) => {
  const newData1 = [];
  const newData2 = [];

  for (let i = 0; i < data1.length; i++) {
    const point1 = data1[i];
    const point2 = data2[i];

    const maxY = Math.max(Math.abs(point1.y), Math.abs(point2.y));
    const genPoint = (point) => {
      const max = Math.abs(maxY === 0 ? 1 : maxY);
      const y = Math.abs(point.y);

      const newPoint = {
        x: point.x,
        y: (point1.y === point2.y ? 1 : (y / max)) * 10
      };

      return newPoint;
    };

    newData1[i] = genPoint(point1);
    newData2[i] = genPoint(point2);
  }

  return [ newData1, newData2 ];
};

const Graph = (props) => {
  const { selectedSong } = useContext(SuggestionContext);

  const [ selectedSongData, mySongData ] = normalizeData(getData(selectedSong), getData(props.song));

  return (
    <div className={props.className} style={props.style}>
      <FlexibleXYPlot xType='ordinal'>
        <XAxis />
        <VerticalBarSeries data={selectedSongData} />
        <VerticalBarSeries data={mySongData} />
      </FlexibleXYPlot>
    </div>
  );
};

export default Graph;
