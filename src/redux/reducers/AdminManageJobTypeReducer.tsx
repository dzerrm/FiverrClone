import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { message } from 'antd';
import { http } from '../../util/settings';
import { AppDispatch } from '../configStore';
import { ModalJob } from '../models/jobModel';

const initialState:any = {
    arrJobType: [],
    getIdJob: {},
}

const AdminManageJobTypeReducer = createSlice({
  name: 'AdminManageJobReducer',
  initialState,
  reducers: {
    getAllJobTypeApiAction:(state,action: PayloadAction<ModalJob[]> ) => {
        state.arrJobType = action.payload;
      },
    postJobTypeApiAction:(state,action: PayloadAction<ModalJob[]> ) => {
        state.arrJobType = action.payload;
      },
      getIdJobTypeApiAction:(state,action: PayloadAction<ModalJob[]> ) => {
        state.getIdJob = action.payload;
      },
  }
});

export const {getAllJobTypeApiAction,postJobTypeApiAction,getIdJobTypeApiAction} = AdminManageJobTypeReducer.actions

export default AdminManageJobTypeReducer.reducer



export const getAllJobTypeApi = ()=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.get('/api/loai-cong-viec');
        let arrJobType: ModalJob[] = response.data.content;
        const action = getAllJobTypeApiAction(arrJobType);
        dispatch(action);
        } catch (error) {
        }
      }
}

export const postJobTypeApi = (value:any)=>{
  return async (dispatch: AppDispatch) =>{
    try {
      const response = await http.post('/api/loai-cong-viec',value);
      let arrJobType: ModalJob[] = response.data.content;
      const action = postJobTypeApiAction(arrJobType);
      message.success('Thêm thành công')
      dispatch(action);
      } catch (error) {
       message.error('Thêm không thành công')

      }
    }
}

export const deleteJobTypeApi = (id:any)=>{
  return async (dispatch: AppDispatch) =>{
    try {
      const response = await http.delete(`/api/loai-cong-viec/${id}`);
      message.success('xoá thành công')
      } catch (error) {
      alert('xoá thất bại')

      }
    }
}

export const getIdJobTypeApi = (id:any)=>{
  return async (dispatch: AppDispatch) =>{
    try {
      const response = await http.get(`/api/loai-cong-viec/${id}`);
      let getIdJob :  ModalJob[] = response.data.content;
      const action = getIdJobTypeApiAction(getIdJob);
      dispatch(action)
      } catch (error) {
      }
    }
}

export const updateIdJobType= (data:any) => {
  return async (dispatch:AppDispatch) => {
      try {
          const response = await http.put(`/api/loai-cong-viec/${data.id}`,data)
          message.success('update thành công');
      }catch(err){
          console.log(err);
          alert('update Thất bại')
      }
  }
}