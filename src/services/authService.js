import api from './api'; // Axios instance with withCredentials:true

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/user/cookie/signIn', {
      email,
      password
    });
    console.log(response);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.post('/user/auth/logout');
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const signupUser = async (userData) => {
  try {
    const response = await api.post('/user/signUp', userData);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

export const getProfile = async () => {
  const response = await api.get('/mongo/auth/profile');
  return response.data;
};
