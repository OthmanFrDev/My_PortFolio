import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter, Switch, Route ,Redirect} from "react-router-dom"
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="sections">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/home" component={Home} />
            <Redirect to='/home' />
          </Switch>
        </div>
      </BrowserRouter>
    </div>

  )


}

export default App;
