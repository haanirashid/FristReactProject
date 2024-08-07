import React from 'react'
import { Route, Routes } from "react-router-dom"
import Product from '../components/Product/Product'
import Gallery from '../components/Gallery/Gallery'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Email from '../components/Email/Email'
import Number from '../components/Number/Number'
import ProductUi from '../components/ProductUi/ProductUi'
import Login from '../components/Login/Login'
import Private from '../components/Private/Private'
const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<Private/>}>
          <Route path="/Home" element={<Product />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path='/Contact'>
            <Route path='Number' element={<Number />} />
            <Route path='Email' element={<Email />} />
          </Route>
        </Route>
        <Route path='/ProductUi/:id' element={<ProductUi />} />
        <Route path='/' element={<Login />} />
      </Routes>
    </>
  )
}

export default Router