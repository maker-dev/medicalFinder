import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../Api/api';

const AuthContext = createContext();


function Auth({children}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth"))) {
      fetchUser();
    }
  }, []);

  const fetchUser = async () => {
    try {
      const response = await api.get("user")
      setUser(response.data.data.user);
    } catch (error) {
      localStorage.setItem("auth", JSON.stringify(false));
      console.error('Error fetching user:', error);
    }
  };

  const values = {
    user,
    setUser
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


