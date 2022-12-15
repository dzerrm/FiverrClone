import React from 'react'
import { Input } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/configStore';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { putIdJobTypeDetailApi } from '../../redux/reducers/AdminJobTypeDetailReducer';
interface DsNhomChiTietLoai {
    id: number;
    tenNhom: string;
    hinhAnh: string;
    maLoaiCongviec: number;
    dsChiTietLoai: DsChiTietLoai[];
  }
  
interface DsChiTietLoai {
    id: number;
    tenChiTiet: string;
  }
export default function ModalEditJobTypeDetail() {
  const {idJobTypeDetail} = useSelector((state: RootState)=> state.AdminJobTypeDetailReducer);
  console.log('id jbtpdetail', idJobTypeDetail)
  const dispatch = useDispatch();
  const frm = useFormik({
    enableReinitialize: true,
    initialValues: {
        id: idJobTypeDetail.id,
        tenNhom: idJobTypeDetail.tenNhom,
        hinhAnh: idJobTypeDetail.hinhAnh,
        maLoaiCongviec: idJobTypeDetail.maLoaiCongViec,
        dsChiTietLoai: idJobTypeDetail.DsChiTietLoai.tenChiTiet,
        // tenChiTiet:idJobTypeDetail.tenChiTiet,
    },

    onSubmit: (data: any) => {
      const action: any = putIdJobTypeDetailApi(data);
      dispatch(action);
    },
  });
  return (
    <div className="form-control form-modal">
        <form onSubmit={frm.handleSubmit}>
            <h3>Edit Job Type Detail</h3>
            <div className="form-table">
                <div className="form-group">
                    <label>Tên Nhóm</label>
                    <Input
                       type='text'
                       name='tenNhom'
                       id='tenNhom'
                        value={frm.values.tenNhom}
                        onChange={frm.handleChange}
                        onBlur={frm.handleBlur}
                    />
                </div>
                <div className="form-group">
                    <label>Hình Ảnh</label>
                    <Input
                       type='text'
                       name='hinhAnh'
                       id='hinhAnh'
                       value={frm.values.hinhAnh}
                       onChange={frm.handleChange}
                       onBlur={frm.handleBlur}
                    />
                </div>
                <div className="form-group">
                    <label>Mã Loại Công Việc</label>
                    <Input
                    type='text'
                    name='maLoaiCongviec'
                    id='maLoaiCongviec'
                    value={frm.values.maLoaiCongviec}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                    />
                </div>
                <div className="form-group">
                    <label>Danh Sách Chi Tiết Loại</label>
                     <div className='my-2'>
                        {idJobTypeDetail.dsChiTietLoai?.map((item:any,index:any)=>{
                            return (
                                <div key={index} className="my-2">
                                    {/* <Input
                                        type='text'
                                        name='tenChiTiet'
                                        id='tenChiTiet'
                                        value={item.tenChiTiet}
                                        onChange={frm.handleChange}
                                        onBlur={frm.handleBlur}
                                    /> */}
                                        <Input
                                        type='text'
                                        name='dsChiTietLoai'
                                        id='dsChiTietLoai'
                                        value={frm.values.dsChiTietLoai}
                                        onChange={frm.handleChange}
                                        onBlur={frm.handleBlur}
                                    />
                                </div>
                            )

                        })}

                     </div>
                </div>
                <div className="form-group">
                    <button className="update-user bg-success btn-modal" type="submit">
                        Update
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
