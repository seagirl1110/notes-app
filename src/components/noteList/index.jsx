import styles from './styles.module.css';
import { connect } from 'react-redux';
import NoteItem from './../noteItem';

function NoteList({ noteList }) {
  if (!noteList.length) return <p>You don't have notes!</p>;
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
});

export default connect(mapStateToProps)(NoteList);
