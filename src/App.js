import "./main.css";
import { useState } from "react";
import Notesate from "./component/context/Notes/Notesate.js";
import Login from "./component/userLogin/login.js"
import Alert from "./component/Alert.js";
import Signup from "./component/userLogin/Signup.js"
import Navbar from "./component/Navbar.js";
import AddNotes from "./component/addNotes.js";
import Notes from "./component/notes.js";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1400);
  }

  return (
  <Notesate>
    <div className="App">
    <Router>
    <Navbar showAlert={showAlert}/>
    <Alert alert={alert}/>
    <Routes>
    <Route path='/' element={<Login key="login"/>} /> 
    <Route path='/notes' element={<Notes key="notes"/>} /> 
    <Route path="/signup" element={<Signup key="signup" showAlert={showAlert}/>} /> 
    <Route path='/addnotes' element={<AddNotes key="addnotes"/>} />
    </Routes>
  </Router>

    </div>
  </Notesate>
  );
}

export default App;
