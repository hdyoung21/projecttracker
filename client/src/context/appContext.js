import React, { useReducer, useContext } from "react";

import reducer from "./reducer";
import { 
    DISPLAY_ALERT, 
    CLEAR_ALERT, 
    REGISTER_USER_BEGIN, 
    REGISTER_USER_SUCCESS, 
    REGISTER_USER_ERROR, 
    SET_EDIT_PROJECT
} from "./action";
import { application } from "express";


const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
    user: null,
    //user: user ? JSON.parse(user) : null,
    token: null,
    //token: token,
    // githubUser: ''   ---I don't think we need this here (Noelle)
    //showSidebar: false,
    isEditing: false, 
    //so it can be called for the editing function later on 
    editProject: '',
    //for editing the project ID
    projectName: '',
    statusChoices: ['To-Do', 'In-Progress', 'Finished'],
    status: 'To-Do',
    codingLanguage: '', 
    projectDescription: '', 
    repoName: '', 
    company: 'Private Project' || '',
    //I think this will use private project as the variable if the user doesn't put one in 
    
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const displayAlert = () => {
        dispatch({ type:DISPLAY_ALERT });
        clearAlert();
    };

    const clearAlert = () => {
        setTimeout(() => { 
            dispatch({ type: CLEAR_ALERT });
        }, 3000);
    };

    const registerUser = async (currentUser) => {
        console.log(currentUser);
    }


    //Delete Projects
    if (application.type === SET_EDIT_PROJECT) {
        const project = state.project.find((project) => project._id === application.payload.id)
        const { _id, projectName, repoName, codingLanguage, company, createdBy, projectDescription, status } = project
    }
    return (
    <AppContext.Provider 
        value={{
            ...state, 
            displayAlert}}
        >
            {children}
        </AppContext.Provider>
    );
};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };