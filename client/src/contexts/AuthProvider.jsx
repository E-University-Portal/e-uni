import { createContext, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

const useAuth = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const userRef = useRef(null);

  userRef.current = user;

  useEffect(() => {
    const checkUser = async () => {
      try {
        const {
          data: { data },
        } = await axios.get("/api/users/student/me");

        const userData = {
          id: data._id,
          email: data.email,
          name: data.name,
          type: data.type,
        };

        if (userData) {
          setUser(userData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUser();
  }, []);

  const login = async (userLoginData) => {
    try {
      await axios.post("/api/users/student/sign-in", userLoginData);
      const { data } = await axios.get("/api/users/student/me");
      const userData = data.data;

      if (userData) {
        setUser(userData);
      }
    } catch (error) {
      throw new Error("Invalid credentials");
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/users/student/sign-out");
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, userRef, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, useAuth, AuthProvider };
