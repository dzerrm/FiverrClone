import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import MenuPages from '../components/MenuPages/MenuPages'

type Props = {}

export default function MainTemplate({}: Props) {
  return (
    <>
      <MenuPages/>
      <Outlet/>
      <Footer/>
    </>
  )
}