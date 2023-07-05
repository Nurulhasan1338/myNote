import React,{useContext}  from 'react'
import notecontext from "./context/Notes/Notecontext.js"; 

function Alert(props) {
    const context = useContext(notecontext);
    const {alert} = context;
     return (
        alert && 
    <div className='fixed-top'>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
  
        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
</svg>
    <div
        className={`alert alert-${alert.type} d-flex align-items-center`}
        role="alert"
      >

        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label={alert.type}
        >

  <use xlinkHref="#exclamation-triangle-fill" />
         
    </svg>
      <strong> {alert.type} </strong> : {alert.msg}
      </div>
    </div>
  );
}

export default Alert;