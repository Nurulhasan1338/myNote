import React, { useContext } from "react";
import notecontext from "./context/Notes/Notecontext.js";
import Content from "./content.js"

const Notes = () => {
  const context = useContext(notecontext); // for using addnote function which we made in notestate
  const { deleteNote, notes } = context;
  return (
    <div className="notes m-3">
      <div className="row row-cols-5">
        {notes.map((note, index) => { 
            return (
            <Content note = {note} deleteNote = {deleteNote} key = {note.index}/>
            );
        })}
      </div>
    </div>
  );
};

export default Notes;
