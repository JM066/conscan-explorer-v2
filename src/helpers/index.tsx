import { formatDistance } from "date-fns";

export function getContractType(serviceType: string | undefined) {
  if (process.env.NODE_ENV === "development") {
    switch (serviceType) {
      case "token":
      case "mycoin":
      case "conToken":
      case "conos":
      case "coin":
      case "bananacoin":
        return "coin";

      case "drive":
      case "drive_1":
      case "ConunDrive":
        return "drive";

      default:
        return "basic";
    }
  } else {
    switch (serviceType) {
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
}

export function getTimeDistance(datePast: string) {
  const date = formatDistance(new Date(datePast), new Date(), {
    addSuffix: true,
  });
  return date;
}

export function reducedHash(value: string) {
  return `${value.substring(0, 4)}...${value.substring(value.length - 3)}`;
}
