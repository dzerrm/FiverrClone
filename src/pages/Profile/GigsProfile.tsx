import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/configStore';
import { ThueCongViecModal } from '../../redux/models/jobModel';
import { deleteThueCongViecApi, getCongViecApi } from '../../redux/reducers/ProducReducers';
import { getUserApi } from '../../redux/reducers/AdminUserReducer';
import { Modal, Rate } from 'antd';
import { getIdJob } from '../../redux/reducers/AdminManageJobReducer';

type Props = {}

export default function GigsProfile({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const {congViecDaThue} =  useSelector((state: RootState)=> state.ProducReducers);
  console.log('cv da thue',congViecDaThue)

    useEffect(() => {
         dispatch(getCongViecApi());
      }, []);
      useEffect(() => {
        dispatch(getUserApi());
     }, []);
    //open modal thuê công việc
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div className="gigs-column col-8">
    <div className="gigs-prod">
        {congViecDaThue?.map((congViecThue:any, index:number )=>{
             return(
                <div className="gigs-prod-inner card-prod row" key={index}>
                <div className="prod-img col-4">
                    <img src={congViecThue.congViec?.hinhAnh} alt="..." />
                </div>
                <div className="prod-title col-8">
                    <a href="#" className="prod-name">{congViecThue.congViec?.tenCongViec}</a>
                    <p className="prod-title">{congViecThue.congViec?.moTaNgan}</p>
                    <div><Rate allowHalf defaultValue={2.5} /></div>
                    <div className="prod-footer d-flex">
                        <div className="btn-detail btn">View detail</div>
                        <div className="btn-edit btn" >Edit</div>
                        <div className=" btn" onClick={showModal}>X</div>
                        <Modal title="Bạn Muốn Huỷ Công Việc Đang Thuê" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                              <div className='text-center'>
                              <button className='btn btn-success mx-2' onClick={()=>{
                                const action = deleteThueCongViecApi(congViecThue.id);
                                dispatch(action)
                              }}>Có</button>
                              <button className='btn btn-danger mx-2' onClick={handleCancel}>Huỷ</button>
                              </div>

                        </Modal>
                    </div>
                </div>
            </div>
             )
        })}
    </div>

  </div>
  )
}