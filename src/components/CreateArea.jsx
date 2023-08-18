import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea(props) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const [isContentClicked, setIsContentClicked] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    if (note.title !== '' && note.content !== '') {
      event.preventDefault();
      props.onAdd(note);
      setNote({
        title: '',
        content: '',
      });
    } else {
      alert('Cannot add an empty note.');
      event.preventDefault();
    }
  }

  function handleContent() {
    setIsContentClicked(true);
  }

  return (
    <div>
      <form
        className={
          note.title !== '' && note.content !== ''
            ? 'create-note active'
            : 'create-note'
        }
        onSubmit={handleSubmit}
      >
        {isContentClicked && (
          <input
            onChange={handleChange}
            value={note.title}
            name="title"
            placeholder="Title"
          />
        )}

        <textarea
          onClick={handleContent}
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isContentClicked ? '3' : '1'}
        />
        <Zoom in={isContentClicked}>
          <Fab
            sx={{
              ':hover': {
                bgcolor: 'red',
                color: 'black',
              },
            }}
            type="submit"
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
