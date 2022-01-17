import classNames from "classnames";
import style from "./Wrapper.module.scss";

interface Props {
  children?: React.ReactNode;
  className?: string;
}
function Wrapper({ children, className }: Props) {
  return <div className={classNames(style.Wrapper, className)}>{children}</div>;
}
export default Wrapper;
