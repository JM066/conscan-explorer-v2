import create from "zustand";

import { AppState } from "@/types/index";

const useStore = create<AppState>((set) => ({
  channelStats: {
    blocks: "",
    txns: "",
  },
  setChannelStats: ({ blocks, txns }) => {
    set({
      channelStats: {
        blocks,
        txns,
      },
    });
  },
}));
export default useStore;
