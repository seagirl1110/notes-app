import { ADD_NOTE, DELETE_NOTE } from '../actions/noteActions';

const initialState = {
  noteList: [],
  notesCount: 0,
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

  return state;
};

export default noteReducer;
