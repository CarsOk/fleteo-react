import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

const init = () => {
	const user = JSON.parse(localStorage.getItem( 'user' ));
	return {
		logged: !!user,
		user
	}
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  const onLogin = (name = '') => {

		const user = {
			name
		}
    const action = {
      type: types.login,
      payload: user
		};
		localStorage.setItem( 'user', JSON.stringify( user ) );

    dispatch(action);
	};
	
	const logOut = () => {

		localStorage.removeItem( 'user' )
		const action = {
      type: types.logout,
      payload: null
		};
		dispatch(action);		
	}

  return (
    <AuthContext.Provider value={{
				...state, 
				/* metodos*/ 
				onLogin, 
				logOut 
			 }}>
      {children}
    </AuthContext.Provider>
  );
};
