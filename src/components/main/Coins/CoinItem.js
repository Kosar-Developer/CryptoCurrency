import React from 'react'

//style
import CS from'./Coins.module.scss'

const CoinItem = (props) => {
    return (
        <div className={CS.container}>
        <div className={CS.coinRow}>
            <p>{props.coins.market_cap_rank}</p>
            <div className={CS.imgSymbol}>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>${props.coins.current_price.toLocaleString()}</p>
            <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className={CS.hideMobile}>${props.coins.market_cap.toLocaleString()}</p>
        </div>
        </div>
    )
}

export default CoinItem
