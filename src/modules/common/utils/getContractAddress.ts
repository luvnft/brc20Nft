
export const getMarketAddress = (chainID: any) => {
    switch (chainID) {
        case 5:
            return process.env.REACT_APP_MARKET_CONTRACT as string;
        case 1:
            return process.env.REACT_APP_MARKET_ETHEREUM_CONTRACT as string;
        default:
            return '';
    }
};
