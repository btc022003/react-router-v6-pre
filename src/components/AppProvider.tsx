import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const context = createContext({});

function AppProvider({ children }: any) {
  const to = useNavigate();
  const [isLogined, setIsLogined] = useState(false);
  useEffect(() => {
    if (isLogined == true) {
      to('/user');
    } else {
      to('/login');
    }
  }, [isLogined]);
  return (
    <context.Provider value={{ isLogined, setIsLogined }}>
      {children}
    </context.Provider>
  );
}

export default AppProvider;
