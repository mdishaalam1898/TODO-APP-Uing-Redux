/** using redux */
import { ADD_NOTE, DELETE_NOTE } from "../actions/noteActions";

const initialState = {
  notes: [
    {
      text: "CRCI is a ministry that provides spiritual and educational tools for long-term recovery from substance abuse and other addictions.",
      createdOn: new Date(),
    },
    {
      text: "Find out the address, directions, history, and programs and services of 12 Oregon prison facilities, including Coffee Creek Correctional Facility (CCCF",
      createdOn: new Date(),
    },
  ],
};

export function noteReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            text: action.text,
            createdOn: new Date(),
          },
        ],
      };
    case DELETE_NOTE:
      state.notes.splice(action.index, 1);
      return {
        ...state,
        notes: [...state.notes],
      };
    default:
      return state;
  }
}
