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
        <a>
          <Identicon size={15} string={blocknum} />
        </a>
      </Link>
    </div>
  );
};

export default IdenticonLink;
