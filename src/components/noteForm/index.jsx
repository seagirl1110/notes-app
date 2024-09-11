import { useState } from 'react';
import styles from './styles.module.css';
import { addNote } from '../../redux/actions/noteActions';
import { connect } from 'react-redux';

function NoteForm({ addNoteToList }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addNoteToList({
      ...note,
      id: new Date().getTime().toString(),
    });
    setNote({
      title: '',
      content: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_container}>
      <input
        value={note.title}
        onChange={handleChange}
        type="text"
        name="title"
        required
        placeholder="Title"
      />
      <textarea
        value={note.content}
        onChange={handleChange}
        name="content"
        required
        placeholder="Content..."
      />
      <button type="submit">Add note</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addNoteToList: (noteData) => dispatch(addNote(noteData)),
});

export default connect(null, mapDispatchToProps)(NoteForm);
