import styles from './styles.module.css';
import { connect } from 'react-redux';
import NoteItem from './../noteItem';

function NoteList({ noteList, notesCount }) {
  if (!notesCount) return;
  return (
    <div className={styles.note_list_container}>
      {noteList.map((note) => (
        <NoteItem key={note.id} {...note} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  noteList: state.noteList,
  notesCount: state.notesCount,
});

export default connect(mapStateToProps)(NoteList);
