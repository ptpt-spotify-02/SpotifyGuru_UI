import Styles from '/styles/components/Loading.module.scss';

const Loading = (props) => {
  if (!props.display)
    return null;

  return <div className={Styles.loading} style={props.style} />;
};

export default Loading;
