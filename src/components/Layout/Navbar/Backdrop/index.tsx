import styles from "./Backdrop.module.scss";
interface Props {
  handleBackdrop: () => void;
}
function Backdrop({ handleBackdrop }: Props) {
  return <div onClick={handleBackdrop} className={styles.Backdrop}></div>;
}

export default Backdrop;
