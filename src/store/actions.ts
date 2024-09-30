import { User, Filters } from "../components/Interfaces";

// Define action types as constants
export const SET_USERS = 'users/setUsers';
export const SET_FILTERS = 'users/setFilters';
export const SET_ERROR = 'users/setError';

// Action to set users in the state
export const setUsers = (users: User[] | null) => ({
    type: SET_USERS,
    payload: users,
});

// Action to set filters in the state
export const setFilters = (filters: Filters) => ({
    type: SET_FILTERS,
    payload: filters,
});

// Action to set an error message in the state
export const setError = (error: string | null) => ({
    type: SET_ERROR,
    payload: error,
});
