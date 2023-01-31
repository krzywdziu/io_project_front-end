import React, { Component } from "react"
import axios from 'axios';

class HistorySearch extends Component {
    
    state = {
        
      };

      handleHistoryCSV = e => {
        var data = '';

        var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:  '//10.160.73.86:8080/search/history/export?extension=csv',
        headers: { },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
      };

      handleHistoryPDF= e => {
        var data = '';

        var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url:  '//10.160.73.86:8080/search/history/export?extension=pdf',
        headers: { },
        data : data
        };

        axios(config)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
        console.log(error);
        });
      };
      
  
      render() {
    return (
        <div>
        <h1
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#F59837",
          textAlign: "center",
        }}
        >
          Historia Wyszukiwania
        </h1>
        <button
        style={{
            backgroundColor: "#d9d13d",
            border: "none",
            color: "white",
            padding: "10px",
            textAlign: "center",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
            width: "194px"
        }}
         onClick={this.handleHistoryCSV}>Eksport wyszukiwania CSV</button>
        <button 
        style={{
            backgroundColor: "#d9d13d",
            border: "none",
            color: "white",
            padding: "10px",
            textAlign: "center",
            textDecoration: "none",
            borderRadius: "5px",
            fontSize: "16px",
            width: "194px"
        }}
         onClick={this.handleHistoryPDF}>Eksport wyszukiwania PDF</button>
      </div>
    )
  }
}
export default HistorySearch
