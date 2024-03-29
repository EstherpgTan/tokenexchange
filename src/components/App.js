
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import config from '../config.json';

import {
  loadProvider, 
  loadNetwork, 
  loadAccount,
  loadTokens,
  loadExchange

} from '../store/interactions';

function App() {
  const dispatch = useDispatch()

  const loadBlockchainData = async () => {
    await loadAccount(provider, dispatch)

    // Connect Ethers to blockchain
    const provider = loadProvider(dispatch)

    // Fetch current network's chainId (i.e. hardhat: 31337, kovan: 42)
    const chainId = await loadNetwork(provider, dispatch)

    // Fetch current account & balance from Metamask
    await loadAccount(provider, dispatch)

    // Load token Smart Contracts
    const DApp = config[chainId].DApp
    const mETH = config[chainId].mETH
    await loadTokens(provider, [DApp.address, mETH.address], dispatch)
    
    // Load Exchange Smart Contract
    const exchangeConfig = config[chainId].exchange
    await loadExchange(provider, exchangeConfig.address, dispatch)
  }

  useEffect(() => {
    loadBlockchainData()
  })

  return (
    <div>

      {/* Navbar */}

      <main className='exchange grid'>
        <section className='exchange__section--left grid'>

          {/* Markets */}

          {/* Balance */}

          {/* Order */}

        </section>
        <section className='exchange__section--right grid'>

          {/* PriceChart */}

          {/* Transactions */}

          {/* Trades */}

          {/* OrderBook */}

        </section>
      </main>

      {/* Alert */}

    </div>
  );
}

export default App;
