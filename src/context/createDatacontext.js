import React, {useState, useReducer} from 'react';

export default (reducer, actions, initialState) => {

    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);
    
    //new actions object for passed down actions
    const boundActions = {};
    //we add down our passed down objects into the our boundedActions object
    for(let key in actions)
        boundActions[key] = actions[key](dispatch);
    
    //passed down actions object to context to provide to the rest of our components
    return <Context.Provider value={{state, ...boundActions}}>
        {children}
    </Context.Provider>
    }

    return { Context, Provider };
}