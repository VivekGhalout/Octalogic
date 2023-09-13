import React from 'react'
import data from '../../db.json'

function Overview() {
    return (
        <div className='w-[1284px] h-[1024px] border-2 px-[36px] py-[24px] gap-[32px] flex flex-col bg-[#E5E7EB]'>
            <div className='font-bold text-[28px] text-[#83858B] leading-[38.19px]'>
                Overview
            </div>

            <div className='w-[1212px] h-[98px] flex justify-between items-center'>
                <div className='w-[232px] h-[98px] p-[16px] flex flex-col gap-[8px]  bg-[#ffffff] rounded-[6px]'>
                    <div className='w-[200px] h-[66px] flex gap-[16px] items-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#B2EECF" />
                            <path d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z" fill="black" />
                        </svg>
                        <div>
                            <p className='font-normal text-[22px] text-[#212529] leading-[30px]'>164</p>
                            <p className='font-normal text-[12px] text-[#83858B] leading-[16.37px]'>total number of students</p>
                        </div>
                    </div>
                    <div className='w-[200px] h-[12px] text-right'>
                        <p className='font-normal text-[9px] text-[#B33086] leading-[12.28px]'>view</p>
                    </div>
                </div>

                <div className='w-[232px] h-[98px] p-[16px] flex flex-col gap-[8px]  bg-[#ffffff] rounded-[6px]'>
                    <div className='w-[200px] h-[66px] flex gap-[16px] items-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#B2EECF" />
                            <path d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z" fill="black" />
                        </svg>
                        <div>
                            <p className='font-normal text-[22px] text-[#212529] leading-[30px]'>12</p>
                            <p className='font-normal text-[12px] text-[#83858B] leading-[16.37px]'>total number of courses</p>
                        </div>
                    </div>
                    <div className='w-[200px] h-[12px] text-right'>
                        <p className='font-normal text-[9px] text-[#B33086] leading-[12.28px]'>view</p>
                    </div>
                </div>

                <div className='w-[232px] h-[98px] p-[16px] flex flex-col gap-[8px]  bg-[#ffffff] rounded-[6px]'>
                    <div className='w-[200px] h-[66px] flex gap-[16px] items-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#B2EECF" />
                            <path d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z" fill="black" />
                        </svg>
                        <div>
                            <p className='font-normal text-[22px] text-[#212529] leading-[30px]'>$2000</p>
                            <p className='font-normal text-[12px] text-[#83858B] leading-[16.37px]'>total amount earned</p>
                        </div>
                    </div>
                    <div className='w-[200px] h-[12px] text-right'>
                        <p className='font-normal text-[9px] text-[#B33086] leading-[12.28px]'>view</p>
                    </div>
                </div>

                <div className='w-[232px] h-[98px] p-[16px] flex flex-col gap-[8px]  bg-[#ffffff] rounded-[6px]'>
                    <div className='w-[200px] h-[66px] flex gap-[16px] items-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#B2EECF" />
                            <path d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z" fill="black" />
                        </svg>
                        <div>
                            <p className='font-normal text-[22px] text-[#212529] leading-[30px]'>Guitar</p>
                            <p className='font-normal text-[12px] text-[#83858B] leading-[16.37px]'>best performing course</p>
                        </div>
                    </div>
                    <div className='w-[200px] h-[12px] text-right'>
                        <p className='font-normal text-[9px] text-[#B33086] leading-[12.28px]'>view</p>
                    </div>
                </div>

                <div className='w-[232px] h-[98px] p-[16px] flex flex-col gap-[8px]  bg-[#ffffff] rounded-[6px]'>
                    <div className='w-[200px] h-[66px] flex gap-[16px] items-center'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="32" height="32" rx="16" fill="#B2EECF" />
                            <path d="M19.6364 15.4545C21.1455 15.4545 22.3546 14.2364 22.3546 12.7273C22.3546 11.2182 21.1455 10 19.6364 10C18.1273 10 16.9091 11.2182 16.9091 12.7273C16.9091 14.2364 18.1273 15.4545 19.6364 15.4545ZM12.3637 15.4545C13.8727 15.4545 15.0818 14.2364 15.0818 12.7273C15.0818 11.2182 13.8727 10 12.3637 10C10.8546 10 9.63638 11.2182 9.63638 12.7273C9.63638 14.2364 10.8546 15.4545 12.3637 15.4545ZM12.3637 17.2727C10.2455 17.2727 6.00002 18.3364 6.00002 20.4545V22.7273H18.7273V20.4545C18.7273 18.3364 14.4818 17.2727 12.3637 17.2727ZM19.6364 17.2727C19.3727 17.2727 19.0727 17.2909 18.7546 17.3182C19.8091 18.0818 20.5455 19.1091 20.5455 20.4545V22.7273H26V20.4545C26 18.3364 21.7546 17.2727 19.6364 17.2727Z" fill="black" />
                        </svg>
                        <div>
                            <p className='font-normal text-[22px] text-[#212529] leading-[30px]'>Flute</p>
                            <p className='font-normal text-[12px] text-[#83858B] leading-[16.37px]'>worst performing course</p>
                        </div>
                    </div>
                    <div className='w-[200px] h-[12px] text-right'>
                        <p className='font-normal text-[9px] text-[#B33086] leading-[12.28px]'>view</p>
                    </div>
                </div>


            </div>

            <div className='w-[1212px]'>
                <div className='w-[1212px] h-[22px] flex justify-between items-center'>
                    <p className='font-bold text-[16px] text-[#83858B] leading-[21.82px]'>Latest Enrolments</p>
                    <p className='font-normal text-[14px] text-[#901E75] leading-[19px]'>View All Courses</p>
                </div>

                <div className='bg-[#ffffff] p-[24px] mt-[16px] rounded-[6px]'>
                    <table className='w-[1160px]'>
                        <thead>
                            <tr className='border-b border-[#D1D5DB] font-bold text-[14px] text-[#212529] leading-[19px]'>
                                <th className='text-left pb-[16px] pt-[8px]'>Enr. No</th>
                                <th >S. Name</th>
                                <th >C. Name</th>
                                <th >Fees</th>
                                <th className='text-right'>Enr. Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.Latest_enrolments.map((ele) => {
                                return (
                                    <tr className='border-b border-[#E5E7EB] font-normal text-[14px] text-[#212529] leading-[19px]'>
                                        <td className='py-[8px]'>{ele.enr_no}</td>
                                        <td className='text-center'>{ele.student_name}</td>
                                        <td className='text-center'>{ele.course_name}</td>
                                        <td className='text-center'> $ {ele.fee}</td>
                                        <td className='text-right'>{ele.enr_date}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Overview