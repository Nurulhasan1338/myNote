import './App.css';
import Navbar from "./component/navbar.js";
import Home from "./component/Home.js";
import Alert from "./component/Alert.js"
import About from "./component/About.js";
import NoteState from './component/context/Notes/Notesate';
import { BrowserRouter, Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
              <Navbar/>
        <Alert/>
              <div className="container">   
               <Routes>
              <Route path="/" element ={<Home/>}/>
              <Route path="/about" element ={<About/>}/>
            </Routes>
            </div>

        </BrowserRouter>
      </NoteState>
 </div>
  );
}

export default App;
