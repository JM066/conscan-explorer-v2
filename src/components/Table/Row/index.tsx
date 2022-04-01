import classNames from "classnames";
import styles from "./Row.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  fullLength?: boolean;
  noSpaceAround?: boolean;
}
function Row({ children, fullLength, noSpaceAround, className }: Props) {
  return (
    <div className={classNames(styles.RowContainer, className)}>
      <div
        className={classNames(styles.Row, {
          [styles.full]: fullLength,
          [styles.noSpaceAround]: noSpaceAround,
        })}
      >
        {children}
      </div>
    </div>
  );
}
export default Row;
