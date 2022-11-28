import React, { useState } from 'react';
import Modal from './components/Modal';
import MintNFT from './components/nft/MintNFT';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

function App() {
  const [nftMint, setNftMint] = useState(false);

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.goerli, chain.arbitrum],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
      <div className="container ">
      <h1 className="text-center font-bold pt-2">MnF-NFTs</h1>
      <div className="p-6 flex justify-center">
        <Modal close={() => setNftMint(false)} show={nftMint} title='MINT'>
          <MintNFT close={() => setNftMint(false)} />
        </Modal>
        <div className='flex w-full justify-between'>
        <div className='btn'>
          <button onClick={() => setNftMint(true)} className='btn btn-success p-2 px-4 font-semibold'>MINT MnF</button>
        </div>
        <div className='mt-2'>
          <ConnectButton/>
        </div>
        </div>
      </div>
      </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
