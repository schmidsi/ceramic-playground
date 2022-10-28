import { EthereumAuthProvider, useViewerConnection } from "@self.id/framework";
import { useEffect, useState } from "react";

function ConnectButton() {
  const [isClient, setIsClient] = useState(false);
  const [connection, connect, disconnect] = useViewerConnection();

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(connection);

  return connection.status === "connected" ? (
    <button
      onClick={() => {
        disconnect();
      }}
    >
      Disconnect ({connection.selfID.id})
    </button>
  ) : isClient && "ethereum" in window ? (
    <button
      disabled={connection.status === "connecting"}
      onClick={async () => {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        await connect(
          new EthereumAuthProvider((window as any).ethereum, accounts[0])
        );
      }}
    >
      Connect
    </button>
  ) : (
    <p>
      An injected Ethereum provider such as{" "}
      <a href="https://metamask.io/">MetaMask</a> is needed to authenticate.
    </p>
  );
}

export default ConnectButton;
