import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { user } from "../assets/assest";

export const Appcontext = createContext();

export const AppProvider = ({ children }) => {
  const [logindata, setLogindata] = useState({
    id: "",
    password: "",
  });
  const [login, setLogin] = useState(false);
  const navegate = useNavigate();

  //fetch data from assest.js
  const fetchData = async () => {
    setLogindata(user);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const value = { logindata, setLogindata, login, setLogin, navegate };
  return <Appcontext.Provider value={value}>{children}</Appcontext.Provider>;
};

export const useAppcontext = () => {
  return useContext(Appcontext);
};
