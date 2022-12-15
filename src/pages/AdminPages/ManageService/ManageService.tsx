import { DeleteOutlined, EyeOutlined, RadiusSettingOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { Drawer } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React, {useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import FormService from '../../../components/Form/FormService'
import ModalEditService from '../../../HOC/ModalUpdate/ModalEditService';
import { RootState } from '../../../redux/configStore';
import { deletelIdServiceApi, getAllServiceApi, getIdServiceApi } from '../../../redux/reducers/AdminManageService';

type Props = {}

interface DataType {
  id:          number;
  maCongViec:  number;
  maNguoiThue: number;
  ngayThue:    string;
  hoanThanh:   boolean;
}
export default function ManageService({}: Props) {
  const dispatch = useDispatch();
  useEffect(()=> {
    const action:any = getAllServiceApi();
    dispatch(action)
  },[])

  const {arrService} = useSelector((state: RootState)=> state.AdminManageService);
  console.log('clg', arrService)
  const columns:ColumnsType<DataType> = [
    {
      key:'1',
      title:'ID',
      dataIndex:'id'
    },
    {
      key:'2',
      title:'Mã Công Việc',
      dataIndex:'maCongViec',
    },

    {
      key:'3',
      title:'Mã Người Thuê',
      dataIndex:'maNguoiThue',
    },
    {
      key:'4',
      title:'Ngày Thuê',
      dataIndex:'ngayThue',
    },
    {
      key:'5',
      title:'Hoàn Thành',
      dataIndex:'hoanThanh',
      render: (hoanThanh) => {
        if (hoanThanh) {
          return <p className="m-0">Hoàn thành</p>;
        }
        return <p className="m-0">Chưa hoàn thành</p>;
      }
    },
    {
      key:'6',
      title:'Action',
      dataIndex:'action',
      render: (_, { id }) => (
        <div className='btn_action d-flex'>
          <button className='btn btn-danger mx-2'><DeleteOutlined onClick={()=>{
            const action:any = deletelIdServiceApi(id);
            dispatch(action);
            alert('delete')
          }}
          /></button>
          <button className='btn btn-primary mx-2' onClick={()=>{
             setOpen(true);
             const action:any = getIdServiceApi(id);
             dispatch((action))
          }} ><SettingOutlined /></button>
        </div>
      )
    },
  ]
  //Modal Drawer
  const [open, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className='main'>
      <h2>Quản Lý Dịch Vụ</h2>
         <main>
          <Drawer
            title="Thêm Loại Công Việc"
            width={720}
            onClose={onClose}
            open={open}
            bodyStyle={{ paddingBottom: 80 }}
          >
          <ModalEditService/>
          </Drawer>
         </main>
         <Table columns={columns} dataSource={arrService}>
          </Table>
    </div>
  )
}