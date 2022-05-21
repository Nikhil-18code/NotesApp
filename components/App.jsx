import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes,setNotes]=useState([]);
    function addNote(newNote){
       setNotes(prevNote=>{
         return [...prevNote,newNote]
       })
    }

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
