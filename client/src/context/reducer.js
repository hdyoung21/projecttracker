import { DISPLAY_ALERT, CLEAR_ALERT } from "./action";
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
    throw new Error(`no such action : ${action.type}`);
};

export default reducer;