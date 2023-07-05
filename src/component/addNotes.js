import React, { useContext, useState } from 'react'
import notecontext from "./context/Notes/Notecontext.js";


export default function AddNotes() {

  const context = useContext(notecontext);
  const { addnotes, showAlert } = context;

  // for defining temprally note
  const [note, setNote] = useState({ title: "", description: "", tag: "", color:""})

  
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  const handleClick = (e) => {
    e.preventDefault();
    if (note.title === "") {
      showAlert("please write the title!", "warning");
      return;
    }
    addnotes(note.title, note.description, note.tag, `hsl(${Math.floor(Math.random() * 300)}deg 100% 80%)`);
    showAlert("Note saved successfully!", "Success");
  }

  return (



    <div className="container vh-100 d-flex flex-column align-items-center">

      <div className='w-75'>
        <h2 className='w-100 text-center mt-5'>
          🅰🅳🅳 🆈🅾🆄🆁 🅽🅾🆃🅴🆂
        </h2>
        <form>
          <div className="row mb-3 mx-3">
            <div className='col-lg-4 col-md-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <div className='display-6 m-1'>Title</div>
              </label>
              <input
                type="text"
                className="form-control "
                id="title"
                name="title"
                onChange={onChange}
                placeholder="topic"
                required
              />
            </div>
            <div className='col-lg-4 col-md-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <div className='display-6 m-1'>Tag</div>
              </label>
              <input
                type="text"
                className="form-control "
                id="tag"
                name="tag"
                onChange={onChange}
                placeholder="Tag"
                required
              />
            </div>
            <div className='col-lg-4 col-md-12 d-flex flex-column '>
              <label htmlFor="exampleColorInput" className=" display-6 form-label">Note Color</label>
              <input 
                type="color"
                name='color'
                className="form-control form-control-color d-flex align-items-center" 
                id="exampleColorInput" 
                onChange={onChange}
                title="Choose note color"/>
            </div>
          </div>
          <div className="row mb-3 mx-3">
            <div className='col-12'>
              <div className='display-6 m-1'>Note</div>
              <textarea
                className="form-control"
                type="text"
                id="description"
                name="description"
                rows="10"
                cols="40"
                onChange={onChange}
                placeholder="make your Note"
                aria-label="default input example"
                required
              />
            </div>
            <div className='col'>
              <button type="submit" className="btn btn-primary my-3 " onClick={handleClick}>
                Add note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
