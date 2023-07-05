import Navbar from "./component/Navbar.js";
import Home from "./component/Home.js";
import About from "./component/About.js";
import "./main.css";
import AddNotes from "./component/addNotes.js";
import Notesate from "./component/context/Notes/Notesate.js";
import Alert from "./component/Alert.js";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Notesate>
    <Router>
    <Navbar/>
    <Alert alert={alert}/>
    <Routes>
    <Route path='/' element={<Home key="Home"/>} /> 
    <Route path='/about' element={<About key="About"/>} /> 
    <Route path='/addnotes' element={<AddNotes key="addnotes"/>} /> 
    </Routes>
  </Router>

  </Notesate>
    </div>
  );
}

export default App;
