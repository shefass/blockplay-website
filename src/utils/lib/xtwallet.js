import { GenericExtensionWallet } from "@signumjs/wallets";
import { NODEToUse } from "../globalParameters.js";

const wallet = new GenericExtensionWallet();

export async function connectToWallet() {
  try {
    const { publicKey, connectionStatus, nodeHost, accountId } =
      await wallet.connect({
        appName: "BlockPlay.io",
        nodeHost: NODEToUse,
      });
    console.log(`Connected to the wallet! 
      PubKey: ${publicKey} 
      ConnectionStatus: ${connectionStatus} 
      NodeHost: ${nodeHost}
      AccountId: ${accountId}`);
    return { publicKey, connectionStatus, nodeHost, accountId };
  } catch (err) {
    console.log("Your conenction failed!");
    return err;
  }
};

export async function sendXTtransaction(usignedTransaction) {
  const result = await wallet.confirm(usignedTransaction);
  console.log(result);
};

