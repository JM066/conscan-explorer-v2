// import Link from "next/link";
import Identicon from "react-identicons";
import styles from "./IdenticonLink.module.scss";

export interface IdenticonLinkProps {
  idString?: number;
  // link: string;
}
const IdenticonLink = ({ idString }: IdenticonLinkProps) => {
  return (
    // <Link href={link}>
    <div className={styles.IconBox}>
      <Identicon size={15} string={idString} />
    </div>
    // </Link>
  );
};

export default IdenticonLink;
