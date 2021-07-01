import { ProtocolType } from '../protocolTypes';
import { ParsedAddressAsset } from '../tokens';
import { EthereumAddress } from '../wallet';
import { TransactionStatus } from './transactionStatus';
import { TransactionType } from './transactionType';

export interface RainbowTransaction {
  address: string;
  arbitrum?: boolean;
  balance: {
    amount: string;
    display: string;
  } | null;
  dappName?: string; // for walletconnect
  description: string | null;
  from: EthereumAddress | null;
  gasLimit?: string | null;
  gasPrice?: string;
  hash: string | null;
  minedAt: number | null;
  name: string | null;
  native: {
    amount: string;
    display: string;
  };
  nonce: number | null;
  optimism?: boolean;
  polygon?: boolean;
  pending: boolean;
  protocol?: ProtocolType | null;
  sourceAmount?: string; // for purchases
  status: TransactionStatus;
  symbol: string | null;
  timestamp?: number; // for purchases
  title: string;
  to: EthereumAddress | null;
  transferId?: string; // for purchases
  type: TransactionType;
}

export interface NewTransaction {
  arbitrum: boolean | undefined;
  amount: string | null;
  asset: ParsedAddressAsset | null;
  dappName?: string; // for walletconnect
  from: EthereumAddress | null;
  gasLimit?: string | null;
  gasPrice?: string;
  hash: string | null;
  nonce: number | null;
  optimism: boolean | undefined;
  polygon: boolean | undefined;
  protocol?: ProtocolType | null;
  sourceAmount?: string; // for purchases
  status?: TransactionStatus;
  timestamp?: number; // for purchases
  to: EthereumAddress | null;
  transferId?: string; // for purchases
  type?: TransactionType;
}
