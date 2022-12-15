import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import HeaderHome from '../components/Header/HeaderHome'

type Props = {}

export default function HomeTemplate({}: Props) {
  return (
    <>
      <HeaderHome/>
      <Outlet/>
      <Footer/>
    </>
  )
}