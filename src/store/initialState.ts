import { UserState } from './stateInterfaces.ts';

// Initial state for the user management system
const initialState: UserState = {
    result: {
        users: [],
        error: null,
    },
    filteredUsers: [],
    filters: {
        name: "",
        username: "",
        email: "",
        phone: "",
    },
}

export default initialState;
