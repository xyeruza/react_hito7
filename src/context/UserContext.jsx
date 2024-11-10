import { createContext, useState } from 'react';

export const UserContext = createContext ();

const UserProvider =({children})=>{

const [token, setToken] = useState(true);

const actualizarToken = () => {
  setToken(false);
};


  return (
    <UserContext.Provider value={{token,actualizarToken}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider;