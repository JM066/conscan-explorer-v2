import Identicon from "react-identicons";
import Link from "next/link";

interface IdenticonLink {
  idString: string;
  link: string;
}
const IdenticonLink = ({ idString, link }: IdenticonLink) => {
  return (
    <Link href={link}>
      <a>
        <Identicon size={15} string={idString} />
      </a>
    </Link>
  );
};

export default IdenticonLink;
