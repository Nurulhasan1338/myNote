import React,{useContext} from 'react'
import notecontext from "./context/Notes/Notecontext.js"; 
import List from './list.js';

export default function Notes() {
    const context = useContext(notecontext);
    const {notes} = context;
  return (
    <div className='mt-4 p-3 shadow rounded'>
    <h4 className='display-4'><i className="fa-light fa-calendar-lines"></i> Notes</h4>
    <div className="row row-cols-3">
        {
          notes.map((note)=>{
             return (
              <div className="col">
             <List notes={note} color = {`hsl(${Math.floor(Math.random() * 300)}deg 100% 80%)`}/>
             </div>
             );
          })}
    </div>
  </div>
  )
}
