import React from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview'

function Home() {
    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div>
                <Overview/>
            </div>
        </div>
    )
}

export default Home