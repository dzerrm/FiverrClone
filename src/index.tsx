import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles.scss';
//setup react router dom
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import { store } from './redux/configStore';
import HomeTemplate from './templates/HomeTemplate';
import DetailCategories from './pages/Categories/DetailCategories';
import Profile from './pages/Profile/Profile';
import Detail from './pages/Detail/Detail';
import DemoProduct from './pages/Demo/DemoProduct';
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

//Admin
import AdminTemplate from './templates/AdminTemplate';
import ManageUser from './pages/AdminPages/ManageUser/ManageUser';
import ManageJob from './pages/AdminPages/ManageJob/ManageTypeJob';
import ManageJobType from './pages/AdminPages/ManageJobType.tsx/ManageJob';
import LoginDemo from './pages/LoginDemo/LoginDemo';
import ModalManageUser from './HOC/ModalUpdate/ModalManageUser';
import ManageService from './pages/AdminPages/ManageService/ManageService';
import ManageJobTypeDtail from './pages/AdminPages/ManageJobTypeDetail.tsx/ManageJobTypeDtail';
// import Login from './pages/Login/login';
// import Register from './pages/Register/Register';
import JobList from './pages/JobList/JobList';
import HeaderHome from './components/Header/HeaderHome';
import MainTemplate from './templates/MainTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import JobsList from './pages/JobList/JobList';
import JobCard from './components/JobCard/JobCard';
export const history = createBrowserHistory({ window });






const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate/>}>
          <Route index element={<Home/>}></Route>
          <Route path='/' element={<Home/>}></Route>
          <Route path='*' element={<Navigate to=""/>}></Route>
        </Route>

        <Route path='' element={<MainTemplate/>}>
            <Route path='joblist' element={<JobList/>}></Route>
            <Route path='categories'>
               <Route path=':id'  element={<DetailCategories/>}></Route>
            </Route>
            <Route path='detail' >
                <Route path=':id' element={<Detail/>}></Route>
            </Route>
            <Route path='joblist' >
                <Route path=':name' element={<JobsList/>}></Route>
            </Route>
            <Route path='job'>
                <Route path=':id' element={<JobCard/>}></Route>
            </Route>
            <Route path='profile' element={<Profile/>}></Route>
            <Route path='login' element={<Login/>}></Route>
            <Route path='register' element={<Register/>}></Route>
        </Route>
        <Route path='admin' element={<AdminTemplate/>}>
           <Route index element={<ManageUser/>}></Route>
           <Route path='managenmentjobtype' element={<ManageJob/>}></Route>
           <Route path='managenmentjob' element={<ManageJobType/>}></Route>
           <Route path='manageService' element={<ManageService/>}></Route>
           <Route path='managejobtypedetail' element={<ManageJobTypeDtail/>}></Route>
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

