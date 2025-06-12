import type {
  EstforApiAction,
  EstforApiActionChoice,
  EstforApiActivity,
  EstforApiAvatar,
  EstforApiBasePet,
  EstforApiClan,
  EstforApiClanBattle,
  EstforApiClanInvite,
  EstforApiClanMember,
  EstforApiClanTier,
  EstforApiCoreData,
  EstforApiDonation,
  EstforApiDonationDayData,
  EstforApiFailedOrder,
  EstforApiFirstToReachMaxSkills,
  EstforApiInstantAction,
  EstforApiInstantVrfAction,
  EstforApiItem,
  EstforApiLastFullEquipment,
  EstforApiLockedBankVaultClanBattlePair,
  EstforApiLottery,
  EstforApiOrder,
  EstforApiOrderBookDayData,
  EstforApiPassiveAction,
  EstforApiPet,
  EstforApiPlayer,
  EstforApiPlayerDayData,
  EstforApiPlayerPromotion,
  EstforApiPlayerQuest,
  EstforApiPlayerSelfMade,
  EstforApiPriceLevel,
  EstforApiPromotion,
  EstforApiQueuedInstantVrfAction,
  EstforApiQueuedPassiveAction,
  EstforApiQuest,
  EstforApiRaffleEntry,
  EstforApiRandomWord,
  EstforApiSaleHistory,
  EstforApiShopItem,
  EstforApiSubgraphHealth,
  EstforApiTerritory,
  EstforApiTokenInfo,
  EstforApiUser,
  EstforApiUserItemNft,
  EstforApiXpThresholdReward,
  EstforApiPaginatedResponse
} from './types';

// Remove fetch polyfill for Node.js. Document in README that users must provide fetch in Node.js environments.

export interface EstforApiClientOptions {
  baseUrl?: string;
}

/**
 * EstforApiClient provides typed methods for interacting with the Estfor Kingdom API.
 *
 * Example:
 *   const api = new EstforApiClient({ baseUrl: 'http://localhost:4004' });
 *   const actions = await api.getActions();
 */
export default class EstforApiClient {
  private baseUrl: string;

  constructor(options: EstforApiClientOptions = {}) {
    this.baseUrl = options.baseUrl || 'https://api.estfor.com';
  }

