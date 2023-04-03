import React,{useContext,useState} from 'react'
import notecontext from "./context/Notes/Notecontext.js"; 



export default function AddNotes() {
    
    const context = useContext(notecontext);         // for using addnote function which we made in notestate
    const {addnotes} = context;

    // for defining temprally note
    const [note, setNote] = useState({title:"",description:"",tag:"default"})
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    const handleClick = (e) =>{
            e.preventDefault();
            addnotes(note.title,note.description,note.tag)
    }

  return (
    <div className="w-100 shadow rounded p-1">
      <h2>
        <i className="fa-regular fa-pen-to-square mx-1"></i>Add your notes
      </h2>
      <form>
        <div className="mb-3 mx-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            <h6>Title</h6>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            placeholder="topic"
          />
        </div>
        <div className="mb-3 mx-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Note
          </label>
          <input
            className="form-control"
            type="text"
            id="description"
            name="description"
            onChange={onChange}
            placeholder="Default input"
            aria-label="default input example"
          />
          <button type="submit" className="btn btn-primary my-3 " onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
