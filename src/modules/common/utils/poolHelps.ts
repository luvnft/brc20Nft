export enum AuctionType {
  FixedSwap = 'fixed-swap',
  EnglishAuction = 'english-auction',
  FixedSwap_Timing = 'fixed-swap-timing',
  EnglishAuction_Timing = 'english-auction-timing',
}

export const getPoolKey = (like: { poolId: number; poolType: string }) =>
  [like.poolId, like.poolType].join(',');

export const isFixedSwap = (poolType: AuctionType) => {
  return (
    poolType === AuctionType.FixedSwap ||
    poolType === AuctionType.FixedSwap_Timing
  );
};
