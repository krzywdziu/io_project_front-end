import React, { Component } from "react"
import axios from 'axios';

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
        this.searchItems()     
      };

      updateItems(data){
        console.log("NEW DATA...")
        console.log(data)
        this.props.handleItems(data)
      };

      async searchItems() {

      var data = this.state.title;
      

      let element = document.getElementById("loading_img");
      element.removeAttribute("hidden")
      
     

      var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: '//10.160.73.86:8080/search?query=' + data,
        headers: { },
        data : ""
      };

        var that = this

        axios(config)
        .then(function (response) {
          //console.log(JSON.stringify(response.data));
          that.updateItems(response.data);
          element.setAttribute("hidden", "hidden")
        })
        .catch(function (error) {
          console.log(error);
          alert("Problem wyszukiwania")
          element.setAttribute("hidden", "hidden")
        });

       

       /* 
        console.log(item)
      axios.post('http://localhost:8080/search', {
         body: JSON.parse("Water")
      })
      .then((response) => {
         console.log(response)
      })
      .catch((error) => {
        console.log(error)
      });*/

/*
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.parse("{nivea}")
      };
      fetch('http://localhost:8080/search', requestOptions)
          .then(async response => {
              const isJson = response.headers.get('content-type')?.includes('application/json');
              const data = isJson && await response.json();
  
              // check for error response
              if (!response.ok) {
                  // get error message from body or default to response status
                  const error = (data && data.message) || response.status;
                  return Promise.reject(error);
              }
          })
          .catch(error => {
              console.error(error);
          });
*/

/*

        console.log(item)
        await fetch(`http://localhost:8080/login` , {
            method: 'POST',
            //mode: 'no-cors',
            //referrerPolicy:'unsafe-url',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: 
            {
              "username": "user123",
              "password": "!QAZ2wsx"
            },
        }).then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })*/
      }
  
      render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
        className="input-text" 
        type="text" 
        placeholder="Search Items..." 
        value={this.state.title} 
        onChange={this.onChange} 
        />
        <button className="input-submit">Wyszukaj</button>
      </form>
      <img src="https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif" alt="loading" id="loading_img" hidden/>
    </div>
    )
  }
}
export default InputSearch
