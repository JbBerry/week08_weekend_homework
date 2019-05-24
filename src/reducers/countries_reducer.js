const countriesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [action.countriesData];
    default:
      return state;
  }
};

export default countriesReducer;
