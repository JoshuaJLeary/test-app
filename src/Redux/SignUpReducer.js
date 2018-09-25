const signUpDetails = (state = [], action) => {
  switch (action.type) {
    case 'SET_DETAILS':
      console.log('state?', state);
      return action.payload;
    default:
      return state;
  }
};
export default signUpDetails;
