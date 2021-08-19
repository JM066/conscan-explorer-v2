// export function getContractType(serviceType: string | undefined) {
//   switch (serviceType) {
//     case "CONX":
//       return "coin";

//     case "DRIVE":
//       return "drive";

//     case "ENGINE":
//       return "engine";

//     default:
//       return "basic";
//   }
// }
export function getContractType(serviceType: string | undefined) {
  //This version is for testing locally, yes the switch statement is diabolical.
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
