import Compare from '@/pages/Compare'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/compare" element={<Compare />} />
    </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
