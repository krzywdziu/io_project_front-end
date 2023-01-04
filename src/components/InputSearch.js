import React, { Component } from "react"

class InputSearch extends Component {
    
    state = {
        title: ""
      };

      onChange = e => {
        this.setState({
            title: e.target.value
          });
      };

      handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.title);
      };
  
      render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Search Items..." value={this.state.title} onChange={this.onChange} />
        <button>Search</button>
      </form>
    )
  }
}
export default InputSearch