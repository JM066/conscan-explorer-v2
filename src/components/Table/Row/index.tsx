import classNames from "classnames";
import style from "./Row.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  fullLength?: boolean;
}
function Row({ children, fullLength, className }: Props) {
  return (
    <div className={classNames(style.RowContainer, className)}>
      <div
        className={classNames(style.Row, {
          [style.full]: fullLength,
        })}
      >
        {children}
      </div>
    </div>
  );
}
export default Row;
