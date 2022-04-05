import styles from "./MenuToggle.module.scss";
interface Props {
  toggleClick: () => void;
}
function MenuToggle({ toggleClick }: Props) {
  return (
    <div onClick={toggleClick} className={styles.MenuToggle}>
      <div className={styles.HamburgerButton}></div>
      <div className={styles.HamburgerButton}></div>
      <div className={styles.HamburgerButton}></div>
    </div>
  );
}

export default MenuToggle;
