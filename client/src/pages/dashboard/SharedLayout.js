import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Navbar from '../../components/navbar'
import bigSidebar from '../../components/bigSidebar'

const SharedLayout = () => {
  return (
    <Wrapper>
        <main className='dashboard'>
            <bigSidebar />
            <div>
                <Navbar />
                <div className='dashboardpage'>
                    <Outlet />
                </div>
            </div>
        </main>
    </Wrapper>

  )
}

export default SharedLayout