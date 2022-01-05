import style from "./Cell.module.scss";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  grow?: boolean;
  className?: string;
  center?: boolean;
}

function Cell({ children, grow, className }: Props) {
  return (
    <div className={classNames(style.Cell, { [style.grow]: grow }, className)}>
      {children}
    </div>
  );
}
export default Cell;
