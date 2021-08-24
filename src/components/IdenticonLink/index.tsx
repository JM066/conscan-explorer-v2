import Link from "next/link";
import Identicon from "react-identicons";

import styles from "./IdenticonLink.module.scss";

interface IdenticonLink {
  blocknum: string;
  link: string;
}
const IdenticonLink = ({ blocknum, link }: IdenticonLink) => {
  return (
    <div className={styles.IconBox}>
      <Link href={link}>
        <Identicon size={15} string={blocknum} />
      </Link>
    </div>
  );
};

export default IdenticonLink;
