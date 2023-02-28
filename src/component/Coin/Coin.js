import {React,useEffect,useState} from 'react';
import axios from 'axios';
import CoinItem from './CoinItem';
 
const Coin = () => {

   const [coins,setCoins] =useState([]) 
   useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((res) => {
      console.log(res.data);
      setCoins(res.data);
    });
  }, []);

  return (
    <div>
      <div className="coin-app">
      {coins.map((coin,i)=>{
        return(
          <div className="coin" key={i}>
             <CoinItem key={i} names={coin.name}image={coin.image} symbol={coin.symbol} lastprice={coin.current_price} percentage={coin.price_change_percentage_24hr} markcap={coin.market_cap}/>
          </div>
         
        )} 
        )};
      
      </div>
      
    </div>
  )
}

export default Coin;
