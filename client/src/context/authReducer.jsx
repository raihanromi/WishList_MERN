export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload
      };

    default:
      return state;
  }
};
