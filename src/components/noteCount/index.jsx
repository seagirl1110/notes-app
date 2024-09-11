import styles from './styles.module.css';
import { connect } from 'react-redux';

function NoteCount({ notesCount }) {
  return (
    <p className={styles.note_count_container}>
      {notesCount ? `Notes count: ${notesCount}` : "You don't have notes!"}
    </p>
  );
}

const mapStateToProps = (state) => ({
  notesCount: state.notesCount,
});

export default connect(mapStateToProps)(NoteCount);
