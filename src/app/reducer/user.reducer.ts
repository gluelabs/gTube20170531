import { ActionReducer, Action } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export interface State {
    isLogged: boolean;
    role: string;
}
export const initialState: State = {
    isLogged: false,
    role: "NONE"
}; 
export function userReducer(state = initialState, action: Action):State {
    console.log(`Dispatched user action: ${action.type}`);
    switch (action.type) {
        case LOGIN: {
            return {
                isLogged: true,
                role: action.payload.role
            };
        }
        case LOGOUT: {
            return {
                isLogged: false,
                role: "NONE"
            };
        }
        default: {
            return state;
        }
    }
    
}
