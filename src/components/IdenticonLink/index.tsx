import Identicon from "react-identicons";
import Button from "@/components/Button";

import styles from "./IdenticonLink.module.scss";

interface IdenticonLink {
  idString: string;
  link: string;
}
const IdenticonLink = ({ idString, link }: IdenticonLink) => {
  return (
    <div className={styles.IconBox}>
      <Button variant="ghost" link={link}>
        <a>
          <Identicon size={15} string={idString} />
        </a>
      </Button>
    </div>
  );
};

export default IdenticonLink;
