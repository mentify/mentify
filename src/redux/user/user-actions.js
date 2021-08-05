export const setUser = (user) => {
  return {
    type: "SET_USER",
    payload: user,
  };
};

export const signOutUser = () => {
  return {
    type: "SIGN_OUT_USER",
  };
};
