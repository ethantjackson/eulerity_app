const initState = {
  petOptions: [],
  petResults: [],
  selectedPets: [],
  searching: false,
};
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_PET_OPTIONS':
      return { ...state, petOptions: action.payload };
    case 'SET_PET_RESULTS':
      return { ...state, petResults: action.payload };
    case 'SET_SELECTED_PETS':
      return { ...state, selectedPets: action.payload };
    case 'SET_SHOW_SEARCH':
      return { ...state, searching: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
