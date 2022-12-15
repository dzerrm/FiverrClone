import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GigsProfile from './GigsProfile'
import InfoProfile from './InfoProfile'
import {getUserApi} from '../../redux/reducers/AdminUserReducer'
import axios from 'axios';
import { getStoreJson } from '../../util/settings';
import { AppDispatch, RootState } from '../../redux/configStore';
import { getCongViecApi } from '../../redux/reducers/ProducReducers';

type Props = {}

export default function Profile({}: Props) {
  const dispatch:AppDispatch = useDispatch();


  return (
    <div className='container'>
      <div className="row">
        <InfoProfile />
        <GigsProfile/>
      </div>

    </div>
  )
}