import React from "react";


const Card = (props) => {
    return <div className="card rounded-2 mb-3 text-center">
    <img src={props.image} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.text}</p>
    </div>
    <div className="card-footer">
      {props.button}
    </div>
  </div>
}
export default Card