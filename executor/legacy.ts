import { Connection, Keypair, SignatureStatus, TransactionConfirmationStatus, TransactionInstruction, TransactionMessage, TransactionSignature, VersionedTransaction } from "@solana/web3.js";
import { RPC_ENDPOINT, RPC_WEBSOCKET_ENDPOINT } from "../constants";


interface Blockhash {
  blockhash: string;
  lastValidBlockHeight: number;
}

export const execute = async (transaction: VersionedTransaction, latestBlockhash: Blockhash, isBuy: boolean | 1 = true) => {

}

export const createAndSendV0Tx = async (txInstructions: TransactionInstruction[], kp: Keypair, connection: Connection) => {
  
}


