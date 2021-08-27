import Image from 'next/image';

import Styles from '/styles/components/Search.module.scss';

const QuerySuggestion = (props) => (
  <div className={Styles.item} onClick={props.onClick}>
    <div className={Styles.content}>
      <div className={Styles.image}>
        <Image
          src={props.song.albumImageLink}
          alt={`${props.song.author} - ${props.song.title}`}
          layout='fill'
        />
      </div>
      <p className={Styles['text-wrapper']}>
        <span className={Styles.title}>{props.song.title}</span>
        <span className={Styles.author}>{props.song.author}</span>
        <span className={Styles.album}>{props.song.album}</span>
      </p>
    </div>
  </div>
);

export default QuerySuggestion;
