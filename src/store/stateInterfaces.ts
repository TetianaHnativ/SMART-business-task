import { SET_USERS, SET_FILTERS, SET_ERROR } from './actions';
import { User, Filters } from "../components/Interfaces.ts";

export interface UserState {
    result: {
        users: User[] | null,
        error: string | null;
    }
    filteredUsers: User[];
    filters: Filters;
}

// Define your action types
interface SetUsersAction {
    type: typeof SET_USERS;
    payload: User[] | null; 
}

interface SetFiltersAction {
    type: typeof SET_FILTERS;
    payload: Filters;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string | null; 
}

// Combine all action types into a single type
export type UsersActions = SetUsersAction | SetFiltersAction | SetErrorAction;