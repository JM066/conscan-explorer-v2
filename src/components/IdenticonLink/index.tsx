import Identicon from "react-identicons";
import Link from "next/link";

interface iBlockProp {
  blocknum: string;
  link: string;
}
const IdenticonLink = ({ blocknum, link }: iBlockProp) => {
  return (
    <Link href={link}>
      <a>
        <Identicon size={15} string={blocknum} />
      </a>
    </Link>
  );
};

export default IdenticonLink;
