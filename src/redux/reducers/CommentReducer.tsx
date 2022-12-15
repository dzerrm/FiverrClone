import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { http, setStoreJson } from '../../util/settings';
import { AppDispatch } from '../configStore';
export interface ListComment {
    ngayBinhLuan:     string;
    noiDung:          string;
    saoBinhLuan:      number;
    tenNguoiBinhLuan: string;
    avatar:           string;
}

interface TypeArrayComment {
    arrayListComment: ListComment[],
}
const initialState:TypeArrayComment = {
    arrayListComment:[],

}

const CommentReducer = createSlice({
  name: 'CommentReducer',
  initialState,
  reducers: {
    getListCommentAction:(state,action: PayloadAction<ListComment[]> ) => {
        console.log(5)
        state.arrayListComment= action.payload;
        setStoreJson("arrayListComment",state.arrayListComment);
      }
  }
});

export const {getListCommentAction} = CommentReducer.actions

export default CommentReducer.reducer


export const getListComment = (MaCongViec:any)=> {
    return async (dispatch: AppDispatch)=>{
        try {
            const response = await http.get(`/api/binh-luan/lay-binh-luan-theo-cong-viec/${MaCongViec}`)
            // console.log(response.data.content);
            let arrayListComment : ListComment[] = response.data.content
            const action = getListCommentAction(arrayListComment);
           dispatch(action);
        } catch (error) {
            
        }
    }
  }