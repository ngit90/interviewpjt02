import { createSlice } from '@reduxjs/toolkit';
import {jwtDecode} from 'jwt-decode';

const authslice = createSlice({
    name: 'auth',
    initialState:{
        userrole : null ,
        token : null ,
    },  
    reducers: {
        loggings:(state, action) =>{
            const decodedToken = jwtDecode(action.payload);
            //localStorage.setItem("user", JSON.stringify(decodedToken));
            localStorage.setItem("token", action);
            console.log("decoded data",decodedToken);
            return {
                userrole: decodedToken.role, 
                token: action ,
            };
        },
        logouts:(state) =>{
            //localStorage.removeItem("user");
            localStorage.removeItem("token");
            return {
                userrole: null, 
                token: null,
            };
        },
    },
});

// Export actions and reducer
export const { loggings, logouts } = authslice.actions;
export default authslice.reducer;