import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Modal, Table } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormUser from "../../../components/Form/FormUser";
import { RootState } from "../../../redux/configStore";
import {
  deleteUser,
  deleteUserApi,
  editUserApi,
  getAllUser,
  searchUserApi,
  // UserModal,
} from "../../../redux/reducers/AdminUserReducer";
//ant
import "antd/dist/antd.css";
import ModalManageUser from "../../../HOC/ModalUpdate/ModalManageUser";
import { Drawer, Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { trim } from "lodash";
import { ColumnsType } from "antd/lib/table";
import ModalAddUser from "../../../HOC/ModalAdd/ModalAddUser";
// import Search from 'antd/lib/transfer/search'

type Props = {};
const { Search } = Input;
export interface UserModal {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: number;
  birthday: string;
  avatar: string;
  gender: boolean;
  role: string;
  skill: string[];
  certification: string[];
  bookingJob: string[];
}
export default function ManageUser({}: Props) {
  const { arrayUser } = useSelector((state: RootState) => state.UserReducer);
  const dispatch = useDispatch();
  //Draw
  const [openDr, setOpenDr] = useState(false);
  const onClose = () => {
    setOpenDr(false);
  };
  //modal
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const hideModal = () => {
    setOpen(false);
  };
  const showAddDrawer = () => {
    setOpenAdd(true);
  };
  const onCloseAdd = () => {
    setOpenAdd(false);
  };
  //search
  const onSearch = (value: string) => {
    if (value) {
    console.log(value)
      const action: any = searchUserApi(value);
      dispatch(action);
    } else {
      const action: any = getAllUser();
      dispatch(action);
    }
  };
  //get all user API
  useEffect(() => {
    const action: any = getAllUser();
    dispatch(action);
  }, []);
  //delete
  const delUser = (id: number) => {
    const actionid: any = deleteUserApi(id);
    dispatch(actionid);
  };
  //edit
  const idUserEdit = (id: number) => {
    const actionid: any = editUserApi(id);
    console.log("id call edit", id);
    dispatch(actionid);
  };
  //table
  const columns: ColumnsType<UserModal> = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Tên Công Việc",
      dataIndex: "name",
      width: 300,
      render: (text) => <p className="mt-0">{text}</p>,
    },

    {
      key: "3",
      title: "Hình Ảnh",
      dataIndex: "avatar",
      width: 150,
      render: (url) => <img src={url} width="70px" height="70px" alt="..." />,
    },
    {
      key: "4",
      title: "Email",
      dataIndex: "email",
      render: (text) => <p className="mt-0 table-text">{text}</p>,
    },
    {
      key: "5",
      title: "Postion",
      dataIndex: "role",
      render: (text) => <p className="mt-0 table-text">{text}</p>,
    },
    {
      key: "6",
      title: "Action",
      dataIndex: "action",
      render: (_, { id }) => (
        <div className="btn_action d-flex">
          <button className="btn btn-danger mx-2">
            <DeleteOutlined
              onClick={() => {
                dispatch(deleteUser(id));
                delUser(id);
              }}
            />
          </button>
          <button className="btn btn-primary mx-2">
            <SettingOutlined
              onClick={() => {
                setOpenDr(true);
                idUserEdit(id);
              }}
            />
          </button>
        </div>
      ),
    },
  ];
  //end table

  return (
    <div className="main">
      <h2>Quản Lý Người Dùng</h2>
      <main>
        <Button type="primary" onClick={showAddDrawer}>
          Add User
        </Button>
        <Drawer
          // title="Close"
          width={720}
          onClose={onCloseAdd}
          open={openAdd}
          bodyStyle={{ paddingBottom: 80 }}
        >
          <ModalAddUser />
        </Drawer>
        <div>
          <Drawer
            title="Manage User"
            width={720}
            onClose={onClose}
            open={openDr}
            bodyStyle={{ paddingBottom: 80 }}
          >
            <ModalManageUser />
          </Drawer>
        </div>
      </main>
      <header>
        <div className="search">
          <Search
            id="keywordRef"
            placeholder="Search"
            className="ip-search"
            onSearch={onSearch}
            // onChange={handleChange}
            enterButton
          />
        </div>
        <div className="show-table">
          <Table columns={columns} dataSource={arrayUser}></Table>
        </div>
      </header>
    </div>
  );
}
