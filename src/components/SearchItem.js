import React from "react"

function SearchItem(props) {

    return <li> <img src={props.items.img} alt="Not found"/>{props.items.title} Cena: {props.items.price} Sklep: {props.items.store}  <input type="button" onClick={() => window.location.href = props.items.site} value="Strona Sklepu"></input><input type="button" value="Dodaj do koszyka"></input></li>
  }

export default SearchItem