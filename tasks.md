# Estfor API Wrapper Implementation Tasks

## Endpoints

### Actions
- [x] getActions (GET /actions/)
- [x] getActionById (GET /actions/{id})
- [x] getActionChoices (GET /action-choices/{actionId})

### Activities
- [x] getActivities (GET /activities/)
- [x] getActivitiesByUser (GET /activities/{userAddress})

### Avatars
- [x] getAvatars (GET /avatars/)

### Items
- [x] getItems (GET /items/)
- [x] getItemById (GET /items/{id})

### Players
- [x] getPlayers (GET /players/)
- [x] getPlayerById (GET /players/{id})
- [x] getPlayersMulti (POST /players/multi)

### Queued Actions
- [x] getQueuedActions (GET /queued-actions/)
- [x] getQueuedActionsMulti (POST /queued-actions/multi)

### Shop Items
- [x] getShopItems (GET /shop-items/)
- [x] getShopItemById (GET /shop-items/{id})

### User Item NFTs
- [x] getUserItemNfts (GET /user-item-nfts/{userAddress})
- [x] getUserItemNftsMulti (POST /user-item-nfts/multi)

### Player Self-Mades
- [x] getPlayerSelfMades (GET /player-self-mades/{playerId})
- [x] getPlayerSelfMadesMulti (POST /player-self-mades/multi)
- [x] getLastFullEquipments (GET /last-full-equipments/{userAddress}/{playerId}/{skill})

### Users
- [x] getUsers (GET /users/)
- [x] getUserByAddress (GET /users/{address})
- [x] getXpThresholdRewards (GET /xp-threshold-rewards/)
- [x] getRandomWords (GET /random-words/)

### Player Day Data
- [x] getPlayerDayDatas (GET /player-day-datas/)

### Donation Day Data
- [x] getDonationDayDatas (GET /donation-day-datas/)

### Clans
- [x] getClans (GET /clans/)
- [x] getClanById (GET /clans/{id})
- [x] getClanMembers (GET /clan-members/)
- [x] getClanMemberById (GET /clan-members/{id})
- [x] getClanInvites (GET /clan-invites/)
- [x] getClanTiers (GET /clan-tiers/)
- [x] getClanTierById (GET /clan-tiers/{id})
- [x] getClansWithinVaultMmrAttackingRange (GET /clans-within-vault-mmr-attacking-range/{id})

### Quests
- [x] getQuests (GET /quests/)
- [x] getQuestById (GET /quests/{id})
- [x] getPlayerQuests (GET /player-quests/)

### Core Data
- [x] getCoreData (GET /core-data/)

### Donations
- [x] getDonations (GET /donations/)

### Lotteries
- [x] getLotteries (GET /lotteries/)
- [x] getLotteryById (GET /lotteries/{id})

### Raffle Entries
- [x] getRaffleEntries (GET /raffle-entries/)
- [x] getRaffleEntryById (GET /raffle-entries/{id})

### First to Reach Max Skills
- [x] getFirstToReachMaxSkills (GET /first-to-reach-max-skills/)

### Instant Actions
- [x] getInstantActions (GET /instant-actions/)
- [x] getInstantActionById (GET /instant-actions/{id})

### Promotions
- [x] getPromotionsById (GET /promotions/{id})
- [x] getPlayerPromotions (GET /player-promotions/)

### Territories
- [x] getTerritories (GET /territories/)
- [x] getTerritoryById (GET /territories/{id})

### Clan Battles
- [x] getClanBattles (GET /clan-battles/)
- [x] getClanBattleById (GET /clan-battles/{id})

### Locked Bank Vault Clan Battle Pairs
- [x] getLockedBankVaultClanBattlePairs (GET /locked-bank-vault-clan-battle-pairs/)
- [x] getLockedBankVaultClanBattlePairById (GET /locked-bank-vault-clan-battle-pairs/{id})

### Orders
- [x] getOrders (GET /orders/)

### Failed Orders
- [x] getFailedOrders (GET /failed-orders/)

### Price Levels
- [x] getPriceLevels (GET /price-levels/)

### Token Infos
- [x] getTokenInfos (GET /token-infos/)

### Sale Histories
- [x] getSaleHistories (GET /sale-histories/)

### Order Book Day Data
- [x] getOrderBookDayDatas (GET /order-book-day-datas/{tokenId})

### Instant VRF Actions
- [x] getInstantVrfActions (GET /instant-vrf-actions/)
- [x] getInstantVrfActionById (GET /instant-vrf-actions/{id})
- [x] getQueuedInstantVrfActionById (GET /queued-instant-vrf-actions/{id})

### Base Pets
- [x] getBasePets (GET /base-pets/)
- [x] getBasePetById (GET /base-pets/{id})

### Pets
- [x] getPets (GET /pets/)
- [x] getPetById (GET /pets/{id})

### Passive Actions
- [x] getPassiveActions (GET /passive-actions/)
- [x] getPassiveActionById (GET /passive-actions/{id})
- [x] getQueuedPassiveActionById (GET /queued-passive-actions/{id})

### Subgraph Health
- [x] getSubgraphHealth (GET /subgraph-health/) 