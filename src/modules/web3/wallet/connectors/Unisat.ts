import { ConnectorNotFoundError } from '../errors'
import { BtcConnectorName, Network } from '../types'
import { AccountsChangedHandler, Connector, ConnectorOptions, DisconnectHandler, NetworkChangedHandler } from './types'

export class UnisatConnector implements Connector {
  name: BtcConnectorName
  onAccountsChanged?: AccountsChangedHandler
  onNetworkChanged?: NetworkChangedHandler
  onDisconnect?: DisconnectHandler

  constructor(options?: ConnectorOptions) {
    this.name = 'Unisat'
    this.onAccountsChanged = options?.onAccountsChanged
    this.onNetworkChanged = options?.onNetworkChanged
    this.onDisconnect = options?.onDisconnect
  }

  getProvider() {
    if (typeof window === 'undefined') return
    // @ts-ignore
    if (typeof window['unisat'] === 'undefined') {
      throw new ConnectorNotFoundError()
    }

    // @ts-ignore
    return window['unisat']
  }



  async connect() {
    try {
      const provider = this.getProvider()
      if (provider.on) {
        provider.on('accountsChanged', async (accounts: string[]) => {
          // console.log('accountsChanged', accounts);
          if (!!accounts && accounts.length > 0) {
            const publicKey: string = await provider.getPublicKey()
            // @ts-ignore
            this.onAccountsChanged(accounts[0], publicKey)
          } else {
            provider.removeAllListeners()
            // @ts-ignore
            this.onDisconnect()
          }
        })
        provider.on('networkChanged', (network: Network) => {
          // console.log('network', network);
          // @ts-ignore
          this.onNetworkChanged(network)
        })
      }

      const accounts: string[] = await provider.requestAccounts()
      const publicKey: string = await provider.getPublicKey()
      const network: Network = await provider.getNetwork()

      return { address: accounts[0], publicKey, network }
    } catch (error) {
      // console.log('connnector error: ', error)
      throw error
    }
  }

  // Unisat does not provide a disconnect method at this time
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect(): void {}

  signMessage: (message?: string) => Promise<string> = (message) => {
    const provider = this.getProvider()
    return provider.signMessage(message) as Promise<string>
  }

}
