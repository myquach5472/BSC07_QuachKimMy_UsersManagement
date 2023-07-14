import { combineReducers } from 'redux';

// Initial state for people
const initialPeopleState = [];

const peopleReducer = (state = initialPeopleState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, action.payload];
    case 'EDIT_PERSON':
      return state.map(person =>
        person.id === action.payload.id ? action.payload : person
      );
    case 'DELETE_PERSON':
      return state.filter(person => person.id !== action.payload);
    default:
      return state;
  }
};

// search 
const searchReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_QUERY':
      return action.payload;
    default:
      return state;
  }
};

// Combine
const rootReducer = combineReducers({
  people: peopleReducer,
  searchQuery: searchReducer
});

export default rootReducer;
