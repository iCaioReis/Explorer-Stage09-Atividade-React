import { createContext, useContext } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    async function signIn({ email, password }){
        try {
            const res = await api.post("/sessions", { email, password });
            console.log(res);
        } catch (error) {
            if(error.res){
                alert(error.res.data.message);
            }else {
                alert("Nào foi possível entrar")
            }
        }
        
    }

    return(
        <AuthContext.Provider value={{signIn}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth }