import { createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }){
    return(
        <AuthContext.Provider value={{ email: '123@123.com'}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider }