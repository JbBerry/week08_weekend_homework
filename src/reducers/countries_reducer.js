const countriesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...action.countriesData];
    case 'BUCKET_LIST':
      if (state[action.id].status === ''){
        const newState = [...state]
        const updatedElement= {...newState[action.id], status:'bucket_list'}
        newState[action.id]=updatedElement;
        return newState;
      }else{
        return state;
      }
    case 'VISITED':
      const newState = [...state]
      const updatedElement= {...newState[action.id], status:'visited'}
      newState[action.id]=updatedElement;
      return newState;
    default:
      return state;
  }
};

export default countriesReducer;



// state = [ {flag: , name: , region: , status:} ... { } ... ]

// country.status should be either: '' OR 'bucket_list' OR 'visited'
