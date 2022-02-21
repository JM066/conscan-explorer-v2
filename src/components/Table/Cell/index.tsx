import classNames from "classnames";

import DriveIcon from "@/assets/icons/drive-smart.svg";
import TransferIcon from "@/assets/icons/conx-smart.svg";
import BridgeIcon from "@/assets/icons/bridge-smart.svg";

import styles from "./Cell.module.scss";

interface Props {
  children?: React.ReactNode;
  grow?: boolean;
  className?: string;
  centered?: boolean;
  chaincodename?: string;
}

function Cell({
  children,
  grow,
  centered = false,
  chaincodename,
  className,
}: Props) {
  const getActionIcon = (chaincodename: string) => {
    switch (chaincodename) {
      case "conx":
        return <TransferIcon />;
      case "drive":
        return <DriveIcon />;
      case "bridge":
        return <BridgeIcon />;
      default:
        return <TransferIcon />;
    }
  };
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
        {!!chaincodename && getActionIcon(chaincodename)}
        {children}
      </div>
    </div>
  );
}
export default Cell;
