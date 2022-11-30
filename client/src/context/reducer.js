import { 
    DISPLAY_ALERT, 
    CLEAR_ALERT, 
    REGISTER_USER_BEGIN, 
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_ERROR,
    CREATE_JOB_BEGIN,
    CREATE_JOB_SUCCESS,
    CREATE_JOB_ERROR,
    GET_JOBS_BEGIN,
    GET_JOBS_SUCCESS,
    SET_EDIT_JOB,
    DELETE_JOB_BEGIN,
    DELETE_JOB_ERROR,
    EDIT_JOB_BEGIN,
    EDIT_JOB_SUCCESS,
    EDIT_JOB_ERROR,
} from "./action";

import { initialState } from "./appContext";

const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
        return {
            ...state, 
            showAlert: true, 
            alertType: 'danger', 
            alertText: 'Please complete all fields.'
        };
    } 
    if (action.type === CLEAR_ALERT)    {
        return {
            ...state,
            showAlert: false,
            alertType: '',
            alertText: '',
        };
    }
    //Project Actions
    
};

export default reducer;