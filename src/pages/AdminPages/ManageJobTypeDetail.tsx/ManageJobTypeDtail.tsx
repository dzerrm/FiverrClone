import { DeleteOutlined, EyeOutlined, SettingOutlined } from '@ant-design/icons';
import { Drawer, Tag } from 'antd';
import Table, { ColumnsType } from 'antd/lib/table';
import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ModalEditJobTypeDetail from '../../../HOC/ModalUpdate/ModalEditJobTypeDetail';
import { RootState } from '../../../redux/configStore';
import { getAllJobTypeDetailApi, getIdJobTypeDetailApi } from '../../../redux/reducers/AdminJobTypeDetailReducer';

type Props = {}
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
export default function ManageJobTypeDtail({}: Props) {
  const {arrayJobTypeDetail} = useSelector((state: RootState)=> state.AdminJobTypeDetailReducer);
    const dispatch = useDispatch();
    useEffect (() =>{
        const action:any = getAllJobTypeDetailApi();
        dispatch(action)
    }, [])
    //----------------data table-------------
    const columns:ColumnsType<DsNhomChiTietLoai> = [
        {
          key:'1',
          title:'ID',
          dataIndex:'id'
        },
        {
          key:'2',
          title:'Tên Nhóm',
          dataIndex:'tenNhom',
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
          title:'ID Job',
          dataIndex:'maLoaiCongviec',
        },
        {
            key:'5',
            title:'Danh Sách Chi Tiết Loại',
            dataIndex:'dsChiTietLoai',
            render: (_,{dsChiTietLoai}) => (
                <div>
                    {dsChiTietLoai?.map((item,index)=>{
                        return (
                            <p key={index}>
                                 <p>{item.tenChiTiet}</p>
                            </p>
                        )
                    })}
                </div>
            ) 
          },
        {
          key:'6',
          title:'Action',
          dataIndex:'action',
          render: (_, {id}) => (
            <div className='btn_action d-flex'>
              <button className='btn btn-danger mx-2'><DeleteOutlined /></button>
              <button className='btn btn-primary mx-2' onClick={()=>{
                setOpenEdit(true);
                const action:any = getIdJobTypeDetailApi(id);
                dispatch(action);
              }}><SettingOutlined /></button>
            </div>
          )
        },
      ]
      //Modal Drawer
  const [openEdit, setOpenEdit] = useState(false);
  const onClose = () => {
    setOpenEdit(false);
  };
  return (
    <div className='main'>
      <h2>Quản Lý Công Việc</h2>
        <main>
        <Drawer
        width={720}
        onClose={onClose}
        open={openEdit}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <ModalEditJobTypeDetail/>
      </Drawer>
        </main>
    <Table columns={columns} dataSource={arrayJobTypeDetail}>
    </Table>
    </div>
  )
}
