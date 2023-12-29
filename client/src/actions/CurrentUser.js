export const SetCurrentUser = (data) => {
  return {
    type: "FETCH_CURRENT_USER",
    payload: data,
  };
};
