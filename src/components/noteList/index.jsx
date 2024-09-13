import styles from './styles.module.css';
import { connect } from 'react-redux';
import NoteItem from './../noteItem';
import Modal from '../modal';
import { useState } from 'react';

function NoteList({ noteList, notesCount }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalNoteId, setModalNoteId] = useState(null);

  if (!notesCount) return;
  return (
    <div className={styles.note_list_container}>
      {noteList.map((note) => (
        <NoteItem
          key={note.id}
          {...note}
          setModalOpen={setModalOpen}
          setModalNoteId={setModalNoteId}
        />
      ))}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} modalNoteId={modalNoteId} />
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  noteList: state.noteList,
  notesCount: state.notesCount,
});

export default connect(mapStateToProps)(NoteList);
