import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_MODAL_NOTE,
  UPDATE_NOTE,
} from '../actions/noteActions';

const initialState = {
  noteList: [],
  notesCount: 0,
  modalNote: null,
};

const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteList: [...state.noteList, payload],
      notesCount: state.notesCount + 1,
    };
  }

  if (type === DELETE_NOTE) {
    return {
      ...state,
      noteList: state.noteList.filter((note) => note.id !== payload),
      notesCount: state.notesCount - 1,
    };
  }

  if (type === UPDATE_NOTE) {
    return {
      ...state,
      noteList: state.noteList.map((note) =>
        note.id === payload.id ? payload : note
      ),
    };
  }

  if (type === SET_MODAL_NOTE) {
    return {
      ...state,
      modalNote: state.noteList.find((note) => note.id === payload),
    };
  }

  return state;
};

export default noteReducer;
