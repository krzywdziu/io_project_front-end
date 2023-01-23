import React from "react"

function SearchItem(props) {

    return <div className="item-container"> 
      <div className="item-element">
      <img src={props.items.imageUrl} 
      alt="Not found"/>
      </div>
      <div className="item-element">
      {props.items.name} <br></br><br></br>
      Cena: {props.items.price} {props.items.currency}<br></br>
      Sklep: {props.items.shopName} 
      </div>
      <div className="item-element">
      <input type="button" 
      onClick={() => window.location.href = props.items.ceneoProductUrl} 
      value="Strona Sklepu"></input>
      <input type="button" value="Dodaj do koszyka">
      </input>
      </div> 
    </div>
  }

export default SearchItem