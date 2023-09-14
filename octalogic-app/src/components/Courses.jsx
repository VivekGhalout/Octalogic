import React, { useState } from 'react'
import {useSelector} from 'react-redux'

function Courses() {
    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const Course_list = useSelector(data => data.Course_list)

    const filteredCourseList = Course_list.filter((course) =>
        course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                        <input type="search" placeholder='Search' className='outline-0 font-normal text-[12px] leading-[16.37px] text-[#83858B]' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
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
                            {filteredCourseList.map((ele) => {
                                return (
                                    <tr className='border-b border-[#E5E7EB] font-normal text-[14px] text-[#212529] leading-[19px]'>
                                        <td className='py-[8px]'>{ele.course_name}</td>
                                        <td className='max-w-[10px] truncate'>{ele.description}</td>
                                        <td className='text-center'>{ele.instructor}</td>
                                        <td className='text-center'>{ele.instrument}</td>
                                        <td className='text-center'>{ele.day_of_week}</td>
                                        <td className='text-center'>{ele.total_students}</td>
                                        <td className='text-center'>$ {ele.price}</td>
                                        <td className='text-center'>
                                            <p className={ele.status === "Active" ? ' bg-[#CFF9DF] rounded-[4px] px-[5px] py-[4px] text-[12px]' : ele.status === "Closed" ?'px-[5px] py-[4px] bg-[#FEC0CA] rounded-[4px]' : 'px-[5px] py-[4px] bg-[#E5E7EB] rounded-[4px]'}>{ele.status}</p>
                                        </td>
                                        <td className='text-right'>
                                            <svg width="45" height="16" viewBox="-20 0 5 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.5 12C3.03043 12 3.53914 12.2107 3.91421 12.5858C4.28929 12.9609 4.5 13.4696 4.5 14C4.5 14.5304 4.28929 15.0391 3.91421 15.4142C3.53914 15.7893 3.03043 16 2.5 16C1.96957 16 1.46086 15.7893 1.08579 15.4142C0.710714 15.0391 0.5 14.5304 0.5 14C0.5 13.4696 0.710714 12.9609 1.08579 12.5858C1.46086 12.2107 1.96957 12 2.5 12ZM2.5 6C3.03043 6 3.53914 6.21071 3.91421 6.58579C4.28929 6.96086 4.5 7.46957 4.5 8C4.5 8.53043 4.28929 9.03914 3.91421 9.41421C3.53914 9.78929 3.03043 10 2.5 10C1.96957 10 1.46086 9.78929 1.08579 9.41421C0.710714 9.03914 0.5 8.53043 0.5 8C0.5 7.46957 0.710714 6.96086 1.08579 6.58579C1.46086 6.21071 1.96957 6 2.5 6ZM2.5 0C3.03043 0 3.53914 0.210714 3.91421 0.585786C4.28929 0.960859 4.5 1.46957 4.5 2C4.5 2.53043 4.28929 3.03914 3.91421 3.41421C3.53914 3.78929 3.03043 4 2.5 4C1.96957 4 1.46086 3.78929 1.08579 3.41421C0.710714 3.03914 0.5 2.53043 0.5 2C0.5 1.46957 0.710714 0.960859 1.08579 0.585786C1.46086 0.210714 1.96957 0 2.5 0Z" fill="#83858B" />
                                            </svg>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className='flex gap-[12px] px-[20px] py-[16px] top-[919px] left-[1155px] absolute bg-[#FEC0CA] rounded-[8px]' type="button" onClick={() => setShowModal(true)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#212529" />
                    </svg>
                    <span>Add Course</span>
                </button>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-[495px] h-[377px]">
                                {/*content*/}
                                <div className="border-0 rounded-[8px] relative flex flex-col gap-[16px] w-full bg-white outline-none focus:outline-none p-[16px]">
                                    {/*header*/}
                                    <h3 className="text-[22px] font-normal text-[#212529] leading-[19px]">
                                        Add Course
                                    </h3>

                                    {/*body*/}
                                    <div className="relative flex flex-col gap-[8px]">
                                        <input type="text" placeholder='Course Name' className='w-[463px] h-[32px] px-[8px] rounded-[4px] border border-[#E5E7EB] outline-none focus:outline-none' />
                                        <input type="text" placeholder='Description' className='w-[463px] h-[32px] px-[8px] rounded-[4px] border border-[#E5E7EB] outline-none focus:outline-none' />
                                        <input type="text" placeholder='Instructor' className='w-[463px] h-[32px] px-[8px] rounded-[4px] border border-[#E5E7EB] outline-none focus:outline-none' />
                                        <input type="text" placeholder='Instrument' className='w-[463px] h-[32px] px-[8px] rounded-[4px] border border-[#E5E7EB] outline-none focus:outline-none' />
                                        <input type="text" placeholder='Day of the week' className='w-[463px] h-[32px] px-[8px] rounded-[4px] border border-[#E5E7EB] outline-none focus:outline-none' />
                                        <input type="text" placeholder='Price' className='w-[463px] h-[32px] px-[8px] rounded-[4px] border border-[#E5E7EB] outline-none focus:outline-none' />
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end">
                                        <button
                                            className="text-[#212529] background-transparent font-normal px-[16px] py-[8px] text-[14px] outline-none focus:outline-none"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className="bg-[#FEC0CA] text-[#212529] font-normal text-[14px] px-[16px] py-[8px] rounded-[4px] outline-none focus:outline-none"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Add Course
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black" ></div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default Courses