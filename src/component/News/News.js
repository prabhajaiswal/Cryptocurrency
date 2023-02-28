import {React,useState,useEffect} from 'react';
import './News.css'
import NewsItem from './NewsItem';
function News() {
  
const [articles,setArticles] = useState([]);
useEffect( () => {
fetchMoreData();
}, [])

const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2023-01-22&sortBy=publishedAt&apiKey=0b6c955b672b40a99b8be20e6c61398a&pageSize=5
    `;
    
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    console.log(parsedData)
  };

  return (

    <div>
      
      <div className="news">
      
        {articles.map((ele,i)=>{
            return( 
            <div className="item" key={i} >
           <NewsItem key={i} title={ele.title.slice(0,30)} description={ele.description.slice(0,60)} imageurl={ele.urlToImage}/>
            </div>)
        })}
      </div>
    </div>
  )
}

export default News