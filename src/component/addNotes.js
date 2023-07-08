import React, { useContext, useState,useEffect } from 'react'
import notecontext from "./context/Notes/Notecontext.js";
import { useNavigate } from 'react-router-dom';


export default function AddNotes() {

  const context = useContext(notecontext);
  const { addnotes, showAlert } = context;

  // for defining temprally note
  const [note, setNote] = useState({ title: "", description: "", tag: "", color:""})

  
  const nevigate = useNavigate();

  useEffect(()=>{
    if(!localStorage.getItem('token')){
      nevigate('/');
    }
  });

  
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault();

    if (note.title === "") {
      showAlert("please write the title!", "warning");
      return;
    }
    addnotes(note.title, note.description, note.tag,note.color);
    setNote({ title: "", description: "", tag: "", color:""});
    showAlert("Note saved successfully!", "Success");
  }

  return (
    
    <div className="container vh-100 d-flex flex-column align-items-center">

      <div className='w-75'>
        <h2 className='w-100 text-center mt-5'>
          🅰🅳🅳 🆈🅾🆄🆁 🅽🅾🆃🅴🆂
        </h2>
        <form onSubmit={handleClick}>
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
                value={note.title}
                placeholder="topic"
                minLength={5}
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
                value={note.tag}
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
                value = {note.color}
                title="Choose note color"
                />

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
                value={note.description}
                placeholder="make your Note"
                aria-label="default input example"
                minLength={5}
                required
              />
            </div>
            <div className='col'>
              <button type="submit" className="btn btn-primary my-3 ">
                Add note
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
