import React, { createContext, useReducer } from "react";
import { ACTIONS } from "../constants";
import { defaultContext } from "./defaultContext";


export const Context = createContext(defaultContext)

const reducer = (state,action) => {
    switch (action.type) {
        case ACTIONS.SET_JOBS:
            return {...state,jobs:[...action.jobs]}
        case ACTIONS.SELECT_JOB:
            localStorage.setItem('selectedJob',JSON.stringify(action.job))
            return {...state,selectedJob:action.job}
        default:
            break;
    }
}


export const Provider = ({children}) => {

    const [state,dispatch] = useReducer(reducer, defaultContext)

    const value = {state,dispatch}

    return <Context.Provider value={value} >
    {children}
    </Context.Provider>
}