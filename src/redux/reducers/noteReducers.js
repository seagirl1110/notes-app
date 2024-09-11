import { ADD_NOTE, DELETE_NOTE } from '../actions/noteActions';

const initialState = {
  noteList: [],
};

const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteList: [...state.noteList, payload],
    };
  }

  if (type === DELETE_NOTE) {
    console.log(payload);

    return {
      ...state,
      noteList: state.noteList.filter((note) => note.id !== payload),
    };
  }

  return state;
};

export default noteReducer;
