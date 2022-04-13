import create from "zustand";
import { isMobile } from "react-device-detect";
import { AppState } from "@/types/index";
const useStore = create<AppState>((set) => ({
  isMobile: isMobile,
  setIsMobile: (value) => {
    set({ isMobile: value });
  },
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