  async getActions(params?: {
    orderDirection?: string;
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    isAvailable?: boolean;
  }): Promise<EstforApiPaginatedResponse<EstforApiAction>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/actions/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch actions: ${res.status}`);
    return res.json();
  }

  async getActionById(id: string | number): Promise<EstforApiAction> {
    const res = await fetch(`${this.baseUrl}/actions/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch action by id: ${res.status}`);
    return res.json();
  }

  async getActionChoices(actionId: string | number, params?: {
    orderDirection?: string;
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    isAvailable?: boolean;
  }): Promise<EstforApiPaginatedResponse<EstforApiActionChoice>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/action-choices/${actionId}${query}`);
    if (!res.ok) throw new Error(`Failed to fetch action choices: ${res.status}`);
    return res.json();
  }

  async getActivities(params?: {
    activityTypesToSkip?: string[];
    activityTypesToInclude?: string[];
    playerId?: string;
    userAddress?: string;
    activityType?: string;
    block?: string;
    simplified?: boolean;
    orderDirection?: string;
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiActivity>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) =>
          Array.isArray(v)
            ? v.map(val => `${encodeURIComponent(k)}=${encodeURIComponent(val)}`).join('&')
            : `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`
        )
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/activities/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch activities: ${res.status}`);
    return res.json();
  }

  async getActivitiesByUser(userAddress: string, params?: {
    activityTypesToSkip?: string[];
    activityTypesToInclude?: string[];
    playerId?: string;
    activityType?: string;
    block?: string;
    simplified?: boolean;
    orderDirection?: string;
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiActivity>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) =>
          Array.isArray(v)
            ? v.map(val => `${encodeURIComponent(k)}=${encodeURIComponent(val)}`).join('&')
            : `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`
        )
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/activities/${encodeURIComponent(userAddress)}${query}`);
    if (!res.ok) throw new Error(`Failed to fetch activities by user: ${res.status}`);
    return res.json();
  }

  async getAvatars(): Promise<EstforApiPaginatedResponse<EstforApiAvatar>> {
    const res = await fetch(`${this.baseUrl}/avatars/`);
    if (!res.ok) throw new Error(`Failed to fetch avatars: ${res.status}`);
    return res.json();
  }

  async getItems(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    tokenIds?: string[];
    tokenIds_ge?: string;
    tokenIds_le?: string;
    isSellableToShop?: boolean;
    isAvailable?: boolean;
  }): Promise<EstforApiPaginatedResponse<EstforApiItem>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) =>
          Array.isArray(v)
            ? v.map(val => `${encodeURIComponent(k)}=${encodeURIComponent(val)}`).join('&')
            : `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`
        )
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/items/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch items: ${res.status}`);
    return res.json();
  }

  async getItemById(id: string | number): Promise<EstforApiItem> {
    const res = await fetch(`${this.baseUrl}/items/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch item by id: ${res.status}`);
    return res.json();
  }

  async getPlayers(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    userAddress?: string;
    isActive?: boolean;
  }): Promise<EstforApiPaginatedResponse<EstforApiPlayer>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/players/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch players: ${res.status}`);
    return res.json();
  }

  async getPlayerById(id: string | number): Promise<EstforApiPlayer> {
    const res = await fetch(`${this.baseUrl}/players/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch player by id: ${res.status}`);
    return res.json();
  }

  async getPlayersMulti(playerIds: (string | number)[]): Promise<EstforApiPlayer[]> {
    const res = await fetch(`${this.baseUrl}/players/multi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerIds }),
    });
    if (!res.ok) throw new Error(`Failed to fetch multiple players: ${res.status}`);
    return res.json();
  }

  async getQueuedActions(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    playerId?: string;
    userAddress?: string;
    isActive?: boolean;
  }): Promise<EstforApiPaginatedResponse<EstforApiActivity>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/queued-actions/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch queued actions: ${res.status}`);
    return res.json();
  }

  async getQueuedActionsMulti(queuedActionIds: (string | number)[]): Promise<EstforApiActivity[]> {
    const res = await fetch(`${this.baseUrl}/queued-actions/multi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ queuedActionIds }),
    });
    if (!res.ok) throw new Error(`Failed to fetch multiple queued actions: ${res.status}`);
    return res.json();
  }

  async getShopItems(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    tokenId?: string;
    isAvailable?: boolean;
  }): Promise<EstforApiPaginatedResponse<EstforApiShopItem>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/shop-items/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch shop items: ${res.status}`);
    return res.json();
  }

  async getShopItemById(id: string | number): Promise<EstforApiShopItem> {
    const res = await fetch(`${this.baseUrl}/shop-items/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch shop item by id: ${res.status}`);
    return res.json();
  }

  async getUserItemNfts(userAddress: string, params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    tokenId?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiUserItemNft>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/user-item-nfts/${encodeURIComponent(userAddress)}${query}`);
    if (!res.ok) throw new Error(`Failed to fetch user item NFTs: ${res.status}`);
    return res.json();
  }

  async getUserItemNftsMulti(userAddresses: string[]): Promise<EstforApiUserItemNft[]> {
    const res = await fetch(`${this.baseUrl}/user-item-nfts/multi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userAddresses }),
    });
    if (!res.ok) throw new Error(`Failed to fetch multiple user item NFTs: ${res.status}`);
    return res.json();
  }

  async getPlayerSelfMades(playerId: string | number, params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiPlayerSelfMade>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/player-self-mades/${playerId}${query}`);
    if (!res.ok) throw new Error(`Failed to fetch player self-mades: ${res.status}`);
    return res.json();
  }

  async getPlayerSelfMadesMulti(playerIds: (string | number)[]): Promise<EstforApiPlayerSelfMade[]> {
    const res = await fetch(`${this.baseUrl}/player-self-mades/multi`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ playerIds }),
    });
    if (!res.ok) throw new Error(`Failed to fetch multiple player self-mades: ${res.status}`);
    return res.json();
  }

  async getLastFullEquipments(userAddress: string, playerId: string | number, skill: string): Promise<EstforApiLastFullEquipment> {
    const res = await fetch(`${this.baseUrl}/last-full-equipments/${encodeURIComponent(userAddress)}/${playerId}/${encodeURIComponent(skill)}`);
    if (!res.ok) throw new Error(`Failed to fetch last full equipments: ${res.status}`);
    return res.json();
  }

  async getUsers(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiUser>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/users/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch users: ${res.status}`);
    return res.json();
  }

  async getUserByAddress(address: string): Promise<EstforApiUser> {
    const res = await fetch(`${this.baseUrl}/users/${encodeURIComponent(address)}`);
    if (!res.ok) throw new Error(`Failed to fetch user by address: ${res.status}`);
    return res.json();
  }

  async getXpThresholdRewards(): Promise<EstforApiPaginatedResponse<EstforApiXpThresholdReward>> {
    const res = await fetch(`${this.baseUrl}/xp-threshold-rewards/`);
    if (!res.ok) throw new Error(`Failed to fetch XP threshold rewards: ${res.status}`);
    return res.json();
  }

  async getRandomWords(): Promise<EstforApiPaginatedResponse<EstforApiRandomWord>> {
    const res = await fetch(`${this.baseUrl}/random-words/`);
    if (!res.ok) throw new Error(`Failed to fetch random words: ${res.status}`);
    return res.json();
  }

  async getPlayerDayDatas(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    playerId?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiPlayerDayData>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/player-day-datas/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch player day datas: ${res.status}`);
    return res.json();
  }

  async getDonationDayDatas(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiDonationDayData>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/donation-day-datas/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch donation day datas: ${res.status}`);
    return res.json();
  }

  async getClans(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiClan>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/clans/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch clans: ${res.status}`);
    return res.json();
  }

  async getClanById(id: string | number): Promise<EstforApiClan> {
    const res = await fetch(`${this.baseUrl}/clans/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch clan by id: ${res.status}`);
    return res.json();
  }

  async getClanMembers(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    clanId?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiClanMember>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/clan-members/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch clan members: ${res.status}`);
    return res.json();
  }

  async getClanMemberById(id: string | number): Promise<EstforApiClanMember> {
    const res = await fetch(`${this.baseUrl}/clan-members/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch clan member by id: ${res.status}`);
    return res.json();
  }

  async getClanInvites(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
    clanId?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiClanInvite>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/clan-invites/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch clan invites: ${res.status}`);
    return res.json();
  }

  async getClanTiers(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiClanTier>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/clan-tiers/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch clan tiers: ${res.status}`);
    return res.json();
  }

  async getClanTierById(id: string | number): Promise<EstforApiClanTier> {
    const res = await fetch(`${this.baseUrl}/clan-tiers/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch clan tier by id: ${res.status}`);
    return res.json();
  }

  async getClansWithinVaultMmrAttackingRange(id: string | number): Promise<EstforApiClan[]> {
    const res = await fetch(`${this.baseUrl}/clans-within-vault-mmr-attacking-range/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch clans within vault mmr attacking range: ${res.status}`);
    return res.json();
  }

  async getQuests(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiQuest>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/quests/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch quests: ${res.status}`);
    return res.json();
  }

  async getQuestById(id: string | number): Promise<EstforApiQuest> {
    const res = await fetch(`${this.baseUrl}/quests/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch quest by id: ${res.status}`);
    return res.json();
  }

  async getPlayerQuests(params?: {
    playerId?: string;
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiPlayerQuest>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/player-quests/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch player quests: ${res.status}`);
    return res.json();
  }

  async getCoreData(): Promise<EstforApiCoreData> {
    const res = await fetch(`${this.baseUrl}/core-data/`);
    if (!res.ok) throw new Error(`Failed to fetch core data: ${res.status}`);
    return res.json();
  }

  async getDonations(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiDonation>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/donations/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch donations: ${res.status}`);
    return res.json();
  }

  async getLotteries(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiLottery>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/lotteries/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch lotteries: ${res.status}`);
    return res.json();
  }

  async getLotteryById(id: string | number): Promise<EstforApiLottery> {
    const res = await fetch(`${this.baseUrl}/lotteries/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch lottery by id: ${res.status}`);
    return res.json();
  }

  async getRaffleEntries(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiRaffleEntry>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/raffle-entries/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch raffle entries: ${res.status}`);
    return res.json();
  }

  async getRaffleEntryById(id: string | number): Promise<EstforApiRaffleEntry> {
    const res = await fetch(`${this.baseUrl}/raffle-entries/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch raffle entry by id: ${res.status}`);
    return res.json();
  }

  async getFirstToReachMaxSkills(): Promise<EstforApiFirstToReachMaxSkills[]> {
    const res = await fetch(`${this.baseUrl}/first-to-reach-max-skills/`);
    if (!res.ok) throw new Error(`Failed to fetch first to reach max skills: ${res.status}`);
    return res.json();
  }

  async getInstantActions(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiInstantAction>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/instant-actions/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch instant actions: ${res.status}`);
    return res.json();
  }

  async getInstantActionById(id: string | number): Promise<EstforApiInstantAction> {
    const res = await fetch(`${this.baseUrl}/instant-actions/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch instant action by id: ${res.status}`);
    return res.json();
  }

  async getPromotionsById(id: string | number): Promise<EstforApiPromotion> {
    const res = await fetch(`${this.baseUrl}/promotions/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch promotions by id: ${res.status}`);
    return res.json();
  }

  async getPlayerPromotions(params?: {
    playerId?: string;
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiPlayerPromotion>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/player-promotions/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch player promotions: ${res.status}`);
    return res.json();
  }

  async getTerritories(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiTerritory>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/territories/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch territories: ${res.status}`);
    return res.json();
  }

  async getTerritoryById(id: string | number): Promise<EstforApiTerritory> {
    const res = await fetch(`${this.baseUrl}/territories/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch territory by id: ${res.status}`);
    return res.json();
  }

  async getClanBattles(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiClanBattle>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/clan-battles/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch clan battles: ${res.status}`);
    return res.json();
  }

  async getClanBattleById(id: string | number): Promise<EstforApiClanBattle> {
    const res = await fetch(`${this.baseUrl}/clan-battles/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch clan battle by id: ${res.status}`);
    return res.json();
  }

  async getLockedBankVaultClanBattlePairs(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiLockedBankVaultClanBattlePair>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/locked-bank-vault-clan-battle-pairs/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch locked bank vault clan battle pairs: ${res.status}`);
    return res.json();
  }

  async getLockedBankVaultClanBattlePairById(id: string | number): Promise<EstforApiLockedBankVaultClanBattlePair> {
    const res = await fetch(`${this.baseUrl}/locked-bank-vault-clan-battle-pairs/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch locked bank vault clan battle pair by id: ${res.status}`);
    return res.json();
  }

  async getOrders(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiOrder>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/orders/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch orders: ${res.status}`);
    return res.json();
  }

  async getFailedOrders(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiFailedOrder>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/failed-orders/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch failed orders: ${res.status}`);
    return res.json();
  }

  async getPriceLevels(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiPriceLevel>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/price-levels/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch price levels: ${res.status}`);
    return res.json();
  }

  async getTokenInfos(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiTokenInfo>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/token-infos/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch token infos: ${res.status}`);
    return res.json();
  }

  async getSaleHistories(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiSaleHistory>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/sale-histories/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch sale histories: ${res.status}`);
    return res.json();
  }

  async getOrderBookDayDatas(tokenId: string | number, params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiOrderBookDayData>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/order-book-day-datas/${tokenId}${query}`);
    if (!res.ok) throw new Error(`Failed to fetch order book day datas: ${res.status}`);
    return res.json();
  }

  async getInstantVrfActions(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiInstantVrfAction>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/instant-vrf-actions/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch instant vrf actions: ${res.status}`);
    return res.json();
  }

  async getInstantVrfActionById(id: string | number): Promise<EstforApiInstantVrfAction> {
    const res = await fetch(`${this.baseUrl}/instant-vrf-actions/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch instant vrf action by id: ${res.status}`);
    return res.json();
  }

  async getQueuedInstantVrfActionById(id: string | number): Promise<EstforApiQueuedInstantVrfAction> {
    const res = await fetch(`${this.baseUrl}/queued-instant-vrf-actions/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch queued instant vrf action by id: ${res.status}`);
    return res.json();
  }

  async getBasePets(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiBasePet>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/base-pets/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch base pets: ${res.status}`);
    return res.json();
  }

  async getBasePetById(id: string | number): Promise<EstforApiBasePet> {
    const res = await fetch(`${this.baseUrl}/base-pets/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch base pet by id: ${res.status}`);
    return res.json();
  }

  async getPets(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiPet>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/pets/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch pets: ${res.status}`);
    return res.json();
  }

  async getPetById(id: string | number): Promise<EstforApiPet> {
    const res = await fetch(`${this.baseUrl}/pets/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch pet by id: ${res.status}`);
    return res.json();
  }

  async getPassiveActions(params?: {
    numToSkip?: string;
    numToFetch?: string;
    orderBy?: string;
    orderDirection?: string;
  }): Promise<EstforApiPaginatedResponse<EstforApiPassiveAction>> {
    const query = params ?
      '?' + Object.entries(params)
        .filter(([_, v]) => v !== undefined)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
        .join('&')
      : '';
    const res = await fetch(`${this.baseUrl}/passive-actions/${query}`);
    if (!res.ok) throw new Error(`Failed to fetch passive actions: ${res.status}`);
    return res.json();
  }

  async getPassiveActionById(id: string | number): Promise<EstforApiPassiveAction> {
    const res = await fetch(`${this.baseUrl}/passive-actions/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch passive action by id: ${res.status}`);
    return res.json();
  }

  async getQueuedPassiveActionById(id: string | number): Promise<EstforApiQueuedPassiveAction> {
    const res = await fetch(`${this.baseUrl}/queued-passive-actions/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch queued passive action by id: ${res.status}`);
    return res.json();
  }

  async getSubgraphHealth(): Promise<EstforApiSubgraphHealth> {
    const res = await fetch(`${this.baseUrl}/subgraph-health/`);
    if (!res.ok) throw new Error(`Failed to fetch subgraph health: ${res.status}`);
    return res.json();
  }

  // TODO: Implement additional endpoint methods for the Estfor API
  // Add error handling and parameter support as needed
} 