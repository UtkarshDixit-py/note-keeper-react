import './App.css';
import NotesList from './components/NotesList';
import {useState} from 'react';
import {nanoid} from 'nanoid';

function App() {
  const [notes, setNotes ] =useState([]);


    const handleAddNote=(text)=>{
    
      const date = new Date();
      const newNote ={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
      }
      const newNotes = [...notes,newNote];
      setNotes(newNotes);
    };

    const deleteNote=(id)=>{
     const newNotes =  notes.filter((note)=>note.id!==id);
     setNotes(newNotes);
    }


  return (
    <div className="container">
        <NotesList 
          notes={notes} 
          handleAddNote={handleAddNote}
          handleDeleteNote={deleteNote}
        />
    </div>
  );
}

export default App;
