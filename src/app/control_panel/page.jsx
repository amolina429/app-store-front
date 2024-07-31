import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

function ControlPanel() {
    return (
        <div className='d-flex flex-row'>
            <div className='vh-100'>
                <Sidebar />
            </div>
            <div className='vh-100'>
                <Navbar />
            </div>
        </div>
    )
}

export default ControlPanel