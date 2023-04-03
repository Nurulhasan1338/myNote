import React from 'react';
import { useState } from 'react';
import NoteContext from './Notecontext.js';

export default function Notesate(props) {
  const Notes= [
    {
      "_id": "632ff967fc70a673499d1a1f",
      "user": "631ecc1f5298db6a4ad9be46",
      "title": "avaliuy",
      "description": "hello this is my first note on my application",
      "tag": "imp",
      "date": "2022-09-25T06:47:03.381Z",
      "__v": 0
    },
    {
      "_id": "632ff968fc70a673499d1a25",
      "user": "631ecc1f5298db6a4ad9be46",
      "title": "avaliuy",
      "description": "hello this is my first note on my application",
      "tag": "imp",
      "date": "2022-09-25T06:47:04.026Z",
      "__v": 0
    },
    {
      "_id": "635fda318c1510cc573bb4fa",
      "user": "631ecc1f5298db6a4ad9be46",
      "title": "avaliuy hello",
      "description": "hello this is my first note on my application",
      "tag": "imp",
      "date": "2022-10-31T14:22:41.954Z",
      "__v": 0
    },
    {
      "_id": "635fda318c1510cc573bb4fa",
      "user": "631ecc1f5298db6a4ad9be46",
      "title": "avaliuy hello",
      "description": "hello this is my first note on my application",
      "tag": "imp",
      "date": "2022-10-31T14:22:41.954Z",
      "__v": 0
    },
    {
      "_id": "635fda318c1510cc573bb4fa",
      "user": "631ecc1f5298db6a4ad9be46",
      "title": "avaliuy hello",
      "description": "hello this is my first note on my application",
      "tag": "imp",
      "date": "2022-10-31T14:22:41.954Z",
      "__v": 0
    },
    {
      "_id": "635fda318c1510cc573bb4fa",
      "user": "631ecc1f5298db6a4ad9be46",
      "title": "avaliuy hello",
      "description": "hello this is my first note on my application",
      "tag": "imp",
      "date": "2022-10-31T14:22:41.954Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(Notes);

  const addnotes= (title,des,tag)=>{
    console.log("node added");
      const note =  {
        "_id": "635fda318c1510cc573bb4fa2",
        "user": "631ecc1f5298db6a4ad9be46w",
        "title": title,
        "description": des,
        "tag": tag,
        "date": "2022-10-31T14:22:41.954Z",
        "__v": 0
      };
      setNotes(notes.concat(note));

  }

  const deleteNote=(id)=>{
      console.log("deleting note with id :",id);
      const newnotes = notes.filter((note)=> {return note._id !==id})
      setNotes(newnotes);
  }
  return (
    <NoteContext.Provider value ={{notes,addnotes,deleteNote}}>
    {props.children}
    </NoteContext.Provider>
  )
}
  