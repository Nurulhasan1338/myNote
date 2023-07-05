import React, { useContext,useEffect } from "react";
import notecontext from "./context/Notes/Notecontext.js";
import Content from "./content.js";

const Notes = () => {
  const context = useContext(notecontext); // for using addnote function which we made in notestate
  const { deleteNote, notes,getNotes} = context;

  useEffect(()=>{
    getNotes();
  
  },[])

  return (
    <div className="noteList mx-3">
      <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-1 d-flex">
        <div className=" w-100 mt-5 display-1 text-center">
          {notes.length===0 && "No notes to display"}
        </div>
        {notes.map((note, index) => { 
            return (
              <div className="col-sm-12 mt-3">
            <Content note = {note} deleteNote = {deleteNote} key = {note.index}/>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Notes;
