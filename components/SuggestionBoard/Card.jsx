import Image from 'next/image';
import { Component } from 'react';

import Styles from '/styles/components/SuggestionBoard.module.scss';
import Graph from './Graph';

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showImage: true,
      rotation : 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      rotation : this.state.rotation + 180,
      showImage: !this.state.showImage
    });
  }

  render() {
    const imageStyles = {
      position      : this.state.showImage ? 'relative' : 'absolute',
      transition    : 'all 0.6s ease-in-out',
      transform     : `rotateY(${this.state.rotation}deg)`,
      transformStyle: 'preserve-3d'
    };

    const graphStyles = {
      position      : !this.state.showImage ? 'relative' : 'absolute',
      transition    : 'all 0.6s ease-in-out',
      transform     : `rotateY(${this.state.rotation - 180}deg)`,
      transformStyle: 'preserve-3d'
    };

    return (
      <div className={Styles.card} onClick={this.handleClick}>
        <div className={Styles.image} style={imageStyles}>
          <Image
            src={this.props.song.albumImageLink}
            alt={`${this.props.song.author} - ${this.props.song.title}`}
            layout='fill'
          />
        </div>
        <Graph
          className={Styles.graph}
          style={graphStyles}
          song={this.props.song}
        />
        <div className={Styles['track-info']}>
          <div className={Styles.title}>{this.props.song.title}</div>
          <div className={Styles.author}>Artist: {this.props.song.author}</div>
          <div className={Styles.album}>Album: {this.props.song.album}</div>
          <div className={Styles.year}>Year: {this.props.song.year}</div>
        </div>
      </div>
    );
  }
}
