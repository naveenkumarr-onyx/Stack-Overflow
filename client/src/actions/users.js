import * as api from "../api";
export const fetchAllUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAlluser();
    dispatch({
      type: "FETCH_USERS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = (id, updateData) => async (dispatch) => {
  const { data } = await api.updateProfile(id, updateData);
  dispatch({
    type: "UPDATE_CURRENT_USER",
    payload: data,
  });
  try {
  } catch (error) {
    console.log(error);
  }
};
// adding some code
export const fetchLoginHistory = () => async (dispatch) => {
  try {
    const { data } = await api.logHistory();
    dispatch({
      type: "SET_LOGIN_HISTORY",
      payload: data,
    });
  } catch (error) {
    console.error("Error fetching login history:", error);
  }
};
