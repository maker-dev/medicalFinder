import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../Api/api';

const AuthContext = createContext();


function Auth({children}) {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    checkCookie().then(res => {
      if (res) {
        fetchUser();
      }
    })
  }, []);

  const checkCookie = async () => {
    const response = await api.get("checkCookie");
    return response.data.data.exists;
  }

  const fetchUser = async () => {
    try {
      const response = await api.get("user")
      setUser(response.data.data.user);
      setUserType(response.data.data.userType);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const values = {
    user,
    userType,
    setUser,
    setUserType
  };

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext);
};

export default Auth;

export {useAuth};


