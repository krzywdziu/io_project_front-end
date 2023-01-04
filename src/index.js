import React from "react"
import ReactDOM from "react-dom"

//component file
import SearchContainer from "./components/SearchContainer"

//stylesheet
import "./index.css"


ReactDOM.render(
    <React.StrictMode>
      <SearchContainer />
    </React.StrictMode>,
    document.getElementById("root")
  )