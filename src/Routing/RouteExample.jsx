import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './NestedRouting/Layout'
import Profile from './NestedRouting/Profile'
import Settings from './NestedRouting/Settings'
import Login from './PrivateRoute/Login'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import DynamicRouteAccess from './Dynamic Routing/DynamicRouteAccess'

function RouteExample() {
    return (
        <>
        <Routes>
            <Route path='/xyz' element={<h1>hello this is xyz</h1>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/setting' element={<Settings/>}/>
            <Route path='/*' element={<h1>Page not Found</h1>}/>
            <Route path='/multi' element={<>
                <About/>
                <Contact/>
                <Settings/>
            </>}/>


            <Route path="/layout" element={<Layout/>}>
                <Route path ="profile" element={<Profile/>} />
                <Route path ="Setting" element={<Settings/>} />
            </Route>

            {/* private Routing  */}

            <Route path ="/login" element={<Login/>}/>

            <Route path="/profile" element ={
                <PrivateRoute>
                    <Profile/>
                </PrivateRoute>
            }/>

            {/* Dynamic Route  */}

            <Route path = "/dynamic/:id" element ={<DynamicRouteAccess/>}/>
        </Routes>
        </>
    )
}

export default RouteExample
