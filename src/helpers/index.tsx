import { formatDistance } from "date-fns";
import DriveIcon from "@/assets/icons/drive-smart.svg";
import TransferIcon from "@/assets/icons/conx-smart.svg";
import BridgeIcon from "@/assets/icons/bridge-smart.svg";
import LikeIcon from "@/assets/icons/like.svg";
import DownloadIcon from "@/assets/icons/download.svg";
import CoinIcon from "@/assets/icons/coin.svg";

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
export const getTxnsIcon = (action: string) => {
  switch (action) {
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

export const getTxnsActionIcon = (action: string) => {
  switch (action) {
    case "Like":
      return <LikeIcon />;
    case "download":
      return <DownloadIcon />;
    default:
      return <CoinIcon />;
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
  coinName: string
) {
  if (action == "Transfer") {
    if (value.length > 7) {
      return {
        txValue: `${parseInt(value.substring(0, 7).toLocaleString())}...`,
        txCoin: coinName,
      };
    } else {
      return {
        txValue: value.toLocaleString(),
        txCoin: coinName,
      };
    }
  } else {
    return {
      txValue: value,
    };
  }
}
