import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import useWebSocket from "../src/hooks/useWebSocket";

import Layout from "../src/components/Layout";
import { queryClient } from "../src/react-query/config";

import "./styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const webSocket = useWebSocket();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {webSocket}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </div>
  );
}
export default MyApp;
