import React from 'react'
import data from '../../db.json'

function Courses() {
    return (
        <div className='w-[1284px] h-[1024px] border-2 px-[36px] py-[24px] gap-[32px] flex flex-col bg-[#E5E7EB]'>
            <div className='font-bold text-[28px] text-[#83858B] leading-[38.19px]'>
                Courses
            </div>

            <div className='w-[1212px]'>
                <div className='w-[1212px] h-[22px] flex justify-between items-center'>
                    <p className='font-bold text-[16px] text-[#83858B] leading-[21.82px]'>COURSE LIST</p>
                    <div className='flex items-center gap-[5px] w-[223px] h-32px bg-[#ffffff] p-[8px] rounded-[4px] border border-[#E5E7EB]'>
                        <span>
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.33333 2C7.4826 2 8.58481 2.45655 9.39746 3.2692C10.2101 4.08186 10.6667 5.18406 10.6667 6.33333C10.6667 7.40667 10.2733 8.39333 9.62667 9.15333L9.80667 9.33333H10.3333L13.6667 12.6667L12.6667 13.6667L9.33333 10.3333V9.80667L9.15333 9.62667C8.36703 10.2978 7.36714 10.6666 6.33333 10.6667C5.18406 10.6667 4.08186 10.2101 3.2692 9.39746C2.45655 8.58481 2 7.4826 2 6.33333C2 5.18406 2.45655 4.08186 3.2692 3.2692C4.08186 2.45655 5.18406 2 6.33333 2ZM6.33333 3.33333C4.66667 3.33333 3.33333 4.66667 3.33333 6.33333C3.33333 8 4.66667 9.33333 6.33333 9.33333C8 9.33333 9.33333 8 9.33333 6.33333C9.33333 4.66667 8 3.33333 6.33333 3.33333Z" fill="#83858B" />
                            </svg>
                        </span>
                        <input type="search" placeholder='Search' className='outline-0 font-normal text-[12px] leading-[16.37px] text-[#83858B]' />
                    </div>

                </div>

                <div className='bg-[#ffffff] p-[24px] mt-[16px] rounded-[6px]'>
                    <table className='w-[100%]'>
                        <thead >
                            <tr className='border-b border-[#D1D5DB] font-bold text-[14px] text-[#212529] leading-[19px]'>
                                <th className='text-left pb-[16px] pt-[8px]'>Name</th>
                                <th>Description</th>
                                <th>Instructor</th>
                                <th>Instrument</th>
                                <th>Day of Week</th>
                                <th># of Students</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th className='text-right'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.Course_list.map((ele) => {
                                return (
                                    <tr className='border-b border-[#E5E7EB] font-normal text-[14px] text-[#212529] leading-[19px]'>
                                        <td className='py-[8px]'>{ele.course_name}</td>
                                        <td className='max-w-[10px] truncate'>{ele.description}</td>
                                        <td className='text-center'>{ele.instructor}</td>
                                        <td className='text-center'>{ele.instrument}</td>
                                        <td className='text-center'>{ele.day_of_week}</td>
                                        <td className='text-center'>{ele.total_students}</td>
                                        <td className='text-center'>$ {ele.price}</td>
                                        <td className='text-center'>{ele.status}</td>
                                        <td className='text-right'>adfgg</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <button className='flex gap-[12px] px-[20px] py-[16px] top-[919px] left-[1155px] absolute bg-[#FEC0CA] rounded-[8px]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#212529" />
                    </svg>
                    <span>Add Course</span>
                </button>

            </div>
        </div>
    )
}

export default Courses