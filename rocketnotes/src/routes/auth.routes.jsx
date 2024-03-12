import { Routes, Route } from 'react-router-dom';

import { signIn } from '../pages/SignIn';

import { signUp } from '../pages/SignUp';

export function AuthRoutes(){
    return(
        <Routes>
            <Route path='/' element={<signIn/>} />
            <Route path='/register' element={<signUp/>} />
        </Routes>
    )
}