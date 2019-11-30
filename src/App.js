import React from 'react'
import ListCards from './components/ListCards'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App deep-orange lighten-5">
      <div className="row">
        <div className="col s12 pink">
          <div className="row header">
            <div className="col s2 offset-s1 white box">
              <div className="container">
                <h1>HappY</h1>
              </div>
            </div>
            <div className="col s2 offset-s2 white box">
              <h1>BiRthDaY</h1>
            </div>
            <div className="col s2 offset-s2 white box">
              <div className="container">
                <h1>Kars</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListCards />
      <Footer />
    </div>
  )
}

export default App
