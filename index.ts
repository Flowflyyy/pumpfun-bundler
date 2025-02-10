import {
  VersionedTransaction,
  Keypair,
  SystemProgram,
  Transaction,
  Connection,
  ComputeBudgetProgram,
  TransactionInstruction,
  TransactionMessage,
  AddressLookupTableProgram,
  PublicKey,
  SYSVAR_RENT_PUBKEY,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import {
  ASSOCIATED_TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
  getAssociatedTokenAddressSync,
  NATIVE_MINT,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import NodeWallet from "@coral-xyz/anchor/dist/cjs/nodewallet";
import { AnchorProvider } from "@coral-xyz/anchor";
import { openAsBlob } from "fs";
import base58 from "bs58";

import {
  delay_1,
  delay_2,
  DESCRIPTION,
  DISTRIBUTION_WALLETNUM,
  FILE,
  global_mint,
  JITO_FEE,
  JITO_KEY,
  JitoType,
  PRIVATE_KEY,
  PUMP_PROGRAM,
  RPC_ENDPOINT,
  RPC_WEBSOCKET_ENDPOINT,
  SWAP_AMOUNT,
  TELEGRAM,
  TOKEN_CREATE_ON,
  TOKEN_NAME,
  TOKEN_SHOW_NAME,
  TOKEN_SYMBOL,
  TWITTER,
  wallet_1,
  wallets,
  WEBSITE,
} from "./constants";
import { saveDataToFile, sleep } from "./utils/utils";
import { createAndSendV0Tx, execute } from "./executor/legacy";
import { PumpFunSDK } from "./src/pumpfun";
import { executeJitoTx } from "./executor/jito";

const commitment = "confirmed";

const connection = new Connection(RPC_ENDPOINT, {
  wsEndpoint: RPC_WEBSOCKET_ENDPOINT,
  commitment,
});
const mainKp = Keypair.fromSecretKey(base58.decode(PRIVATE_KEY));
await sleep(parseInt(delay_1))
let kps: JitoType[] = [];
const transactions: VersionedTransaction[] = [];

const mintKp = Keypair.generate();
const mintAddress = mintKp.publicKey;
let sdk = new PumpFunSDK(
  new AnchorProvider(connection, new NodeWallet(new Keypair()), { commitment })
);

const main = async () => {
  // const lutAddress = new PublicKey("GUbyY4BiSteaCkqxjnTLVN446yhAF3iK9FiEuCFHnMw3")
  // Create LUT

  // console.log("LUT Address:", lutAddress.toBase58())



  // Sell main Wallet after delay_1 time
  
  // Bundle of sell transactions
  
  // create token instructions
}

// jito fee instruction

// make sell instructions


main();
