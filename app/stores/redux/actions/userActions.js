import { FETCH_USERS, FETCH_USERS_ERROR } from './types';
import axiosClient from '../../../api/axiosClient';

// Fetch all users
export const fetchUsers = () => async (dispatch) => {
  try {
    
    dispatch({
      type: FETCH_USERS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USERS_ERROR,
      payload: error.message,
    });
  }
};