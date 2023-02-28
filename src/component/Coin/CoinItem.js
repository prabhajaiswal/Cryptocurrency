import React from 'react';
 import './CoinItem.css'
const CoinItem = ({names,image,symbol,lastprice,percentage,markcap}) => {
    
  return (
    <div>
        <div className="container">
            <div className="row">
          <div className="co">
       <h1>{names}</h1>
        <img src={image} alt=""/>
       <p className="coin-symbol">{symbol}</p>
       <span className="coin-last">{lastprice}</span>
       <p className="per">{percentage}</p>
       <p className="market">Market: {markcap}</p>
       </div>
       </div>
        </div>
      
    </div>
  )
}

export default CoinItem;
