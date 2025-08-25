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
import AppLayout from "@/components/Layouts/AppLayout";
import FilterPage from "@/pages/FilterPages/FilterPAge";
import HomePage from "@/pages/Home/HomePage";
import SearchPage from "@/pages/SearchPages/SearchPage";
import ScrollToTop from "@/utils/ScrollToTop";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function AppRoutes(){
    return(
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Layout for all app */}
                <Route element={<AppLayout />} >
                {/* home */}
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/filter" element={<FilterPage />} />
                </Route>
            </Routes>
        </Router>

    )
}