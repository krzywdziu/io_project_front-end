import React from "react"
import SearchItem from "./SearchItem";

class SearchList extends React.Component {
  render() {
    return (      
      <div>
        <div id="item-sort">
        Sortowanie:

        <select name="sortSelect" id="sortSelect" onChange={this.props.changeSort}>
          <option value="LowHigh">Od najniższej ceny</option>
          <option value="HighLow">Od najwyższej ceny</option>
        </select>

        </div>
        {this.props.items.map(items => (
          <SearchItem key={items.id} items={items} />
        ))}
      </div>
    )
  }
}

export default SearchList