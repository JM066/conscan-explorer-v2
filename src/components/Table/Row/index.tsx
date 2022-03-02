import classNames from "classnames";
import style from "./Row.module.scss";

interface Props {
  children: React.ReactNode;
  header?: boolean;
  className?: string;
  fullLength?: boolean;
}
function Row({ children, header, fullLength = false, className }: Props) {
  return (
    <div
      className={classNames(
        style.RowContainer,
        { [style.header]: header },
        className
      )}
    >
      <div
        className={classNames(style.Row, {
          [style.header]: header,
          [style.full]: fullLength,
        })}
      >
        {children}
      </div>
    </div>
  );
}
export default Row;
