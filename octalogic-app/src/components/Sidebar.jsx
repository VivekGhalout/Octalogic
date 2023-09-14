import React from 'react'
import Logo from '../assets/Images/Logo.png'

function Sidebar({page, setPage}) {
    return (
        <div className='w-24 h-[64rem] border-r border-gray-300 py-2.5 px-3 flex flex-col gap-[48px] justify-center items-center'>
            <div className='w-[3rem] h-[3rem]'>
                <img src={Logo} alt="Logo" width={"100%"} />
            </div>
            <div className='w-[72px] h-[116px] flex flex-col gap-[16px] justify-center items-center'>
                <div className={page === "Home" ? 'bg-[#FEDFE1] w-[72px] h-[50px] py-[5px] flex flex-col justify-center items-center rounded-[6px] cursor-pointer' : 'bg-[#E5E7EB] w-[72px] h-[50px] py-[5px] flex flex-col justify-center items-center rounded-[6px] cursor-pointer'} onClick={() => {setPage("Home")}}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2V4H12V2H16ZM6 2V8H2V2H6ZM16 10V16H12V10H16ZM6 14V16H2V14H6ZM18 0H10V6H18V0ZM8 0H0V10H8V0ZM18 8H10V18H18V8ZM8 12H0V18H8V12Z" fill="#901E75" />
                    </svg>
                    <p className='font-normal text-xs text-[#901E75] leading-[16.37px]'>Home</p>
                </div>
                <div className={page === "Courses" ? 'bg-[#FEDFE1] w-[72px] h-[50px] py-[5px] flex flex-col justify-center items-center rounded-[6px] cursor-pointer' : 'bg-[#E5E7EB] w-[72px] h-[50px] py-[5px] flex flex-col justify-center items-center rounded-[6px] cursor-pointer'} onClick={() => {setPage("Courses")}}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 6H17V14.18C16.69 14.07 16.35 14 16 14C14.34 14 13 15.34 13 17C13 18.66 14.34 20 16 20C17.66 20 19 18.66 19 17V8H22V6ZM15 6H3V8H15V6ZM15 10H3V12H15V10ZM11 14H3V16H11V14Z" fill="#83858B" />
                    </svg>

                    <p className='font-normal text-xs text-[#83858B] leading-[16.37px]'>Courses</p>
                </div>
            </div>
            <div className='w-[72px] h-[744px] flex flex-col justify-end items-center'>
                <div className='w-[72px] h-[50px] py-[5px] flex flex-col justify-center items-center'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 5L12.6 6.4L14.2 8H6V10H14.2L12.6 11.6L14 13L18 9L14 5ZM2 2H9V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H9V16H2V2Z" fill="#83858B" />
                    </svg>
                    <p className='font-normal text-xs text-[#83858B] leading-[16.37px]'>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar