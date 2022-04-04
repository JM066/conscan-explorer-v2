import classNames from "classnames";
import { PAGES_MAIN, PAGES_SMARTCONTRACT, LOCALES } from "src/const";
import ConunLogoLight from "@/assets/icons/conun_logo_white.svg";
import styles from "./MenuDrawer.module.scss";

function MenuDrawer({ open }: { open: boolean }) {
  return (
    <div className={classNames(styles.MenuDrawer, { [styles.open]: open })}>
      <div className={styles.Logo}>
        <ConunLogoLight />
      </div>
      <div className={styles.ListContainer}>
        <div className={styles.List}>
          {PAGES_MAIN.map((main) => (
            <div key={main.id}>{main.name}</div>
          ))}
          {PAGES_SMARTCONTRACT.map((contract) => (
            <div key={contract.id}>{contract.name}</div>
          ))}
          {LOCALES.map((lang) => (
            <div key={lang.value}>{lang.label}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default MenuDrawer;
