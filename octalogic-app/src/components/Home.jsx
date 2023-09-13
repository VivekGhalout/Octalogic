import React from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview'
import Courses from './Courses'

function Home() {
    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div>
                {/* <Overview/> */}
                <Courses/>
            </div>
        </div>
    )
}

export default Home