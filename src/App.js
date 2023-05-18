import { useState } from 'react'
import { AppRouter } from "./routes/AppRouter";
import { UserContext } from './AppContext';

export const App = () => {
  const [userData, setUserData] = useState(false)

  const [cart, setCart] = useState(0)

  return (
    <UserContext.Provider value={{ userData, setUserData, cart, setCart }}>
      <AppRouter />
    </UserContext.Provider>
  );
}