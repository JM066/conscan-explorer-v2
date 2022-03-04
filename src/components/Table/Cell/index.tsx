import classNames from "classnames";

import styles from "./Cell.module.scss";

interface Props {
  children?: React.ReactNode;
  grow?: boolean;
  className?: string;
  centered?: boolean;
}

function Cell({ children, grow, centered = false, className }: Props) {
  return (
    <div className={classNames(styles.CellContainer, className)}>
      <div
        className={classNames(
          styles.Cell,
          { [styles.grow]: grow },
          { [styles.centered]: centered },
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
export default Cell;
