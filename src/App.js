import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/main/Coins/Coins'
import Coin from './components/main/CoinDetail/Coin'
import Navbar from './components/header/Navbar'
import Header from './components/header/header'


function App() {
  return (
    <>
      <Navbar />
      <Header/>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
