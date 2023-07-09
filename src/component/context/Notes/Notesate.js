import React from 'react';
import { useState } from 'react';
import NoteContext from './Notecontext.js';
import address from "../../config.js"

export default function Notesate(props) {
  const host = address;

  const Notes= []
  const [notes, setNotes] = useState(Notes);
  // eslint-disable-next-line
  const [token,setToken] = useState("");

  const addnotes= async(title,des,tag,color)=>{
    try{
    const reponse = await fetch(`${host}api/note/addnote`,{
      method :'POST',
      headers:{
        'Content-Type':'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({
        title:title,
        description:des,
        tag:tag,
        color:color
        })
    });
    console.log(reponse.json());
    showAlert("Noted added successfully",'success');
  }catch(err){
    console.log(err);
  }


}


  const  getNotes= async()=>{
   try{
    const reponse = await fetch(`${host}api/note/fetchallNotes`,{
      method :'GET',
      headers:{
        'Content-Type':'application/json',
        "auth-token":localStorage.getItem('token')
      },
    });
   const data = await reponse.json();
   console.log(data);
   setNotes(data);
  }catch(err){
    showAlert(err,"danger");
  }
  }


  const [alert, setalert] = useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1400);
  }


  const editNotes = async (id,title,tag,description,color)=>{

    const reponse = await fetch(`${host}api/note/updatenote/${id}`,{
      method :'PUT',
      headers:{
        'Content-Type':'application/json',
        "auth-token":localStorage.getItem('token')
      },
      body: JSON.stringify({title,tag,description,color})
    });
    getNotes();

    const json  = reponse.json;
    console.log(json);
  }


  const deleteNote= async(id)=>{
    const reponse = await fetch(`${host}api/note/deletenote/${id}`,{
      method :'DELETE',
      headers:{
        'Content-Type':'application/json',
        "auth-token":localStorage.getItem('token')
      },
    });
      const json = reponse.json;
      console.log(json);
      getNotes();
  }



  
  return (
    <NoteContext.Provider value ={{notes,addnotes,deleteNote,showAlert,alert,getNotes,editNotes,setToken}}>
    {props.children}
    </NoteContext.Provider>
  )
}
  