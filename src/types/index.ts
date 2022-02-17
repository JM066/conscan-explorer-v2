export type Locales = {
  value: "en" | "ko";
  label: "English" | "한국어";
};
export type ObjectType = {
  [key: string]: string | number;
};
export type AppState = {};
export type SmartContractDetailsType = {
  name: string;
  version: number;
  txnCount: number;
  updated: Date;
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

export type TxnTableInterface = {
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
