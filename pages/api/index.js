export async function getHash() {
  const res = await fetch("http://192.168.100.208:8080/api/channels/info");
  const jsonData = await res.json();
  return jsonData.channels[0].channel_genesis_hash;
}
export async function getLatestBlocks() {
  const channelHash = await getHash();
  const res = await fetch(
    `http://192.168.100.208:8080/api/blockActivity/${channelHash}`
  );
  const jsonData = await res.json();
  return jsonData;
}

export async function getBlockDetail(blockNum) {
  const activeChannelHash = await getHash();
  const blockDetail = await fetch(
    `http://192.168.100.208:8080/api/block/transactions/${activeChannelHash}/${blockNum}`
  );
  const blockJSON = await blockDetail.json();
  return blockJSON;
}
