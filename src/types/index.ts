export type SmartContractDetailsType = {
  name: string;
  version: number;
  txnCount: number;
  updated: Date;
};

export type TxnActivityDataType = {
  id: number;
  txhash: string;
  chaincodename: string;
  createdt: Date;
  tx_from: string;
  tx_to: string;
  tx_action: string;
  tx_value: string;
};
