import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import React, { useState } from 'react';
import { ethers } from 'ethers';
import TokenAddress from './json/BasicToken-address.json'
import TokenAbi from './json/BasicToken.json'

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


function App() {

  const [loading, setLoading] = useState(true)
  const [account, setAccount] = useState(null)
  const [token, setToken] = useState({})

  // MetaMask Login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(accounts[0]);
    // Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    // Set signer
    const signer = provider.getSigner()
    loadContracts(signer)
  }
  const loadContracts = async (signer) => {
    // Get deployed copies of contracts
    const token = new ethers.Contract(TokenAddress.address, TokenAbi.abi, signer);
    setToken(token);
    setLoading(false);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Navigation web3Handler={web3Handler} account={account} />
        </>
        <div>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>

              <p className='mx-3 my-0'>Please connect your wallet...</p>
            </div>
          ) : (
            <Routes>
              <Route path="/" element={
                <Home token={token} account={account} />
              } />
              <Route path="/about" element={
                <About token={token}  />
              } />
              <Route path="/" element={
                <Contact token={token}  />
              } />

            </Routes>
          )}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
