import React,{useContext} from 'react'
import notecontext from "./context/Notes/Notecontext.js";


const List = ({ color, notes }) => {
  const context = useContext(notecontext);         // for using addnote function which we made in notestate
  const {deleteNote} = context;
  return (
    
			<div key={notes.id} className="my-2 rounded shadow p-2" style={{backgroundColor:color}}>
			<div className="card-body box p-1 pt-2">
                <h6 className="display-6">{notes.title}</h6>
                <p className="card-link d-inline Text">{notes.description}</p>
		 </div>
			 
			  <div className="row">
                <p className="col-9 card-link text-muted">{notes.date.slice(0,10)}</p>
			  <botton className="col-1 card-link ">
					<i className="fa-sharp fa-solid fa-trash-can p-1" onClick={()=>{deleteNote(notes._id)}}></i>
                </botton>
			  <botton className="col-1 card-link ">
              <i className="fa-solid fa-pen-to-square p-1"></i>
                </botton>

				
		  </div>
      </div>

  );
};

export default List;
