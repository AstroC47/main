import { SigningCosmWasmClient } from "cosmwasm";

const config = {
    chainId: "stargaze-1",
    rpcEndpoint: "https://rpc.stargaze-apis.com/",
    prefix: "wasm",
  };
  
const gasPrice = null;
const prefix = "wasm"


const getKeplrClient = async () => {

  

  if (!window.keplr) {
    window.alert("Make sure keplr is supported by the Browser and installed");
    throw new Error("Keplr is not supported or installed on this browser!");
  }

const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

await window.keplr.enable(config.chainId).catch(() => {
  throw new Error(`Keplr can't connect to this chainId: ${config.chainId}`);
});

const client = await SigningCosmWasmClient.connectWithSigner(
    config.rpcEndpoint,
    offlineSigner,
    {
        prefix,
        gasPrice
    }
    );

  // console.log(offlineSigner.getAccounts()
  //     .then((result) => {console.log(result[0].address)})
  //     .catch((err) => {console.log(err)}));
  getAddress()
}

const getAddress = async () => {
      const offlineSigner = await window.getOfflineSignerAuto(config.chainId);

     const addr = await offlineSigner.getAccounts().then((result) => { return result[0].address});
     window.alert("CONNECTED TO "+addr);
      return addr
}


  export { getKeplrClient, getAddress };