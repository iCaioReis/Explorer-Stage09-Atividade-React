import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [data, setData] = useState({});
    
    async function signIn({ email, password }){

        try {
            const res = await api.post("/sessions", { email, password });
            const { user, token } = res.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token })

        } catch (error) {
            if(error.res){
                alert(error.res.data.message);
            }else {
                alert("Não foi possível entrar")
            }
        }
        
    }

    function signOut(){
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        setData({});
    }

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token");

        if( token && user ){
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({
                token, 
                user: JSON.parse(user)
            })
        }
    }, []);

    return(
        <AuthContext.Provider value={{ 
            signIn, 
            signOut,
            user: data.user
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context;
}

export { AuthProvider, useAuth }