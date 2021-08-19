export function reducedHash(value: string) {
  return `${value.substring(0, 4)}...${value.substring(value.length - 3)}`;
}
