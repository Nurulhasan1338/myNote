import React  from "react";
import del from "./asset/Del.png";
import Model from "./Mymodel"


const content = (props) => {
 
    
  return (
    <div
      key={props.note._id}
      className="p-3 rounded shadow"
      style={{ backgroundColor: props.note.color }}
    >
      <div className="row box pt-2 notesItem">
        <div className="col-12  mx-0 px-1 display-6">{props.note.title}</div>
        <div className="col-12  mx-0 px-1 Text">{props.note.description}</div>
      </div>
      <div className="row p-2">
        <div className="col text-muted d-inline">
          {props.note.date.split("T")[0]}
        </div>
        <div className="col text-muted d-inline">
         
        </div>
        <div className = "row mt-lg-3">
        <div className="col-12 d-flex justify-content-between">
        <botton className="btn" onClick={() => {props.deleteNote(props.note._id)}}>
          <img src={del} style={{ width: "20px" }} alt="delete" />
        </botton>
        <Model id = {props.note._id} tag = {props.note.tag} title = {props.note.title} description = {props.note.description}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default content;
