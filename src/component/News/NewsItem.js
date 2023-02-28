import React from 'react'

export default function NewsItem (props){
  let{imageurl,title,description} = props;
  return (
    <div  className="news" >
      <div className="card" style={{width: '15rem'}}>
  <img src={imageurl} className="card-img-top" alt="..." style={{width: '15rem'}} />
  <div className="card-body">
    <h5 className="card-title" >{title}</h5>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Read More</a>
  </div>
</div>
    </div>
  )
}