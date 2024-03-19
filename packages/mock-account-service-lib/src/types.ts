import type { KeyObject } from 'crypto'

interface Asset {
  code: string
  scale: number
  liquidity: number
  liquidityThreshold: number
}

export interface Peering {
  liquidityThreshold: number
  peerUrl: string
  peerIlpAddress: string
  initialLiquidity: string
  name: string
}

export interface Account {
  name: string
  id: string
  initialBalance: bigint
  path: string
  brunoEnvVar: string
  assetCode: string
  skipWalletAddressCreation?: boolean
}

interface Fee {
  fixed: number
  basisPoints: number
  asset: string
  scale: number
}

interface SeedInstance {
  assets: Array<Asset>
  peeringAsset: string
  peers: Array<Peering>
  accounts: Array<Account>
  fees: Array<Fee>
  rates: Record<string, Record<string, number>>
}

export interface Config {
  seed: SeedInstance
  key: KeyObject
  publicHost: string
  testnetAutoPeerUrl: string
  authServerDomain: string
  graphqlUrl: string
}
export interface Webhook {
  id: string
  type: WebhookEventType
  data: Record<string, unknown>
}

export enum WebhookEventType {
  IncomingPaymentCreated = 'incoming_payment.created',
  IncomingPaymentCompleted = 'incoming_payment.completed',
  IncomingPaymentExpired = 'incoming_payment.expired',
  OutgoingPaymentCreated = 'outgoing_payment.created',
  OutgoingPaymentCompleted = 'outgoing_payment.completed',
  OutgoingPaymentFailed = 'outgoing_payment.failed',
  WalletAddressNotFound = 'wallet_address.not_found',
  AssetLiquidityLow = 'asset.liquidity_low',
  PeerLiquidityLow = 'peer.liquidity_low'
}
