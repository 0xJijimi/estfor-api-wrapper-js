// Base interfaces for common fields
export interface EstforApiBaseEntity {
  id: string;
}

export interface EstforApiPaginatedResponse<T> {
  items: T[];
  total: number;
}

// Action related types
export interface EstforApiAction extends EstforApiBaseEntity {
  name: string;
  description: string;
  skill: string;
  minLevel: number;
  xp: number;
  inputTokenId: number;
  inputAmount: number;
  outputTokenId: number;
  outputAmount: number;
  successRate: number;
  isAvailable: boolean;
}

export interface EstforApiActionChoice extends EstforApiBaseEntity {
  actionId: string;
  name: string;
  description: string;
  skill: string;
  minLevel: number;
  xp: number;
  inputTokenId: number;
  inputAmount: number;
  outputTokenId: number;
  outputAmount: number;
  successRate: number;
  isAvailable: boolean;
}

// Activity related types
export interface EstforApiActivity extends EstforApiBaseEntity {
  playerId: string;
  userAddress: string;
  actionId: string;
  actionChoiceId: string;
  startTime: number;
  endTime: number;
  xpGained: number;
  inputTokenId: number;
  inputAmount: number;
  outputTokenId: number;
  outputAmount: number;
  success: boolean;
}

// Avatar related types
export interface EstforApiAvatar extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
}

// Item related types
export interface EstforApiItem extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  tokenId: number;
  isSellableToShop: boolean;
  isAvailable: boolean;
}

// Player related types
export interface EstforApiPlayer extends EstforApiBaseEntity {
  userAddress: string;
  name: string;
  avatarId: string;
  level: number;
  xp: number;
  isActive: boolean;
}

// Shop related types
export interface EstforApiShopItem extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  tokenId: number;
  price: number;
  isAvailable: boolean;
}

// User Item NFT related types
export interface EstforApiUserItemNft extends EstforApiBaseEntity {
  userAddress: string;
  tokenId: number;
  amount: number;
}

// Player Self Made related types
export interface EstforApiPlayerSelfMade extends EstforApiBaseEntity {
  playerId: string;
  name: string;
  description: string;
  imageUrl: string;
  tokenId: number;
  isAvailable: boolean;
}

// Last Full Equipment related types
export interface EstforApiLastFullEquipment extends EstforApiBaseEntity {
  userAddress: string;
  playerId: string;
  skill: string;
  tokenIds: number[];
  amounts: number[];
}

// User related types
export interface EstforApiUser extends EstforApiBaseEntity {
  address: string;
  name: string;
  avatarId: string;
  level: number;
  xp: number;
}

// XP Threshold Reward related types
export interface EstforApiXpThresholdReward extends EstforApiBaseEntity {
  level: number;
  xp: number;
  rewardTokenId: number;
  rewardAmount: number;
}

// Random Word related types
export interface EstforApiRandomWord extends EstforApiBaseEntity {
  word: string;
  createdAt: number;
}

// Player Day Data related types
export interface EstforApiPlayerDayData extends EstforApiBaseEntity {
  playerId: string;
  date: number;
  xpGained: number;
  actionsCompleted: number;
}

// Donation Day Data related types
export interface EstforApiDonationDayData extends EstforApiBaseEntity {
  date: number;
  totalDonations: number;
  totalAmount: number;
}

// Clan related types
export interface EstforApiClan extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  leader: string;
  memberCount: number;
  level: number;
  xp: number;
  tier: number;
  vaultMmr: number;
}

export interface EstforApiClanMember extends EstforApiBaseEntity {
  clanId: string;
  userAddress: string;
  role: string;
  joinedAt: number;
  xp: number;
}

export interface EstforApiClanInvite extends EstforApiBaseEntity {
  clanId: string;
  userAddress: string;
  status: string;
  createdAt: number;
}

export interface EstforApiClanTier extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  level: number;
  xpRequired: number;
  memberLimit: number;
  vaultMmrRequired: number;
}

// Quest related types
export interface EstforApiQuest extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  skill: string;
  minLevel: number;
  xp: number;
  rewardTokenId: number;
  rewardAmount: number;
  isAvailable: boolean;
}

export interface EstforApiPlayerQuest extends EstforApiBaseEntity {
  playerId: string;
  questId: string;
  status: string;
  progress: number;
  completedAt: number;
}

// Core Data related types
export interface EstforApiCoreData extends EstforApiBaseEntity {
  totalPlayers: number;
  totalClans: number;
  totalItems: number;
  totalActions: number;
  totalQuests: number;
  totalDonations: number;
  totalLotteries: number;
  totalRaffleEntries: number;
  totalFirstToReachMaxSkills: number;
  totalInstantActions: number;
  totalPromotions: number;
  totalTerritories: number;
  totalClanBattles: number;
  totalLockedBankVaultClanBattlePairs: number;
  totalOrders: number;
  totalFailedOrders: number;
  totalPriceLevels: number;
  totalTokenInfos: number;
  totalSaleHistories: number;
  totalOrderBookDayDatas: number;
  totalInstantVrfActions: number;
  totalBasePets: number;
  totalPets: number;
  totalPassiveActions: number;
}

