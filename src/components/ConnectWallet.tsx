import { useState, useEffect } from "react";
import MetaMaskSDK from "@metamask/sdk";

const ConnectWallet: React.FC = () => {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [signResult, setSignResult] = useState<string>("");
  const [verifyDisabled, setVerifyDisabled] = useState<boolean>(true);

  const connectWalletHandler = async () => {
    if ((window as any).ethereum) {
      try {
        const requestedAccounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccounts(requestedAccounts);
      } catch (error) {
        console.error(error);
        alert(
          "Error connecting to MetaMask. Please check the console for more information."
        );
      }
    } else {
      alert(
        "MetaMask is not installed. Please install MetaMask and try again."
      );
    }
  };

  const personalSignHandler = async () => {
    const exampleMessage = "Example `personal_sign` message.";
    try {
      const from = accounts[0];
      const msg = `0x${Buffer.from(exampleMessage, "utf8").toString("hex")}`;
      const sign = await (window as any).ethereum.request({
        method: "personal_sign",
        params: [msg, from, "Example password"],
      });
      setSignResult(sign);
      setVerifyDisabled(false);
    } catch (err: any) {
      console.error(err);
      setSignResult(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    const storedAccount = localStorage.getItem("account");
    if (storedAccount) {
      setAccounts([storedAccount]);
    }
  }, []);

  useEffect(() => {
    if (accounts.length > 0) {
      console.log("Connected accounts:", accounts);
      personalSignHandler();
      localStorage.setItem("account", accounts[0]);
    }
  }, [accounts]);
  return (
    <>
      {accounts.length > 0 && localStorage.getItem("account") ? (
        <div className="flex items-center">
          <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded-full mr-2"></span>
          <p>
            Account:{" "}
            {accounts[0]?.slice(0, 6) ||
              localStorage.getItem("account")?.slice(0, 6)}
            ...
            {accounts[0]?.slice(-4) ||
              localStorage.getItem("account")?.slice(-4)}
          </p>
        </div>
      ) : (
        <button onClick={connectWalletHandler}>Connect Wallet</button>
      )}
    </>
  );
};

export default ConnectWallet;
