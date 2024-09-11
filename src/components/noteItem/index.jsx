import styles from './styles.module.css';
import { connect } from 'react-redux';
import { deleteNote } from '../../redux/actions/noteActions';

function NoteItem({ id, title, content, deleteNoteFromList }) {
  return (
    <div className={styles.note_item_container}>
      <h3>{title}</h3>
      <p>{content}</p>
      <div className={styles.actions_container}>
        <button className={styles.note_btn}>Edit</button>
        <button
          onClick={() => deleteNoteFromList(id)}
          className={styles.note_btn}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteNoteFromList: (noteId) => dispatch(deleteNote(noteId)),
});

export default connect(null, mapDispatchToProps)(NoteItem);
