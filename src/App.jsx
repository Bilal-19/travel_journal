import React from "react"
import Header from "./header"
import Card from "./card"
import data from "./data"
import './App.css'
// import ReactDOM from "react-dom/client"

function App() {
  const cards = data.map(item => {
    return (
      <Card key={item.id} {...item}/>
    )
  })
  return (
    <div className="">
      <Header />
      {cards}
    </div>
  )
}

export default App
