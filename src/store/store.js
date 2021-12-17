
import { combineReducers, createStore } from "redux";
import { reducerLogin } from "../reducers/reducerLogin";

const reducers = combineReducers({
    log: reducerLogin
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
