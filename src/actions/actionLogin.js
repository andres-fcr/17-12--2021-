import { types } from "../types/types";

export const actionLogin = (user, password) => {
    return {
        type: types.login,
        payload: {
           user,
           password
        }
    }
}
export const actionLogout = () => {
    return {
        type: types.logout,
        payload: {}
    }    
}