import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { http } from "../../util/settings";
import { AppDispatch } from "../configStore";
import { Job } from "../models/jobModel";

const initialState: any = {
  arrayJobAdmin: [],
  idJob: {},
};

const AdminManageJobReducer = createSlice({
  name: "AdminManageJobReducer",
  initialState,
  reducers: {
    getAllJobAction: (state, action: PayloadAction<Job[]>) => {
      state.arrayJobAdmin = action.payload;
    },
    postJobAction: (state, action: PayloadAction<Job[]>) => {
      state.arrayJobAdmin = action.payload;
    },
    getIdJobAction: (state, action: PayloadAction<Job[]>) => {
      state.idJob = action.payload;
    },
    searchNameJobAction: (state, action: PayloadAction<Job[]>) => {
      state.arrayJobAdmin = action.payload;
    },
  },
});

export const { getAllJobAction, postJobAction, getIdJobAction,searchNameJobAction } =
  AdminManageJobReducer.actions;

export default AdminManageJobReducer.reducer;
// get all job
export const getAllJob = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get("/api/cong-viec");
      let arrayJobAdmin: Job[] = response.data.content;
      const action = getAllJobAction(arrayJobAdmin);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
};

// create
export const postJob = (value: Job) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.post("/api/cong-viec", value);
      let arrayJobAdmin: Job[] = response.data.content;
      const action = postJobAction(arrayJobAdmin);
      dispatch(action);
      message.success('Thêm Thành Công');

    } catch (error) {
      message.success('Thêm Thất Bại');

    }
  };
};
//delete
export const deleteJob = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.delete(`/api/cong-viec/${id}`);
      message.success('Xoá Thành Công');
    } catch (error) {}
  };
};
// get id edit
export const getIdJob = (id: any) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await http.get(`/api/cong-viec/${id}`);
      console.log(response.data.content);
      let idJob: Job[] = response.data.content;
      const action = getIdJobAction(idJob);
      dispatch(action);
    } catch (error) {
    }
  };
};
//update
export const updateIdJob= (data:any) => {
  return async (dispatch:AppDispatch) => {
      try {
          const response = await http.put(`/api/cong-viec/${data.id}`,data)
        message.success('Update Thành Công');

      }catch(err){
          console.log(err);
        message.error('Update Thất Bại');

      }
  }
}
//search
export const searchNameJob= (value:any) => {
  return async (dispatch:AppDispatch) => {
      try {
          const response = await http.get(`/api/cong-viec/lay-danh-sach-cong-viec-theo-ten/${value}`)
          console.log(response.data.content);
          let arrSearchNameJob : Job[] = response.data.content;
          const action = searchNameJobAction(arrSearchNameJob)
          dispatch(action)
      }catch(err){
          console.log(err);
      }
  }
}