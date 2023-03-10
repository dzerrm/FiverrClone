import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { Navigate } from "react-router-dom";
import { history } from "../..";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  http,
  ID_USER,
  ROLE_USER,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/settings";
import { AppDispatch } from "../configStore";
export interface UserModal {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
  bookingJob: string[];
}
export interface IdUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
  bookingJob: any[];
}
export interface LoginModal {
  email: string;
  password: string;
}
// interface TypeArray{
//     arrayUser: UserModal[],
//     userLogin: IdUser[],

// }
const initialState: any = {
  arrayUser: [],
  userLogin: getStoreJson(USER_LOGIN),
  editUser: [],
};

const AdminUserReducer = createSlice({
  name: "AdminUserReducer",
  initialState,
  reducers: {
    getArrayUser: (state, action: PayloadAction<UserModal[]>) => {
      state.arrayUser = action.payload;
    },
    getSearchArrayUser: (state, action: PayloadAction<UserModal[]>) => {
      state.arrayUser = action.payload;
    },
    signOutAction: (state, action) => {
      state.userLogin = {};
    },
    deleteUser: (state, action) => {
      const id = action.payload;
      state.arrayUser = state.arrayUser.filter((item: any) => item.id != id);
      console.log(state.arrayUser);
    },
    getProfileAction: (state, action: PayloadAction<IdUser[]>) => {
      state.userLogin = action.payload;
    },
    editUserApiAction: (state, action: PayloadAction<UserModal[]>) => {
      state.editUser = action.payload;
    },
  },
});

export const {
  getArrayUser,
  deleteUser,
  getProfileAction,
  editUserApiAction,
  getSearchArrayUser,
  signOutAction
} = AdminUserReducer.actions;

export default AdminUserReducer.reducer;
//list user
export const getAllUser = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get("/api/users");
      let arrayUser: UserModal[] = response.data.content;
      const action = getArrayUser(arrayUser);
      dispatch(action);
    } catch (error) {}
  };
};

//login
export const loginApi = (userLogin: IdUser) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/api/auth/signin", userLogin);

      setCookie(ACCESS_TOKEN, result.data.content.token, 30);
      setStore(ACCESS_TOKEN, result.data.content.token);

      setCookie(ID_USER, result.data.content.user.id, 30);
      setStore(ID_USER, result.data.content.user.id);

      setCookie(ROLE_USER, result.data.content.user.role, 30);
      setStore(ROLE_USER, result.data.content.user.role);

      dispatch(getUserApi());
      //history
      if (getStore(ROLE_USER) === "ADMIN") {
        history.push("/admin");
      } else {
        history.push("/profile");
      }
      message.success('????ng Nh???p Th??nh C??ng')

    } catch (err) {
      message.error('????ng Nh???p Th???t B???i')
    }
  };
};
//profile
export const getUserApi = (id_user = getStore(ID_USER)) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get(`/api/users/${id_user}`);
      console.log(response);
      const action = getProfileAction(response.data.content);
      dispatch(action);
      setStoreJson(USER_LOGIN, response.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};
//xo?? user
export const deleteUserApi = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.delete(`/api/users?id=${id}`);
      message.success('Xo?? Th??nh C??ng')
    } catch (err) {
      message.error('Xo?? Th???t B???i')

    }
  };
};
//th??m user
export const creatUserApi = (values: UserModal) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.post("/api/users", values);
      console.log(response.data.content);
      message.success("Th??m th??nh c??ng");
    } catch (err) {
      console.log(err);
      alert("Th???t b???i");
    }
  };
};
//call api edit
export const editUserApi = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get(`/api/users/${id}`);
      console.log("user c???n edit", response.data.content);
      const action = editUserApiAction(response.data.content);
      message.success('Xo?? Th??nh C??ng')
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
//update user
export const updateUserApi = (data: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.put(`/api/users/${data.id}`, data);
      message.success('Update th??nh c??ng')

    } catch (err) {
      console.log(err);
      alert("update Th???t b???i");
    }
  };
};
//search user
export const searchUserApi = (value: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get(`/api/users/search/${value}`);
      console.log(response.data.content);
      let arraySearchUser: UserModal[] = response.data.content;
      const action = getSearchArrayUser(arraySearchUser);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
//update avataa
// export const updateAvatar = (file:any) => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const response = await http.post('/api/users/upload-avatar',file);
//       alert('avatar th??nh c??ng')
//     } catch (err) {
//       console.log(err);
//       alert('avatar khong th??nh c??ng')

//     }
//   };
// };