import React, {createContext, useReducer} from 'react';

import loginState from './Login';

const LoginContext = createContext({});

const inicialState = {loginState};

export const LoginProvider = props => {
  function reducer(state, action) {
    const login = action.payLoad;

    switch (action.type) {
      case 'add':
        return {
          ...state,
          loginState: login,
        };
        return;
    }
  }

  const [state, dispatch] = useReducer(reducer, inicialState);

  return (
    <LoginContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
