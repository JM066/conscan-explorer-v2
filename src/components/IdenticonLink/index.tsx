import Link from "next/link";
import Identicon from "react-identicons";

import styles from "./IdenticonLink.module.scss";

interface IdenticonLink {
  idString: string;
  link: string;
}
const IdenticonLink = ({ idString, link }: IdenticonLink) => {
  return (
    <div className={styles.IconBox}>
      <Link href={link}>
        <a>
          <Identicon size={15} string={idString} />
        </a>
      </Link>
    </div>
  );
};

export default IdenticonLink;
