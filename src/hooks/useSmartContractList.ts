import { useQuery } from "react-query";
import instance from "src/axios/instance";
import useChannelHash from "./useChannelHash";

function useSmartContractList() {
  const { channelHash } = useChannelHash();

  const { data: listOfContracts, isLoading: loadingContractList } = useQuery(
    "smart-contract-list",
    async () => {
      const response = await instance.get(`/chaincode/${channelHash}`);
      return response.data?.chaincode?.map((ch: any) => {
        return {
          name: ch.chaincodename,
          version: ch.codes.length,
          txnCount: ch.codes[0].txcount,
          updated: ch.codes[0].createdt,
        };
      });
    },
    { enabled: !!channelHash }
  );
  return { listOfContracts, loadingContractList };
}

export default useSmartContractList;
