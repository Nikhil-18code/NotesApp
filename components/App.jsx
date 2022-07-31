import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

//Getting data from local storage
const getLocalData=()=>{
    const notes=localStorage.getItem('notes');
    if(notes){
      return JSON.parse(notes);
    }
    else{
      return [];
    }
  }
function App() {
    const [notes,setNotes]=useState(getLocalData());
    function addNote(newNote){
       setNotes(prevNote=>{
         return [...prevNote,newNote]
       })
    }
    //Adding to Locale Storage
    useEffect(() =>{
      localStorage.setItem('notes',JSON.stringify(notes))
     },[notes]);
     
    function deleteNote(id){
        setNotes(prevNote=>{
            return prevNote.filter((noteItem,index)=>{
                return index!==id
            })
        })
    }
  return (
    <div>
      <Header />
      <CreateArea
       onAdd={addNote} />
       {notes.map((noteItem,index)=>{
            return <Note 
            id={index}
            key={index}
            title={noteItem.title} 
            content={noteItem.content} onDelete={deleteNote} />
       })}
      <Footer />
    </div>
  );
}

export default App;
