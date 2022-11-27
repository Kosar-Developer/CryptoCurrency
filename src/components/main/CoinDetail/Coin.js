import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import DOMPurify from 'dompurify'

import CS from './Coin.module.scss'

const Coin = () => {

    const params = useParams()
    const [coin, setCoin] = useState({})

    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    return (
        <div>
            <div className={CS.coincontainer}>
                <div className={CS.content}>
                    <h1>{coin.name}</h1>
                </div>
                <div className={CS.content}>
                    <div className={CS.rank}>
                        <span className={CS.rankbtn}>Rank # {coin.market_cap_rank}</span>
                    </div>
                    <div className={CS.info}>
                        <div className={CS.coinheading}>
                            {coin.image ? <img src={coin.image.small} alt='' /> : null}
                            <p>{coin.name}</p>
                            {coin.symbol ? <p>{coin.symbol.toUpperCase()}/USD</p> : null}
                        </div>
                        <div className={CS.coinprice}>
                            {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
                        </div>
                    </div>
                </div>
                <div className={CS.content}>
                    <div className={CS.about}>
                        <h3>About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Coin
