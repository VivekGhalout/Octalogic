import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Overview from './Overview'
import Courses from './Courses'

function Home() {
    const [page, setPage] = useState("Home")

    return (
        <div className='flex'>
            <div>
                <Sidebar page={page} setPage={setPage}/>
            </div>
            <div>
                {
                    page === "Home" ? <Overview/> : <Courses/>
                }                
            </div>
        </div>
    )
}

export default Home