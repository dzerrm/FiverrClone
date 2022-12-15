import { DeleteOutlined, EyeOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Drawer, Input, Table } from 'antd';
import { ColumnsType } from 'antd/lib/table';
// import Search from 'antd/lib/transfer/search';
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ModalAddJob from '../../../HOC/ModalAdd/ModalAddJob';
import ModalEditJob from '../../../HOC/ModalUpdate/ModalEditJob';
import { RootState } from '../../../redux/configStore';
import { deleteJob, getAllJob, getIdJob, searchNameJob } from '../../../redux/reducers/AdminManageJobReducer';
import { getAllUser, searchUserApi } from '../../../redux/reducers/AdminUserReducer';

interface DataType {
  id:                    number;
  tenCongViec:           string;
  danhGia:               number;
  giaTien:               number;
  nguoiTao:              number;
  hinhAnh:               string;
  moTa:                  string;
  maChiTietLoaiCongViec: number;
  moTaNgan:              string;
  saoCongViec:           number;
}
type Props = {};

const { Search } = Input;

export default function ManageJobType({}: Props) {
  const {arrayJobAdmin} = useSelector((state: RootState)=> state.AdminManageJobReducer);
  console.log('arr job',arrayJobAdmin)
  const dispatch = useDispatch();
  useEffect(()=> {
    const action:any = getAllJob();
    dispatch(action)
  },[])
  //--------------- Data -----------
  const columns:ColumnsType<DataType> = [
    {
      key:'1',
      title:'ID',
      dataIndex:'id'
    },
    {
      key:'2',
      title:'Tên Công Việc',
      dataIndex:'tenCongViec',
      width: 300,
      render: (text) => <p className="mt-0">{text}</p>,
    },

    {
      key:'3',
      title:'Hình Ảnh',
      dataIndex:'hinhAnh',
      width: 150,
      render: (url) => <img src={url} width="70px" height="70px" alt="..." />,
    },
    {
      key:'4',
      title:'Mô Tả Ngắn',
      dataIndex:'moTaNgan',
      render: (text) => <p className="mt-0 table-text">{text}</p>,
    },
    {
      key:'5',
      title:'action',
      dataIndex:'action',
      render: (_, { id }) => (
        <div className='btn_action d-flex'>
          <button className='btn btn-danger mx-2' onClick={()=>{
                       const action:any = deleteJob(id)
                       dispatch(action)
          }}><DeleteOutlined /></button>
          <button className='btn btn-primary mx-2' ><SettingOutlined onClick={()=>{
             setOpenEditJob(true);
             const action:any = getIdJob(id);
             dispatch(action)
          }}/></button>
        </div>
      )
    },
  ]
  //search
  const onSearch = (value: string) => {
    if(value){
      const action:any = searchNameJob(value)
      console.log('key search',value)
      dispatch(action)
    }else{
      const action:any = getAllJob()
      dispatch(action)
    }
  };
  //Drawer
  const [open, setOpen] = useState(false);
  const [openEditJob, setOpenEditJob] = useState(false);

  const showDefaultDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const showEditDrawer = () => {
    setOpenEditJob(true)
  }
  const onCloseEdit = () => {
    setOpenEditJob(false);
  };
  return (
    <div className='main'>
      <h2>Quản Lý Công Việc</h2>
    <main>
       <Button type="primary" onClick={showDefaultDrawer}>
          Add Job Type
       </Button>
       <Drawer
        // title="Close"
        width={720}
        onClose={onClose}
        open={open}
        bodyStyle={{ paddingBottom: 80 }}
      >
       <ModalAddJob/>
      </Drawer>
      <Drawer
        // title="Sửa Công Việc"
        width={720}
        onClose={onCloseEdit}
        open={openEditJob}
        bodyStyle={{ paddingBottom: 80 }}
      >
      <ModalEditJob/>
      </Drawer>
    </main>
    <header>
    <Search
            id="keywordRef"
            placeholder="Search"
            className="ip-search"
            onSearch={onSearch}
            enterButton
          />
    </header>
    <br />
    <Table columns={columns} dataSource={arrayJobAdmin}>
    </Table>
  </div>
  )
}