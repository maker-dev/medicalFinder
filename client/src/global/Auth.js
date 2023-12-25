import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../Api/api';

const AuthContext = createContext();


function Auth({children}) {
  const [user, setUser] = useState(null);
  const [coordinates, setCoordinates] = useState({});


  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth"))) {
      fetchUser();
    }
    handleGetLocation();
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

  const handleGetLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser');
    }
  };

  const values = {
    user,
    setUser,
    coordinates,
    setCoordinates
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


