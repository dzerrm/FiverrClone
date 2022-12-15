import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { message } from 'antd';
import { http } from '../../util/settings';
import { AppDispatch } from '../configStore';
import { ThueCongViecModal } from '../models/jobModel';

const initialState:any = {
    arrService: [],
    getIdService: {}
}

const AdminManageService = createSlice({
  name: 'AdminManageService',
  initialState,
  reducers: {
    getAllServiceApiAction:(state,action: PayloadAction<ThueCongViecModal[]> ) => {
        state.arrService = action.payload;
      },
      getIdServiceApiAction:(state,action: PayloadAction<ThueCongViecModal[]> ) => {
        state.getIdService = action.payload;
      },
  }
});

export const {getAllServiceApiAction,getIdServiceApiAction} = AdminManageService.actions

export default AdminManageService.reducer

// get all service
export const getAllServiceApi = ()=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.get('api/thue-cong-viec');
        let arrService: ThueCongViecModal[] = response.data.content;
        const action = getAllServiceApiAction(arrService);
        // console.log('data cong việc thuê', arrService)
        dispatch(action);
        } catch (error) {
        }
      }
}
//delete
export const deletelIdServiceApi = (id:any)=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.delete(`api/thue-cong-viec/${id}`);
        message.success('xoá thành công')
        } catch (error) {
        alert('xoá không thành công')

        }
      }
}

//get id 
export const getIdServiceApi = (id:any)=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.get(`api/thue-cong-viec/${id}`);
        let getIdService: ThueCongViecModal[] = response.data.content;
        const action = getIdServiceApiAction(getIdService);
        dispatch(action);
        } catch (error) {
        }
      }
}
//update
export const updateIdService = (data:any)=>{
    return async (dispatch: AppDispatch) =>{
      try {
        const response = await http.put(`api/thue-cong-viec/${data.id}`, data);
        message.success('update thành công')
        } catch (error) {
        alert('update không thành công')

        }
      }
}
