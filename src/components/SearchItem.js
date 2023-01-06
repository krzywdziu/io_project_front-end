import React from "react"

function SearchItem(props) {

    return <div className="item-container"> 
      <div className="item-element">
      <img src={props.items.img} 
      alt="Not found"/>
      </div>
      <div className="item-element">
      {props.items.title} <br></br>
      Cena: {props.items.price} <br></br>
      Sklep: {props.items.store} 
      </div>
      <div className="item-element">
      <input type="button" 
      onClick={() => window.location.href = props.items.site} 
      value="Strona Sklepu"></input>
      <input type="button" value="Dodaj do koszyka">
      </input>
      </div> 
    </div>
  }

export default SearchItem