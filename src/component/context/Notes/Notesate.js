import React from 'react';
import { useState } from 'react';
import NoteContext from './Notecontext.js';

export default function Notesate(props) {

  const host = "http://localhost:5000/api/";
  const Notes= []
  const [notes, setNotes] = useState(Notes);

  const addnotes= async(title,des,tag,color)=>{
    try{
    const reponse = await fetch("http://localhost:5000/api/note/addnote",{
      method :'POST',
      headers:{
        'Content-Type':'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMzExOWZjNDkyZGIxYTMwMjVhYWFiIn0sImlhdCI6MTY4ODQwODQ3OX0.hvtn5uDVHT7UyC911I8VBe3J8u5NhxoyajHQ3MCfO_o"
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


//   const updateNote= async(id,title,des,tag,color)=>{
//     try{
//     const reponse = await fetch(`http://localhost:5000/api/note/updatenote/${id}`,{
//       method :'PUT',
//       headers:{
//         'Content-Type':'application/json',
//         "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMzExOWZjNDkyZGIxYTMwMjVhYWFiIn0sImlhdCI6MTY4ODQwODQ3OX0.hvtn5uDVHT7UyC911I8VBe3J8u5NhxoyajHQ3MCfO_o"
//       },
//       body: JSON.stringify({
//         title:title,
//         description:des,
//         tag:tag,
//         color:color
//         })

//     });
//     console.log(reponse.json());
//     showAlert("Noted added successfully",'success');
//   }catch(err){
//     console.log(err);
//   }


// }



  const  getNotes= async()=>{
   try{
    const reponse = await fetch("http://localhost:5000/api/note/fetchallNotes",{
      method :'GET',
      headers:{
        'Content-Type':'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMzExOWZjNDkyZGIxYTMwMjVhYWFiIn0sImlhdCI6MTY4ODQwODQ3OX0.hvtn5uDVHT7UyC911I8VBe3J8u5NhxoyajHQ3MCfO_o"
      },
    });
   const data = await reponse.json();
   console.log(data);
   setNotes(data);
  }catch(err){
    console.log(err);
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

    const reponse = await fetch(`${host}note/updatenote/${id}`,{
      method :'PUT',
      headers:{
        'Content-Type':'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMzExOWZjNDkyZGIxYTMwMjVhYWFiIn0sImlhdCI6MTY4ODQwODQ3OX0.hvtn5uDVHT7UyC911I8VBe3J8u5NhxoyajHQ3MCfO_o"
      },
      body: JSON.stringify({title,tag,description,color})
    });
    getNotes();

    const json  = reponse.json;
    console.log(json);
  }


  const deleteNote= async(id)=>{
    const reponse = await fetch(`${host}note/deletenote/${id}`,{
      method :'DELETE',
      headers:{
        'Content-Type':'application/json',
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhMzExOWZjNDkyZGIxYTMwMjVhYWFiIn0sImlhdCI6MTY4ODQwODQ3OX0.hvtn5uDVHT7UyC911I8VBe3J8u5NhxoyajHQ3MCfO_o"
      },
    });
      const json = reponse.json;
      console.log(json);
      getNotes();
  }




  return (
    <NoteContext.Provider value ={{notes,addnotes,deleteNote,showAlert,alert,getNotes,editNotes}}>
    {props.children}
    </NoteContext.Provider>
  )
}
  