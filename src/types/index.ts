export type Locales = {
  value: "en" | "ko";
  label: "English" | "한국어";
};
export type ObjectType = {
  [key: string]: string;
};
export type AppState = {
  channelStats: {
    blocks: string;
    txns: string;
  };
  setChannelStats: (channelStats: { blocks: string; txns: string }) => void;
};
export type SmartContractDetailsType = {
  name: string;
  version: number;
  txnCount: number;
  updated: string;
};
export type contractData = {
  status: number;
  chaincode: ContractType[];
};
export type ContractType = {
  chaincodename: string;
  codes: Array<ObjectType>;
};
export type BlockActivityDataType = {
  blocknum: number;
  txcount: number;
  blockhash: string;
  createdt: string;
};
export type TxnActivityDataType = {
  id: number;
  txhash: string;
  chaincodename: string;
  createdt: string;
  tx_from: string;
  tx_to: string;
  tx_action: string;
  tx_value: string;
};

export type TxnsTable = {
  id: number;
  chaincodename: string;
  tx_hash_time: {
    txhash: string;
    createdt: Date;
  };
  tx_from_to: {
    tx_from: string;
    tx_to: string;
  };
  tx_action_value: {
    tx_action: string;
    tx_value: string;
  };
};

export type BlockDetail = {
  blksize: number;
  blockhash: string;
  blocknum: number;
  createdt: Date;
  datahash: string;
  prehash: string;
  txcount: number;
  txhash: String[];
};
