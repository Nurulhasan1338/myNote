import React from "react";
import del from "./asset/Del.png";

const content = (props) => {

    
  return (
    <div
      key={props.key}
      className="col mx-4 my-3 rounded shadow"
      style={{ backgroundColor: props.note.color }}
    >
      <div className="card-body box pt-2 notesItem">
        <p className="card-text mx-0 px-1 display-6">{props.note.title}</p>
        <p className="card-text mx-0 px-1 Text">{props.note.description}</p>
      </div>
      <div className="row p-2">
        <div className="col text-muted d-inline">
          {props.note.date.split("T")[0]}
        </div>
        <div className = "row mt-lg-3">
        <div className="col-12 d-flex justify-content-between">
        <botton className="btn" onClick={() => {props.deleteNote(props.note._id)}}>
          <img src={del} style={{ width: "20px" }} alt="delete" />
        </botton>
        
        <button
          type="button"
          class="btn "
          data-bs-toggle="modal"
          data-bs-target={`#staticBackdrop_${props.note._id}`}
        >
          <i class="fa-sharp fa-solid fa-eye" style={{color: "#101723"}}></i>
        </button>
        </div>
    </div>
        <div
          class="modal fade"
          id={`staticBackdrop_${props.note._id}`}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby={`staticBackdropLabel_${props.note._id}`}
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content" style={{ backgroundColor: props.note.color }}>
              <div class="modal-header">
                <h1 class="modal-title display-6 TText" id="staticBackdropLabel">
                  {props.note.title}
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body Text">{props.note.description}</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  close
                </button>
                <button type="button" class="btn btn-primary">
                  edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content;
