import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../redux/configStore'
import {  getAllProduct, Job } from '../../redux/reducers/ProducReducers';

type Props = {}

export default function DemoProduct({}: Props) {
    const {arrayJob} = useSelector((state:RootState )=> state.ProducReducers )
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=> {
        const actionApi = getAllProduct();
        dispatch(actionApi);
    },[])

    const renderCongViec=()=>{
        return arrayJob.map((item:Job,index:number)=>{
            return(
          <div className="col-3 p-2" key={index}>
                <div className="img"><img src={item.hinhAnh} style={{width:'100%'}} alt="" /></div>
                <div className="card-body">
                    <div className="information-author d-flex">
                    <img src="./img/avt.jpg"width={30} alt="" />
                        <div className="name-author">
                            <span>I'm Groot</span><br />
                            <span>Level 2</span>
                        </div>                       
                    </div>
                    <div className="title">
                            <a href='' style={{color:'black'}} onClick={()=>{

                                navigate(`/detail/${item.id}`)

                            }}
                            >{item.tenCongViec}</a>
                        </div>
                </div>
            </div>
            )
        })
    }

  return (
    <div className='container'>
        <div className="row">
            {renderCongViec()}
        </div>
    </div>
  )
}