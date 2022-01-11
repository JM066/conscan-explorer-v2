import Main from "../src/pages/Main";

export default Main;

export async function getStaticProps() {
  console.log("fired static props");
  const res = await fetch("http://192.168.100.208:8080/api/channels/info");
  const asJSON = await res.json();
  return { props: { channelHash: asJSON.channels[0].channel_genesis_hash } };
}
