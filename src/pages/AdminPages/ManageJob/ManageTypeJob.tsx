import { DeleteOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import React, { useState,useEffect } from 'react'
import FormJob from '../../../components/Form/FormJob'
import "antd/dist/antd.css";
import {Button, Drawer, Space, Table} from "antd";
import { ColumnsType } from 'antd/lib/table';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/configStore';
import { deleteJobTypeApi, getAllJobTypeApi, getIdJobTypeApi } from '../../../redux/reducers/AdminManageJobTypeReducer';
import ModalAddJobType from '../../../HOC/ModalAdd/ModalAddJobType';
import ModalEditJobType from '../../../HOC/ModalUpdate/ModalEditJobType';
type Props = {}

interface DataType {
  id: string;
  tenLoaiCongViec: string;
}
export default function ManageJob({}: Props) {
  const dispatch = useDispatch();
  const {arrJobType} = useSelector((state: RootState)=> state.AdminManageJobTypeReducer);
  useEffect(()=> {
    const action:any = getAllJobTypeApi();
    dispatch(action)
  },[])
  const columns:ColumnsType<DataType> = [
    {
      key:'1',
      title:'ID',
      dataIndex:'id'
    },
    {
      key:'2',
      title:'Tên Loại Công Việc',
      dataIndex:'tenLoaiCongViec'
    },
    {
      key:'3',
      title:'action',
      dataIndex:'action',
      render: (_, { id }) => (
        <div className='btn_action'>
          <button className='btn btn-danger mx-2'onClick={()=>{
            const action:any = deleteJobTypeApi(id)
            dispatch(action)
          }}><DeleteOutlined /></button>
          <button className='btn btn-primary mx-2' onClick={()=>{
             setOpenEdit(true);
             const action:any = getIdJobTypeApi(id);
             dispatch(action)
          }}
          ><SettingOutlined /></button>
        </div>
      )
    },
  ]
  //modal
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const onCloseEdit = () => {
    setOpenEdit(false);
  };
  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='main'>
      <h2>Quản Lý Công Việc</h2>
      <main>
       <Button type="primary" onClick={showDefaultDrawer}>
          Add Job
       </Button>
       <Drawer
        title="Thêm Loại Công Việc"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
      >
      <ModalAddJobType/>
      </Drawer>
      {/* edit */}
       <Drawer
        title="Sửa Công Việc"
        width={720}
        onClose={onCloseEdit}
        open={openEdit}
        bodyStyle={{ paddingBottom: 80 }}
      >
      <ModalEditJobType/>
      </Drawer>
      </main>
              <Table columns={columns} rowKey={"id"} dataSource={arrJobType}>
              </Table>
  </div>
  )
}