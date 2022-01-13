export async function getHash() {
  const res = await fetch("http://192.168.100.208:8080/api/channels/info");
  const asJSON = await res.json();
  return asJSON.channels[0].channel_genesis_hash;
}
export async function getLatestBlocks() {
  const channelHash = await getHash();
  const res = await fetch(
    `http://192.168.100.208:8080/api/blockActivity/${channelHash}`
  );

  const asJSON = await res.json();
  return asJSON;
}
