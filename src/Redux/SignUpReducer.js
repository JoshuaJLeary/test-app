const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
};

const signUpDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      return { ...state, user: action.user };

    case 'HANDLE_FORM_UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          ...action.value,
        },
      };
    default:
      return state;
  }
};
export default signUpDetails;
