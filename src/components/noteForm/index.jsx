import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { addNote, updateNote } from '../../redux/actions/noteActions';
import { connect } from 'react-redux';

function NoteForm({
  nameForm,
  addNoteToList,
  updateNoteInList,
  setModalOpen,
  modalNote,
}) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    modalNote && setNote(modalNote);
  }, [modalNote]);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setNote({ ...note, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (nameForm === 'Add') {
      addNoteToList({
        ...note,
        id: new Date().getTime().toString(),
      });
      setNote({
        title: '',
        content: '',
      });
    } else if (nameForm === 'Edit') {
      setModalOpen(false);
      updateNoteInList(note);
    }
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
      <button type="submit">{nameForm + ' note'}</button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addNoteToList: (noteData) => dispatch(addNote(noteData)),
  updateNoteInList: (newNoteData) => dispatch(updateNote(newNoteData)),
});

export default connect(null, mapDispatchToProps)(NoteForm);