// Donation related types
export interface EstforApiDonation extends EstforApiBaseEntity {
  userAddress: string;
  amount: number;
  createdAt: number;
}

// Lottery related types
export interface EstforApiLottery extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  startTime: number;
  endTime: number;
  prizeTokenId: number;
  prizeAmount: number;
  winner: string;
  winnerAmount: number;
}

// Raffle Entry related types
export interface EstforApiRaffleEntry extends EstforApiBaseEntity {
  userAddress: string;
  lotteryId: string;
  ticketCount: number;
  createdAt: number;
}

// First to Reach Max Skills related types
export interface EstforApiFirstToReachMaxSkills extends EstforApiBaseEntity {
  userAddress: string;
  playerId: string;
  skill: string;
  level: number;
  xp: number;
  timestamp: number;
}

// Instant Action related types
export interface EstforApiInstantAction extends EstforApiBaseEntity {
  name: string;
  description: string;
  skill: string;
  minLevel: number;
  xp: number;
  inputTokenId: number;
  inputAmount: number;
  outputTokenId: number;
  outputAmount: number;
  successRate: number;
  isAvailable: boolean;
}

// Promotion related types
export interface EstforApiPromotion extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  startTime: number;
  endTime: number;
  rewardTokenId: number;
  rewardAmount: number;
}

export interface EstforApiPlayerPromotion extends EstforApiBaseEntity {
  playerId: string;
  promotionId: string;
  status: string;
  createdAt: number;
}

// Territory related types
export interface EstforApiTerritory extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  clanId: string;
  level: number;
  xp: number;
}

// Clan Battle related types
export interface EstforApiClanBattle extends EstforApiBaseEntity {
  attackerClanId: string;
  defenderClanId: string;
  startTime: number;
  endTime: number;
  attackerMmr: number;
  defenderMmr: number;
  winner: string;
  attackerXpGained: number;
  defenderXpGained: number;
}

export interface EstforApiLockedBankVaultClanBattlePair extends EstforApiBaseEntity {
  clanId: string;
  battleId: string;
  lockedAt: number;
  unlockedAt: number;
}

// Order related types
export interface EstforApiOrder extends EstforApiBaseEntity {
  userAddress: string;
  tokenId: number;
  amount: number;
  price: number;
  createdAt: number;
  status: string;
}

export interface EstforApiFailedOrder extends EstforApiBaseEntity {
  userAddress: string;
  tokenId: number;
  amount: number;
  price: number;
  createdAt: number;
  reason: string;
}

// Price Level related types
export interface EstforApiPriceLevel extends EstforApiBaseEntity {
  tokenId: number;
  level: number;
  price: number;
}

// Token Info related types
export interface EstforApiTokenInfo extends EstforApiBaseEntity {
  tokenId: number;
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: number;
}

// Sale History related types
export interface EstforApiSaleHistory extends EstforApiBaseEntity {
  tokenId: number;
  seller: string;
  buyer: string;
  amount: number;
  price: number;
  timestamp: number;
}

// Order Book Day Data related types
export interface EstforApiOrderBookDayData extends EstforApiBaseEntity {
  tokenId: number;
  date: number;
  totalVolume: number;
  totalAmount: number;
  averagePrice: number;
}

// Instant VRF Action related types
export interface EstforApiInstantVrfAction extends EstforApiBaseEntity {
  name: string;
  description: string;
  skill: string;
  minLevel: number;
  xp: number;
  inputTokenId: number;
  inputAmount: number;
  outputTokenId: number;
  outputAmount: number;
  successRate: number;
  isAvailable: boolean;
}

export interface EstforApiQueuedInstantVrfAction extends EstforApiBaseEntity {
  userAddress: string;
  actionId: string;
  startTime: number;
  endTime: number;
  status: string;
}

// Pet related types
export interface EstforApiBasePet extends EstforApiBaseEntity {
  name: string;
  description: string;
  imageUrl: string;
  skill: string;
  minLevel: number;
  xp: number;
}

export interface EstforApiPet extends EstforApiBaseEntity {
  basePetId: string;
  name: string;
  description: string;
  imageUrl: string;
  skill: string;
  minLevel: number;
  xp: number;
  owner: string;
}

// Passive Action related types
export interface EstforApiPassiveAction extends EstforApiBaseEntity {
  name: string;
  description: string;
  skill: string;
  minLevel: number;
  xp: number;
  inputTokenId: number;
  inputAmount: number;
  outputTokenId: number;
  outputAmount: number;
  successRate: number;
  isAvailable: boolean;
}

export interface EstforApiQueuedPassiveAction extends EstforApiBaseEntity {
  userAddress: string;
  actionId: string;
  startTime: number;
  endTime: number;
  status: string;
}

// Subgraph Health related types
export interface EstforApiSubgraphHealth extends EstforApiBaseEntity {
  synced: boolean;
  health: string;
  fatalError: string;
  nonFatalErrors: string[];
  chains: {
    chainHeadBlock: number;
    latestBlock: number;
    lastHealthyBlock: number;
  }[];
} 