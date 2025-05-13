import api from './api'; // Axios instance with withCredentials:true

export const loginUser = async (email, password) => {
  const response = await api.post('/mongo/auth/cookie/login', {
    email,
    password
  });
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/mongo/auth/logout');
  return response.data;
};

export const signupUser = async (userData) => {
  console.log("before block try")
  try {
    console.log("sending response",userData);
    const response = await api.post('/user/signUp', userData);
    console.log(response)
    return response.data;
  } catch (error) {
    console.log("inside catch",error);
    return error.message;
  }
};

export const getProfile = async () => {
  const response = await api.get('/mongo/auth/profile');
  return response.data;
};
