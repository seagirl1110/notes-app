import styles from './styles.module.css';
import NoteForm from '../noteForm';
import { setModalNote } from '../../redux/actions/noteActions';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function Modal({ setModalOpen, modalNoteId, modalNote, setModalNote }) {
  useEffect(() => {
    setModalNote(modalNoteId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <NoteForm
          nameForm="Edit"
          setModalOpen={setModalOpen}
          modalNote={modalNote}
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modalNote: state.modalNote,
});

const mapDispatchToProps = (dispatch) => ({
  setModalNote: (noteId) => dispatch(setModalNote(noteId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
