import Identicon from "react-identicons";
import Button from "@/components/Button";
import styles from "./IdenticonLink.module.scss";

export interface IdenticonLinkProps {
  idString?: number;
  link?: string;
}
const IdenticonLink = ({ idString, link }: IdenticonLinkProps) => {
  return (
    <Button variant="ghost" link={link} className={styles.IconBox}>
      <Identicon size={15} string={idString} />
    </Button>
  );
};

export default IdenticonLink;
