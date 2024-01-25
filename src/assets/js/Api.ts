export const RequestApi = {
  login: {
    login: '/v1/walletLogin',
    emailRegister: '/v1/emailRegister',
    emailLogin: '/v1/emailLogin',
    getGoogleOauthCodeUrl: '/v1/oauth/getGoogleOauthCodeUrl',
    googleOauthLogin: '/v1/oauth/googleOauthLogin',
  },
  search: {
    searchPairByType: '/v1/data/SearchPairByType',
    searchPairByTokenAddress: '/v1/data/searchPairByTokenAddress',
    pairInfos: '/v1/data/pairInfos',
    pairTxList: '/v1/data/pairTxList',
    searchPairTxListByAddress: '/v1/data/searchPairTxListByAddress',
    searchTxListByAddress: '/v1/data/searchTxListByAddress',
    searchTxListByAddressAndZone: '/v1/data/searchTxListByAddressAndZone',
  },
  trade: {
    checkRisk: '/v1/token/checkRisk',
    buyTokenFast: '/v1/swap/buyTokenFast', // 市价单ETH购买
    sellTokenFast: '/v1/swap/sellTokenFast', // 市价单卖出token为ETH
    addressHodl: '/v1/addressHodl',
    buyTokenLimit: '/v1/swap/buyTokenLimit', // 限价单购买
    sellTokenLimit: '/v1/swap/sellTokenLimit', // 限价单卖出
    getTokenLimitList: '/v1/swap/getTokenLimitList',
    getTokenLikeList: '/v1/account/getTokenLikeList',
    addTokenLike: '/v1/account/addTokenLike',
    deleteTokenLike: '/v1/account/deleteTokenLike',
    cancelTokenLimit: '/v1/swap/cancelTokenLimit',
    setTokenFastTrade: '/v1/setTokenFastTrade',
    get24hTokenData: '/v1/data/get24hTokenData',
  },
  home: {
    smartRank: '/v1/smart/rank',
    tokenHot: '/v1/token/hot',
    tokenPriceChangeTopList: '/v1/data/tokenPriceChangeTopList',
    kolRecommendationList: '/v1/data/kolRecommendationList',
  },
  user: {
    accountInfo: '/v1/account/info',
    accountQrcode: '/v1/account/qrcode',
    bind2FA: '/v1/account/bind2FA',
    registerCode: '/v1/registerCode',
    getEmailCode: '/v1/account/getEmailCode',
    addNewWallet: '/v1/account/addNewWallet',
    deleteWallet: '/v1/account/deleteWallet',
    exportWallet: '/v1/account/exportWallet',
    addMonitorSmartWallet: '/v1/account/addMonitorSmartWallet',
    deleteMonitorSmartWallet: '/v1/account/deleteMonitorSmartWallet',
    addressHodlHistory: '/v1/addressHodlHistory',
    updateAccountPassword: '/v1/account/updateAccountPassword',
  },


  tokens: {
    tokenList: '/token/list',
  },
  orders: {
    orderBrc20Assets: '/order/brc20/assets',
    orderConfirmListing: '/order/confirm/listing',
    orderCreateListing: '/order/create/listing',
    orderList: '/order/list',
    orderMyList: '/order/my/list',
    orderTypeList: '/order/type/list',
    orderTypeSearch: '/order/type/search',
  },
  purchase: {
    confirmOrder: '/purchase/confirm/order', // 确认订单接口
    createOrder: '/purchase/create/order', // 创建订单接口
    prepare: '/purchase/prepare', // 预购买接口
  },
  twitter: {
    twitterAuth: '/twitter/auth',
    twitterVerifyFollow: '/twitter/verify/follow',
    twitterVerifyLike: '/twitter/verify/like',
    twitterVerifyRetwitter: '/twitter/verify/retwitter',
  },
  brcUser: {
    userInfo: '/User/userInfo',
    auth:'/auth'
  },
  telegram: {
    tgAuth: '/tg/auth',
    tgVerifyJoin: '/tg/verify/join',
  },


};
