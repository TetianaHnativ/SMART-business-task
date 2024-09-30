import initialState from "./initialState.ts";
import { UserState, UsersActions } from './stateInterfaces.ts';
import { User, Filters } from "../components/Interfaces.ts";
import { SET_USERS, SET_FILTERS, SET_ERROR } from './actions.ts';



// Creating a reducer to handle user-related actions
const usersReducer = (state: UserState = initialState, action: UsersActions): UserState => {
    switch (action?.type) {
        case SET_USERS:
            return {
                ...state,
                result: { users: action.payload as User[], error: null },
                filteredUsers: action.payload || [],
            };
        case SET_FILTERS:
            const { name, username, email, phone } = action.payload as Filters || {};
            return {
                ...state,
                filters: action.payload,
                filteredUsers: (state.result.users || []).filter((user) =>
                    user.name.toLowerCase().includes(name.toLowerCase()) &&
                    user.username.toLowerCase().includes(username.toLowerCase()) &&
                    user.email.toLowerCase().includes(email.toLowerCase()) &&
                    user.phone.toLowerCase().includes(phone.toLowerCase())
                ),
            };
        case SET_ERROR:
            return {
                ...state,
                result: { users: null, error: action.payload as string }
            };
        default:
            return state;
    }
};

export default usersReducer;
