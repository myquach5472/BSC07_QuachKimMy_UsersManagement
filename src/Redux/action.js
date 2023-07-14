// Add 
export const addPerson = person => ({
    type: 'ADD_PERSON',
    payload: person
  });
  
// Edit 
  export const editPerson = person => ({
    type: 'EDIT_PERSON',
    payload: person
  });
  
// Delete 
  export const deletePerson = id => ({
    type: 'DELETE_PERSON',
    payload: id
  });
  
// Search 
  export const setSearchQuery = query => ({
    type: 'SET_SEARCH_QUERY',
    payload: query
  });
  