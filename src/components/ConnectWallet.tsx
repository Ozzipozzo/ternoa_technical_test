import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@/utils/connector";
import { Web3Provider } from "@ethersproject/providers";

const ConnectWallet: React.FC = () => {
  const [activating, setActivating] = useState(false);
  const { activate, deactivate, active, error } = useWeb3React<Web3Provider>();

  useEffect(() => {
    if (activating && !error && active) {
      setActivating(false);
    }
  }, [activating, error, active]);

  const onClick = () => {
    if (!active) {
      setActivating(true);
      activate(injected);
    } else {
      deactivate();
    }
  };

  return (
    <button onClick={onClick}>
      {active ? "Disconnect Wallet" : "Connect Wallet"}
    </button>
  );
};

export default ConnectWallet;
