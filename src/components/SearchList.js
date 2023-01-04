import React from "react"
import SearchItem from "./SearchItem";

class SearchList extends React.Component {
  render() {
    return (      
      <ul>
        {this.props.items.map(items => (
          <SearchItem key={items.id} items={items} />
        ))}
      </ul>
    )
  }
}

export default SearchList