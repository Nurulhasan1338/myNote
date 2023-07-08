import React,{useContext,useState} from 'react';
import notecontext from "./context/Notes/Notecontext.js";
import Button from '@mui/joy/Button';

const Edit = (props) => {
    const context = useContext(notecontext);
    const {editNotes,showAlert } = context;

    const [note, setNote] = useState({ title:props.title, description:props.description, tag:props.tag, color:props.color})
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
      }
      const handleClick = (e) => {
        e.preventDefault();
        if (note.title === "") {
          showAlert("please write the title!", "warning");
          return;
        }
        editNotes(props.id,note.title, note.tag, note.description, note.color);
        showAlert("Updated successfully!", "Success");
      }
  return (
<div>
<Button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" variant="outline" color="info">
<i class="fa-regular fa-pen-to-square"></i>
      </Button>
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title display-6 text-dark" id="exampleModalLabel">Update Note</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
        <div className="row mb-3 mx-3">
            <div className='col-lg-4 col-md-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <div className='fs-5 text-dark m-1'>Title</div>
              </label>
              <input
                type="text"
                className="form-control "
                id="title"
                value = {note.title}
                name="title"
                onChange={onChange}
                placeholder="topic"
                required
              />
            </div>
            <div className='col-lg-4 col-md-12'>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                <div className='fs-5 text-dark m-1'>Tag</div>
              </label>
              <input
                type="text"
                className="form-control "
                id="tag"
                value = {note.tag}
                name="tag"
                onChange={onChange}
                placeholder="Tag"
                required
              />
            </div>
            <div className='col-lg-4 col-md-12 d-flex flex-column '>
              <label for="exampleColorInput" class=" fs-5 text-dark form-label">Note Color</label>
              <input 
                type="color"
                name='color' 
                value = {note.color}
                class="form-control form-control-color d-flex align-items-center" 
                id="exampleColorInput" 
                onChange={onChange}
                title="Choose note color"/>
            </div>
          </div>
          <div className="row mb-3 mx-3">
            <div className='col-12'>
              <div className='fs-5 text-dark m-1'>Note</div>
              <textarea
                className="form-control"
                type="text"
                id="description"
                name="description"
                value = {note.description}
                rows="5"
                cols="40"
                onChange={onChange}
                placeholder="make your Note"
                aria-label="default input example"
                required
              />
            </div>
            <div className='col'>
              <Button type="submit" className="modal-footer m-2" onClick={handleClick} data-bs-dismiss="modal"  variant="soft" color="info"><i class="fa-solid fa-envelope-circle-check"></i></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Edit
