import { Box, Typography } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import { Section } from "modules/uiKit/Section"
import { clearLocalStorage } from '../common/utils/localStorage';

interface IChainConfig {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: number;
    };
    rpcUrls: string[];
    blockExplorerUrls: string[];
}
export const addchain = async (chainConfig: IChainConfig) => {
    if (!window?.ethereum) {
        return alert('error: not find ethereum')
    }
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: chainConfig.chainId }],
        });
        return true
    } catch (switchError: any) {
        // alert(JSON.stringify(switchError))
        // if (switchError?.code === 4902 || switchError?.code === -32603) {
        try {
            await window?.ethereum?.request({
                id: 1, jsonrpc: "2.0", method: 'wallet_addEthereumChain', params: [
                    chainConfig
                ]
            })
            return true
        } catch (error) {
            alert(JSON.stringify(error))
            return false
        }
    }
}
export const SwitchNetwork = () => {
    const onAddBsc = () => {
        var chainConfig = { "chainId": "0x38", "chainName": "Binance Smart Chain Mainnet", "nativeCurrency": { "name": "Binance", "symbol": "BNB", "decimals": 18 }, "rpcUrls": ["https://bsc-dataseed4.binance.org"], "blockExplorerUrls": ["https://bscscan.com/"] }
        addchain(chainConfig)
    }
    const onAddMatic = () => {
        var chainConfig = { "chainId": "0x89", "chainName": "Polygon Mainnet", "nativeCurrency": { "name": "Matic", "symbol": "MATIC", "decimals": 18 }, "rpcUrls": ["https://polygon-rpc.com/"], "blockExplorerUrls": ["https://polygonscan.com/"] }
        addchain(chainConfig)
    }
    return <>
        <Section>
            <Box ml={2} mb={2}>
                <Typography>Switch NetWork</Typography>
            </Box>
            <Box ml={2} mb={1}>
                <Button onClick={onAddBsc}>Add BSC</Button>
            </Box>
            <Box ml={2}>
                <Button onClick={onAddMatic}>Add Matic</Button>
            </Box>
            <Box ml={2} mt={5}>
                <Typography onClick={() => {
                    // window.localStorage.clear();
                    clearLocalStorage();
                    window.sessionStorage.clear();
                    window.location.reload();
                }}>Clear LocalStorage</Typography>
            </Box>
        </Section>
    </>
}
