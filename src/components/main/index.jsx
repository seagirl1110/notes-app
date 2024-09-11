import styles from './styles.module.css';
import NoteForm from './../noteForm';
import NoteList from './../noteList';

function Main() {
  return (
    <main className={styles.main_container}>
      <NoteForm />
      <NoteList />
    </main>
  );
}

export default Main;
