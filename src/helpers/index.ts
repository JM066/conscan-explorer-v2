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
  }
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
