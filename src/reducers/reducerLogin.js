import { types } from "../types/types"

export const reducerLogin = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                user: action.payload.user,
                password: action.payload.password
            }

            case types.logout:
                return {
                }
        default:
            return state
    }

}
