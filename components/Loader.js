// components/Loader.js
import styles from './Loader.module.css'; // importing CSS module

const Loader = () => {
  return (
    <div className={styles.loadingspinner}>
      <div id={styles.square1}></div>
      <div id={styles.square2}></div>
      <div id={styles.square3}></div>
      <div id={styles.square4}></div>
      <div id={styles.square5}></div>
    </div>
  );
};

export default Loader;
