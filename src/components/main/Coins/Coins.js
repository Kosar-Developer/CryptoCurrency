import React, { useEffect, useState } from 'react'
import CoinItem from './CoinItem'
import Coin from '../CoinDetail/Coin'
import { Link } from 'react-router-dom'
import axios from 'axios'

//style
import CS from'./Coins.module.scss'
import { api } from '../../../service/api'

const Coins = () => {
      const [coins, setCoins] = useState([]);
      const [search, setSearch] = useState("");

      const filterData = coins.slice(0,21);

      const searchHandler =(e)=>{
        setSearch(e.target.value);
      }

      const searchCoins = filterData.filter((coin) =>
        coin.symbol.includes(search)
      );

      const url = api;
       
      useEffect(() => {
        axios
          .get(url)
          .then((response) => {
            setCoins(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return (
      <div className={CS.container}>
        <input
          className={CS.input}
          type="text"
          placeholder="search"
          value={search}
          onChange={searchHandler}
        />
        <div>
          <div className={CS.heading}>
            <p>#</p>
            <p className={CS.coinName}>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className={CS.hideMobile}>Volume</p>
          </div>

          {searchCoins.map((coins) => {
            return (
              <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                <CoinItem coins={coins} />
              </Link>
            );
          })}
        </div>
      </div>
    );
}

export default Coins
