import { formatDistance } from "date-fns";

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

export function reducedHash(value: string) {
  if (value.length < 6) {
    return value;
  }
  return `${value.substring(0, 4)}...${value.substring(value.length - 3)}`;
}
