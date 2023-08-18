import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((previousState) => {
      return [...previousState, note];
    });
  }

  function deleteNote(id) {
    setNotes((previous) => {
      return previous.filter((item, index) => index !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}
