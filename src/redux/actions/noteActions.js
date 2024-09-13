export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const SET_MODAL_NOTE = 'SET_MODAL_NOTE';

export const addNote = (noteData) => ({
  type: ADD_NOTE,
  payload: noteData,
});

export const deleteNote = (noteId) => ({
  type: DELETE_NOTE,
  payload: noteId,
});

export const updateNote = (newNoteData) => ({
  type: UPDATE_NOTE,
  payload: newNoteData,
});

export const setModalNote = (noteId) => ({
  type: SET_MODAL_NOTE,
  payload: noteId,
});
