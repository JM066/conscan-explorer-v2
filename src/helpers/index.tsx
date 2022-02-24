import { formatDistance } from "date-fns";
import DriveIcon from "@/assets/icons/drive-smart.svg";
import TransferIcon from "@/assets/icons/conx-smart.svg";
import BridgeIcon from "@/assets/icons/bridge-smart.svg";

export function getContractType(serviceType: string | undefined) {
  switch (serviceType?.toUpperCase()) {
    case "CONX":
      return "coin";

    case "DRIVE":
      return "drive";

    case "ENGINE":
      return "engine";

    default:
      return "basic";
  }
}
export const getBlocksActionIcon = (chaincodename: string) => {
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

export function getTimeDistance(datePast: string | Date) {
  if (typeof datePast === "string") {
    return formatDistance(new Date(datePast), new Date(), {
      addSuffix: true,
    });
  }
  return formatDistance(datePast, new Date(), {
    addSuffix: true,
  });
}

export function getReducedHash(txhash: string, left: number, right: number) {
  if (left && right) {
    return `${txhash.substring(0, left)}...${txhash.substring(
      txhash.length - right
    )}`;
  } else txhash;
}

export function getActionValue(
  action: string,
  value: string,
  chaincodename: string
): { data: string; currency: string | null } {
  if (action === "Transfer") {
    if (value.length > 7) {
      return {
        data: `${parseInt(value.substring(0, 7)).toLocaleString()}...`,
        currency: chaincodename,
      };
    } else {
      return {
        data: value.toLocaleString(),
        currency: chaincodename,
      };
    }
  } else {
    return {
      data: action,
      currency: null,
    };
  }
}
