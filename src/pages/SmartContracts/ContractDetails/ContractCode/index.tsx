import React from "react";
import { useQuery } from "react-query";
// import ReactEmbedGist from "react-embed-gist";
import instance from "src/axios/instance";

import { useChannelHash } from "@/hooks/useChannelHash";

import { SmartContractDetailsType } from "src/types";

import styles from "./ContractCode.module.scss";

// const GISTPREFIX = "https://gist.github.com/conunkr/";
// const TEMP_GIST = "abd262517883b42a304d28e916bcddc8";

function ContractCode({ contract }: { contract: SmartContractDetailsType }) {
  const { channelHash } = useChannelHash();

  const {} = useQuery(
    ["smart-contract-gist", contract.name],
    async () => {
      const response = await instance.get(
        `/chaincode/gist-code/${channelHash}/${contract.name}/${contract.version}`
      );
      return response.data.rows;
    },
    { enabled: !!channelHash }
  );
  // usequery is empty here because currently the server returns null for gist links

  return <div className={styles.ContractCode}></div>;
  // This is empty because the react-embed-gist doesn't work with Next JS for some weird reason
}

export default ContractCode;
