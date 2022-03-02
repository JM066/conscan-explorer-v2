import { formatDistance } from "date-fns";
import { zonedTimeToUtc } from "date-fns-tz";
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
    const zonedPastDate = getLocalTime(datePast);
    const zonedPresentDate = getLocalTime(new Date());
    return formatDistance(new Date(zonedPastDate), zonedPresentDate, {
      addSuffix: true,
    });
  }
}

export function getTimeZone() {
  const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timeZone;
}
export function getLocalTime(date: string | Date) {
  const timeZone = getTimeZone();
  const localTime = zonedTimeToUtc(date, timeZone);
  return localTime;
}

export function getReducedHash(txhash: string, left: number, right: number) {
  if (right > 0) {
    return `${txhash.substring(0, left)}...${txhash.substring(
      txhash.length - right
    )}`;
  } else return txhash;
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
      txValue: `${parseInt(value.substring(0, 7).toLocaleString())}...`,
    };
  }
}
