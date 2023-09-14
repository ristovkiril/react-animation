import React, { useState } from 'react'
import './App.css'
import {Navigation} from "./components/Navigation.jsx";
import {Jumbatron} from "./components/Jumbatron.jsx";
import {Product} from "./components/Product.jsx";
import {Gun} from "./components/Gun.jsx";
import {WebgiViewer} from "./components/WebgiViewer.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Jumbatron />
      <Product />
      <Gun />
      <WebgiViewer />
    </>
  )
}

export default App
