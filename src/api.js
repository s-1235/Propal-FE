import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:6969',
  //   timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem('user');

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      return;
    }

    console.log(config);

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const unApprovedProperties = async () => {
  try {
    return await axios.get(
      `http://localhost:6969/property/unApprovedProperties`
    );
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const approveProperty = async (id) => {
  try {
    return await axios.patch(`http://localhost:6969/property/approve/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const propertyDelete = async (id) => {
  try {
    return await axios.delete(`http://localhost:6969/property/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const userDelete = async (id) => {
  try {
    return await axios.delete(`http://localhost:6969/users/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const adminLogin = async (credentials) => {
  try {
    console.log(credentials);
    return await axios.post('http://localhost:6969/admin', credentials);
    // return await apiClient.post('/admin', credentials);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const login = async (credentials) => {
  try {
    console.log(credentials);

    return await apiClient.post('/users/login', credentials);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const signup = async (credentials) => {
  try {
    console.log('credentials', credentials);

    return await axios.post('http://localhost:6969/users/signup', credentials);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
export const addProperty = async (credentials) => {
  try {
    let userId;
    console.log('credentials', credentials);
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      userId = user.data._id;
      console.log(userId, `/property/${userId}`);
    } else {
      console.log('User id not found');
    }
    return await apiClient.post(`/property/${userId}`, credentials);
    // return await apiClient.get(`/property`, credentials);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getUserData = async (id) => {
  try {
    return await axios.get(`http://localhost:6969/users/${id}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
