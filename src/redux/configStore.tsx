import {configureStore, PayloadAction} from '@reduxjs/toolkit';
import AdminJobTypeDetailReducer from './reducers/AdminJobTypeDetailReducer';
import AdminManageJobReducer from './reducers/AdminManageJobReducer';
import AdminManageJobTypeReducer from './reducers/AdminManageJobTypeReducer';
import AdminManageService from './reducers/AdminManageService';
import CommentReducer from './reducers/CommentReducer';
import ProducReducers from './reducers/ProducReducers';
import AdminUserReducer from './reducers/AdminUserReducer';
import ReducerUser from './reducers/ReducerUser';


export const store = configureStore({
    reducer: {
        ProducReducers:ProducReducers,
        CommentReducer:CommentReducer,
        UserReducer:AdminUserReducer,
        AdminManageJobTypeReducer:AdminManageJobTypeReducer,
        AdminManageJobReducer:AdminManageJobReducer,
        AdminManageService:AdminManageService,
        AdminJobTypeDetailReducer:AdminJobTypeDetailReducer,
        ReducerUser:ReducerUser,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch