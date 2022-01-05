import classNames from "classnames";
import style from "./Row.module.scss";

interface Props {
  children: React.ReactNode;
  header?: boolean;
  className?: string;
}
function Row({ children, header, className }: Props) {
  return (
    <div
      className={classNames(style.Row, { [style.header]: header }, className)}
    >
      {children}
    </div>
  );
}
export default Row;
