import React, { Component } from "react"
import axios from 'axios';

class Login extends Component {
    
    state = {
        title: ""
      };

      handleLoginSubmit = e => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value); 
        
        var data = {
            username: e.target[0].value,
            password: e.target[1].value
        }

        var config = {
            method: 'post',
            url: '//localhost:8080/login',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
  
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert(JSON.stringify(response.data))
          })
          .catch(function (error) {
            console.log(error);
             var err1 = JSON.stringify(error.response.data.errors)
             var err2 = JSON.stringify(error.response.data.message)
             if (err1 === undefined){
              alert(err2)
             }
             else{
              alert(err1)
             }
          });

      };


      handleRegisterSubmit = e => {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target[1].value);
        console.log(e.target[2].value);
        console.log(e.target[3].value);    

        var data = {
            username: e.target[0].value,
            password: e.target[1].value,
            passwordConfirmation: e.target[2].value,
            email: e.target[3].value
        }

        var config = {
            method: 'post',
            url: '//localhost:8080/register',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
  
          axios(config)
          .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert(JSON.stringify(response.data))
          })
          .catch(function (error) {
            console.log(error);
            alert(error.response.data.errors)
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
          Zaloguj się
        </h1>
        <div
        style={{
          textAlign: "center"
      }}
        >
          <form onSubmit={this.handleLoginSubmit}>
              <label>
              <input
                  placeholder="Login"
                  type="text"
                  style={{
                      padding: "4px",
                      height: "40px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "15px"
                  }}
              />
              </label>
              <br />
              <label>
              <input
                  placeholder="Hasło"
                  type="password"
                  style={{
                      padding: "4px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "15px",
                      height: "40px"
                  }}
              />
              </label>
              <br />
              <br />
              <input
              type="submit"
              value="Zaloguj się"
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
              />
          </form>
          <br/>
          <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "2rem",
          lineHeight: "1em",
          color: "#F59837",
          textAlign: "center",
        }}
        >
          Zarejestruj się
        </h1>
        <form onSubmit={this.handleRegisterSubmit}>
              <label>
              <input
                  placeholder="Login"
                  type="text"
                  style={{
                      padding: "4px",
                      height: "40px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "15px"
                  }}
              />
              </label>
              <br />
              <label>
              <input
                  placeholder="Hasło"
                  type="password"
                  style={{
                      padding: "4px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "15px",
                      height: "40px"
                  }}
              />
              </label>
              <br />
              <label>
              <input
                  placeholder="Powtórz Hasło"
                  type="password"
                  style={{
                      padding: "4px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "15px",
                      height: "40px"
                  }}
              />
              </label>
              <br />
              <label>
              <input
                  placeholder="Mail"
                  type="email"
                  style={{
                      padding: "4px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      fontSize: "15px",
                      height: "40px"
                  }}
              />
              </label>
              <br />
              <br />
              <input
              type="submit"
              value="Stwórz konto"
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
              />
          </form>
        </div>
      </div>
    )
  }
}
export default Login