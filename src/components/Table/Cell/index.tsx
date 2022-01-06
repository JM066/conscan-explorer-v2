import style from "./Cell.module.scss";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  grow?: boolean;
  className?: string;
  centered?: boolean;
}

function Cell({ children, grow, centered, className }: Props) {
  return (
    <div
      className={classNames(
        style.Cell,
        { [style.grow]: grow },
        { [style.centered]: centered },
        className
      )}
    >
      {children}
    </div>
  );
}
export default Cell;
