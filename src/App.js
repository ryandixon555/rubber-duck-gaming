import React, { Component } from "react"
import rubberDuckImg from "./rubber-duck.jpg"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={rubberDuckImg} alt='rubber-duck'/>
          <p>
            Rubber Duck Gaming
          </p>
          <p>
            Coming Soon
          </p>
       </div>
    )
  }
}

export default App
