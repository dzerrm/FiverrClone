import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http } from '../../util/settings';
import { AppDispatch } from '../configStore';
import { DsNhomChiTietLoai } from '../models/jobModel';

const initialState:any = {
    arrayJobTypeDetail: [],
    idJobTypeDetail: {},
}

const AdminJobTypeDetailReducer = createSlice({
  name: 'AdminJobTypeDetailReducer',
  initialState,
  reducers: {
        getAllJobTypeDetailAction: (state,action: PayloadAction<DsNhomChiTietLoai[]> ) => {
        state.arrayJobTypeDetail = action.payload;
      },
      getIdJobTypeDetailAction: (state,action: PayloadAction<DsNhomChiTietLoai[]> ) => {
        state.idJobTypeDetail = action.payload;
      },
  }
});

export const {getAllJobTypeDetailAction,getIdJobTypeDetailAction} = AdminJobTypeDetailReducer.actions

export default AdminJobTypeDetailReducer.reducer


export const getAllJobTypeDetailApi = () => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.get("/api/chi-tiet-loai-cong-viec");
        let arrayJobTypeDetail: DsNhomChiTietLoai[] = response.data.content;
        const action = getAllJobTypeDetailAction(arrayJobTypeDetail);
        // console.log('ds chi tiết loại cv',arrayJobTypeDetail)
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
  };

// get id job type detail 
export const getIdJobTypeDetailApi = (id:any) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.get(`/api/chi-tiet-loai-cong-viec/${id}`);
        let idJobTypeDetail: DsNhomChiTietLoai[] = response.data.content;
        const action = getIdJobTypeDetailAction(idJobTypeDetail);
        // console.log('ID chi tiết loại cv',idJobTypeDetail)
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
  };

  export const putIdJobTypeDetailApi = (data:any) => {
    return async (dispatch: AppDispatch) => {
      try {
        const response = await http.put(`/api/chi-tiet-loai-cong-viec/sua-nhom-chi-tiet-loai/${data.id}`,data);
        // let idJobTypeDetail: DsNhomChiTietLoai[] = response.data.content;
        // const action = getIdJobTypeDetailAction(idJobTypeDetail);
        // // console.log('ID chi tiết loại cv',idJobTypeDetail)
        // dispatch(action);
        alert('update thành ccong')
      } catch (error) {
        console.log(error);
      }
    };
  };