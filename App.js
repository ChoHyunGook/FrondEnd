import React from "react";
import{BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import Home from "./hello/Home";
import Bmi from "./hello/Bmi";
import Calc from "./hello/Calc";
import Change from "./hello/Change";
import Circle from "./hello/Circle";
import Grade from "./hello/Grade";
import Login from "./hello/Login";
import Week from "./hello/Week";


const App = () =>{
return (
        <div>
          <Router>
            <Routes>
              <Route expected path="/" element={<Home/>}/>
              <Route path="/bmi" element={<Bmi/>}/>
              <Route path="/calc" element={<Calc/>}/>
              <Route path="/change" element={<Change/>}/>
              <Route path="/circle" element={<Circle/>}/>
              <Route path="/grade" element={<Grade/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/week" element={<Week/>}/>
            </Routes>
          </Router>
        </div>
      )
}

export default App;