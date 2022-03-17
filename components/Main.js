import React from "react"

export default function Main(props){
    console.log(props)
    return (
        
<div className="item">
        
  <img src={props.imageUrl} width="200px"/>
    <div className="info">
      <div className="details">
        <p>📍</p>
        <p className="location">{props.location.toUpperCase()}</p>
        <a href={props.googleMapsUrl}>View on Google Maps</a>
      </div>
        
        <h1>{props.title}</h1>
        <h3>{props.startDate} {props.endDate}</h3>
        <p className="description">{props.description}</p>
    </div>
</div>
    )
}