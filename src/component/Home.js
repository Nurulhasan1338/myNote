import React from 'react'
import Addnotes from "./addNotes.js";
import Notes from "./Notes.js";

export default function Home(){

  return (
  <div className='container my-5 '>
  <Addnotes/>
  <Notes/>        
  </div>
  )
}
